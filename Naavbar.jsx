import React, { useState } from 'react'
import './Naavbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Naavbar = () => {

  const [menu,setMenu]= useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Jiva</p>
      </div>
<ul className="nav-menu">
      <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'></Link>Shop{menu==="shop"?<hr/>:<></> }</li>

      <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'></Link>Men{menu==="mens"?<hr/>:<></> }</li>

      <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:'none'}} to='/women'></Link>Women{menu==="women"?<hr/>:<></> }</li>

      <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'></Link>Kids{menu==="kids"?<hr/>:<></> }</li>
</ul>
<div className='nav-login-cart'>
<Link to='/login'></Link><button>Login</button>
<Link to='/cart'><img src={cart_icon} alt="" /></Link>
  <div className='nav-cart-count'>0</div>
</div>
 </div>
  )
}

export default Naavbar
