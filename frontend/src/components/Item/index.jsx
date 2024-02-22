import React from 'react'
import './item.scss'
function Item() {
  return (
    <div className='item'>
        <div className="card">
          <div className="quote">
          <i class="fa-solid fa-quote-left"></i>
          </div>
            <div className="upper">
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>

            </div>
            <div className="lower">
                <img src="https://preview.colorlib.com/theme/liquorstore/images/person_1.jpg" alt="" />
                <div className="name-carusel">
                    <p>Roger Scott</p>
                    <p>Marketing Manager</p>
                </div>

            </div>

        </div>
        
        
    </div>
  )
}

export default Item