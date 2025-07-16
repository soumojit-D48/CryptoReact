import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {

    const {allCoin, currency} = useContext(CoinContext) /// CoinContext
    const [displayCoin, setDisplayCoin] = useState([])
    const [input, setInput] = useState('')

    const inputHandler = (event) => {
      setInput(event.target.value)
      if(event.target.value === ""){
        setDisplayCoin(allCoin)
      }
    }

    const serachHandler = async (event) => {
      event.preventDefault()
      const coins = await allCoin.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase()) // filter the data which we typing the input field
      }) // item.name.toLowerCase() = bitcoin  // .includes(input.toLowerCase()) = bit (lets assume, then bit includes in bitcoin)
      setDisplayCoin(coins) 
    }  

    useEffect(() => {
        setDisplayCoin(allCoin) // we make a copy allCoins -> displayCoin by seter func 
    }, [allCoin]) // when cur chnage fetch all coin, when allcoin change display new data of coins in that currency

  return (
    <div className="py-0 px-3 pb-25"> {/* home */}
      <div className="max-w-xl my-20 mx-auto flex flex-col items-center text-center gap-8"> {/* hero */}
        <h1 className="font-semibold leading-tight text-4xl sm:text-[4vw]"> {/* text-[36px]   */}
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-3/4 text-[#e3e3e3] leading-tight"> {/* leading for line weight and w-3/4 = 75% */}
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos
        </p>
        <form onSubmit={serachHandler} className="p-2 w-[90%] bg-white rounded-sm text-2xl flex justify-between items-center gap-2.5">

          <input list="coinlist" onChange={inputHandler} required value={input} className="flex-1 text-xl outline-none border-none pl-2.5 text-gray-600 placeholder-gray-700 placeholder:text-xl" type="text" placeholder="Search crypto..." />

          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name}/>
            ))}
          </datalist>

          <button className="border-none bg-[#7927ff] text-white text-xl px-6.5 py-1 rounded-sm cp" type="Submit">Search</button>
        </form>
      </div>
      <div className="max-w-3xl mx-auto rounded-2xl bgColor">  {/* crypto-table */}
            <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-4 items-center border-b border-[#3c3c3c]">  {/* table-layout */}
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p className="text-center">24H Change</p>
                <p className="text-right">Market Cap</p>
            </div>

            {
                displayCoin.slice(0,10).map((item, index) => (
                    <Link to={`/coin/${item.id}`} key={item.id || index} className= {index == 9 ? "grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-4 items-center" : "grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-5 py-4 items-center border-b border-[#3c3c3c]"} >

                        <p>{item?.market_cap_rank}</p>
                        <div className="flex items-center gap-2.5">
                          <img className="w-8" src={item?.image} alt="" />
                          <p>{item?.name + " - " + item?.symbol}</p>
                        </div>
                        <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                        <p className={item.price_change_percentage_24h < 0 ? "text-red-600 text-center" : "text-green-500 text-center"}>
                          {Math.floor(item.price_change_percentage_24h * 100) /100}</p>
                        <p className="text-right">{currency.symbol} {item.market_cap.toLocaleString()}</p>

                    </Link>
                    
                ))
            }
      </div>
    </div>
  );
};

export default Home;
