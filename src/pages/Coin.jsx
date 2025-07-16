import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../context/CoinContext.jsx";
import Linechart from "../components/Linechart.jsx";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState("");
  const [historicalData, setHistoricalData] = useState("");
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-KEPoa5mv1FjThAgScke81m69",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = () => {
    const url =
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-KEPoa5mv1FjThAgScke81m69",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => setHistoricalData(res))
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData()
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="py-0 px-20"> {/* coin */}
        <div className="flex flex-col items-center gap-5 mx-auto my-20 mb-12 "> {/* coin-name */}
          <img className="max-w-30" src={coinData.image.large} alt="" />
          <p>
            <b className="text-3xl font-bold">
              {coinData.name} ({coinData.symbol.toUpperCase()}) {/* name = bitcoin and symbol = (BTC) */}
            </b>
          </p>
        </div>

        <div className="max-w-2xl h-fit m-auto"> {/* coin-cheart */}
          <Linechart historicalData = {historicalData}/>
        </div>

        <div className="max-w-2xl mx-auto my-15 flex flex-col coin-info"> {/* coin-info */}
          <ul className="flex justify-between py-2 list-none border-b border-[#5f5d5f]">
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul className="flex justify-between py-2 list-none border-b border-[#5f5d5f]">
            <li>Current Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price[currency.name].toLocaleString()}</li>
          </ul>
          <ul className="flex justify-between py-2 list-none border-b border-[#5f5d5f]">
            <li>Market cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap[currency.name].toLocaleString()}</li>
          </ul>
          <ul className="flex justify-between py-2 list-none border-b border-[#5f5d5f]">
            <li>24 hour high</li>
            <li>{currency.symbol} {coinData.market_data.high_24h[currency.name].toLocaleString()}</li>
          </ul>
          <ul className="flex justify-between py-2 list-none border-b border-[#5f5d5f]">
            <li>24 hour low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      </div>
    );
  } else { // loader
    return (
      <div className="min-h-[80vh] grid place-items-center">
        {/* spinner */}
        <div className="w-16 h-16 border-4 border-gray-300 border-t-[#4500c6] rounded-full animate-spin">
          {/* spin */}
        </div>
      </div>
    );
  }
};

export default Coin;
