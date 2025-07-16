import React from 'react'
import Navbar from './components/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Coin from './pages/Coin.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='min-h-screen text-white bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834]'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App