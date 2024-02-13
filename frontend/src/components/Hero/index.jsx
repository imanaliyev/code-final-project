import React from 'react'
import "./hero.scss"
function Hero() {
  return (
    <section id='hero'>
        <div className="shadow">
       

        </div>
        <div className="container">
            <div className="txt">
                <h1>
                <span>Good</span> Drink <span>for Good</span> Moments.
                </h1>
                <div className="buttons">
                    <button>Shop Now</button>
                    <button>Read More</button>
                </div>
            </div>

        </div>
        <div className="features">
            <div className="features-container">
            <div className="card">
            <i class="fa-solid fa-user-tie"></i>
            <div className="txt">
                <div className="txt">
                <h3>ONLINE SUPPORT 24/7</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>

            </div>
            <div className="card">
            <i class="fa-solid fa-sack-dollar"></i>
            <div className="txt">
               <div className="txt"> <h3>MONEY BACK GUARANTEE</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p></div>
            </div>

            </div>
            <div className="card">
            <i class="fa-solid fa-truck"></i>
            <div className="txt">
                <div className="txt">
                <h3>
FREE SHIPPING & RETURN</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>

            </div>
            </div>
           
        </div>



    </section>
  )
}

export default Hero