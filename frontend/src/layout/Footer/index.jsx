import React from 'react'
import '../Footer/footer.scss'
function Footer() {
  return (
    <footer>

 <div className="container">
 <ul>
        <li><h2>LIQUOR <span>STORE</span></h2></li>
        <li><p>Far far away, behind the word mountains, far from the countries.</p></li>
        <li>
          <div className="icons">
            <div className="icon"><i class="fa-brands fa-x-twitter"></i></div>
            <div className="icon"><i class="fa-brands fa-instagram"></i></div>
            <div className="icon"><i class="fa-brands fa-facebook"></i></div>
          </div>
        </li>
      </ul>


      <ul>
        <li><h2>My Accounts</h2></li>
        <li><i class="fa-solid fa-chevron-right"></i> My Account</li>
        <li><i class="fa-solid fa-chevron-right"></i> Register </li>
        <li><i class="fa-solid fa-chevron-right"></i> Log In </li>
        <li><i class="fa-solid fa-chevron-right"></i> My Order</li>

      </ul>


      <ul>
        <li><h2>Information</h2></li>
        <li><i class="fa-solid fa-chevron-right"></i> About us </li>
        <li><i class="fa-solid fa-chevron-right"></i> Catalog </li>
        <li><i class="fa-solid fa-chevron-right"></i> Contact us </li>
        <li><i class="fa-solid fa-chevron-right"></i> Term & Conditions </li>


      </ul>

      <ul>
        <li> <h2>Quick Link</h2> </li>
        <li><i class="fa-solid fa-chevron-right"></i> New User</li>
        <li><i class="fa-solid fa-chevron-right"></i> Help Center </li>
        <li><i class="fa-solid fa-chevron-right"></i> Report Spam </li>
        <li><i class="fa-solid fa-chevron-right"></i> Faq's </li>

      </ul>

      <ul>
        <li><h2>Have a Questions?</h2></li>
        <li><i class="fa-solid fa-map"></i> 203 Fake St. Mountain View, San Francisco, California, USA</li>
        <li><i class="fa-solid fa-phone"></i> 	+2 392 3929 210</li>
        <li><i class="fa-solid fa-paper-plane"></i>  Imanin sayti </li>

      </ul>
 </div>
    </footer>
  )
}

export default Footer