import React, { useContext } from 'react'
import "../Navbar/navbar.scss"
import { Link } from 'react-router-dom'
import Headroom from 'react-headroom'
import { BasketContext } from '../../context/BasketContext'
import { UserContext } from '../../context/UserContext'
function Navbar() {
  // const { basket } = useContext(BasketContext)
  const { decoded,logOut } = useContext(UserContext)
  return (
    <Headroom>
      <header>
        <nav>
          <Link to={'/'}>
            <div className="logo">
              <h2>LIQUOR <span>STORE</span></h2>
            </div></Link>
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={"/about"}><li>About</li></Link>
          
            <li>Products</li>
            {
              decoded?.role === 'user' ? <>
                <Link to={'/profile'}><li>Profile</li></Link>
                <Link to={"/basket"}><li><i class="fa-solid fa-cart-shopping"></i> <sub>2</sub> </li></Link>
                <li onClick={logOut}>log out</li>
                
              </> : decoded?.role === 'admin' ? <><Link to={'/adminPanel'}> <li> Admin Panel</li> </Link>   <li onClick={logOut}>log out</li></> :  <>
                <Link to={"/login"}><li>Log in</li></Link>
                <Link to={"/register"}><li>Sign up</li></Link>
                
              </>
            }


          </ul>
        </nav>

      </header>
    </Headroom>

  )
}

export default Navbar