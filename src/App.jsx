import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header';
import Earphone from './Components/Earphone/Earphone';
import Headphone from './Components/Headphone/Headphone';
import Speaker from './Components/Speakers/Speaker';
import Midpage from './Components/Midpage/Midpage';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LogPopup from './Pages/LogPopup/LogPopup';
import Cart from './Pages/Cart/Cart';

const App=() =>{
 
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LogPopup setShowLogin={setShowLogin}/>:<></>}
   <div className="app">
    <Navbar setShowLogin={setShowLogin}/>
    <Routes >
      < Route path='/' element={<Home />}/>
       <Route path='/cart' element={<Cart/>}/> 
      {/* <Route path='/order' element={<PlaceOrder/>} */}
      </Routes >
      </div>
    <Footer />
   
   
    </>
  )
}

export default App
