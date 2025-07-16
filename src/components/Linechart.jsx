// import React, { useEffect, useState } from 'react'
// import Chart from 'react-google-charts'

// const Linechart = ({historicalData}) => {

//     const [data, setData] = useState([["Date", "Price"]])

//     useEffect(() => {
//         let dataCopy = [["Date", "Prices"]]
//         if(historicalData.prices){
//             historicalData.prices.map((item) => {
//                 dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
//             })  // toLocaleDateString ->  12/07/2025 // slice(0,-5)->  from here we remove /2025 these 5 chars form end
//             setData(dataCopy)
//         }
//     },[historicalData])


//   return (
//     <Chart
//         chartType='LineChart'
//         data={data}
//         height="100%"
//         legendToggle
//     />
//   )
// }

// export default Linechart

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
