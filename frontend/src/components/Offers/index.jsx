import React, { useContext, useEffect, useState } from 'react'
import './offers.scss'
import { BasketContext } from '../../context/BasketContext'
import { UserContext } from '../../context/UserContext'
import Modal from '../Modal'

function Offers() {
  const [data, setData] = useState([])
 

  const {  addBasket,isModalOpen} = useContext(BasketContext)
 const {token} = useContext(UserContext)
  const getFetch =  async ()  => {
    const res =  await fetch('http://localhost:8080/products')
      const data = await res.json()
      setData(data)
  
     
  }
  useEffect(() => {

  
    getFetch()
  
  }, [])





  return (
    <>
      <section id='offers'>
    
    <div className="container">
      <div className="header">
        <p>Our Delightful offerings</p>
        <h2>Tastefully Yours</h2>
      </div>
      <div className="cards">
        {
          data.map(x => (
            <div className="card">

              <div className="image">
                <div className="shadow">
                  <div className="buttons">
                    <button onClick={()=> addBasket(x)}>
                      <i class="fa-solid fa-bag-shopping"></i>
                    </button>

                    <button>
                      <i class="fa-regular fa-heart"></i>
                    </button>

                    <button>
                      <i class="fa-regular fa-eye"></i>
                    </button>
                  </div>
                </div>
                <img src={x.image} alt="photo" />
              </div>
              <p>{x.category}</p>
              <p>{x.name}</p>
              <p> $ {x.price}.00</p>

            </div>
          ))
        }



      </div>
      <div className="wiev-all">
        <p>Wiev All Products </p> <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>

  </section>
 {/* {isModalOpen ?  <Modal/> : null} */}
    </>
  
  )
}

export default Offers