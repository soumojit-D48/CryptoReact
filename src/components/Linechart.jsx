import React, { useContext, useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import { CoinContext } from '../context/CoinContext';

const Linechart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Price"]]);
  const {currency} = useContext(CoinContext)

  useEffect(() => {
    if (historicalData?.prices?.length > 0) {
      const formattedData = [["Date", "Price"]];

      historicalData.prices.forEach(([timestamp, price]) => {
        if (typeof price === 'number') {
          const date = new Date(timestamp);
          const label = `${date.getDate()}/${date.getMonth() + 1}`;
          formattedData.push([label, price]);
        }
      });

      setData(formattedData);
    }
  }, [historicalData]);

  return (
    <div className="w-full h-[400px]">
      <Chart
        chartType="LineChart"
        width="100%"
        height="90%"
        data={data}
        options={{
          title: "Price Trend",
          curveType: "function",
          legend: { position: "bottom" },
          hAxis: { title: "Date" },
          vAxis: { title: `Price (${currency.name})` },
        }}
        loader={<div>Loading Chart...</div>}
      />
    </div>
  );
};

export default Linechart;
