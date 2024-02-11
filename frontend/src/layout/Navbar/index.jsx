import React from 'react'
import "../Navbar/navbar.scss"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
   <header>
    <nav>
      <div className="logo">
        <h2>LIQUOR <span>STORE</span></h2>
      </div>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={"/about"}><li>About</li></Link>
        <li>Products</li>
        <Link to={"/login"}><li>Log in</li></Link>
        <Link to={"/register"}><li>Sign up</li></Link>
        <Link to={"/basket"}><li><i class="fa-solid fa-cart-shopping"></i></li></Link>
      </ul>
    </nav>

   </header>
  )
}

export default Navbar