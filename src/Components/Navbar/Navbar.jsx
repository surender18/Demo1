import React, {useContext, useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setShowLogin}) => {
  const[menu,setMenu]=useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    
    <div className='navbar'>
     <Link to='/'><img className='logo' src="logo.png" alt="" /> </Link>
    
    <div className="navbar-menu">

   <ul>
   
    <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
    <a  href='' onClick={()=>setMenu("Brands")} className={menu==="Brands"?"active":""}>Brands</a>
    <a href='' onClick={()=>setMenu("Categories")} className={menu==="Categories"?"active":""}>Categories</a>
    <a  href='#app-download' onClick={()=>setMenu("App Download")} className={menu==="App Download"?"active":""}>App Download</a>
    <a href='#footer' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
    </ul>
    </div>
    <div className="navbar-right">
      <img className='navbar-search-icon' src="search1.png" alt="" /> 
      <Link to='/cart' className='navbar-search-icon'>
          <img className='cart-img' src="cart.png" alt="" />
          {/* <div className={getTotalCartAmount()>0?"dot":""}></div> */}
        </Link>

    <button onClick={()=>setShowLogin(true)} >Sign in</button>
    </div>
</div>
  )
}

export default Navbar
