import { Link } from 'react-router-dom'

import React, { useContext } from 'react'
import logo from '../assets/logo.png'
import arrow_icon from '../assets/arrow_icon.png'
import { CoinContext } from '../context/CoinContext.jsx'


const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event) => {
    switch (event.target.value){
      case "usd": {
        setCurrency({name: "usd", symbol: "$"})
        break
      }
      case "eur": {
        setCurrency({name: "eur", symbol: "E"})
        break
      }
      case "inr": {
        setCurrency({name: "inr", symbol: "R"})
        break
      }
      default: {
        setCurrency({name: "usd", symbol: "$"})
      }
    }
  }

  return (
    <div className='flex justify-between items-center py-5 px-[5%] text-[#ddd] border-b-2 border-[#3c3c3c]'> {/* navbar */}

    <Link to={"/"}>
        <img className='w-40 sm:w-55' src={logo} alt="" /> {/* logo */} {/* sm:width: max(12vw, 120px) */}
    </Link>
        <ul className='list-none hidden sm:flex sm:gap-8'>
            <Link to={"/"}><li className='cp'>Home</li></Link>
            <li className='cp'>Freature</li>
            <li className='cp'>Pricing</li>
            <li className='cp'>Blog</li>
        </ul>
        <div className="flex items-center gap-[12px] sm:gap-[1vw]"> {/* nav-right */}
            <select onChange={currencyHandler} className='py-1 px-2 rounded-sm bg-transparent text-white border border-white'>
                <option value= "usd" className='bg-[#09005c] text-white' >USD</option>
                <option value= "eur" className='bg-[#09005c] text-white' >EUR</option>
                <option value= "inr" className='bg-[#09005c] text-white' >INR</option>
            </select>
            <button className='flex items-center gap-3 py-2.5 px-5 rounded-2xl text-sm font-semibold text-[#393939] bg-white border-none cp'>Sign Up <img className='w-3' src={arrow_icon} /></button>
        </div>
    </div>
  )
}

export default Navbar
