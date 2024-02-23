import React, { useContext, useEffect, useState } from 'react'
import './basket.scss'
import { BasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
function Basket() {
  const { decoded, token } = useContext(UserContext)
  // const { basket, addBasket, removeBasket, increase, decrease, totalPrice } = useContext(BasketContext)
  const [basket, setbBasket] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/user/showBasket", {
      method: "PUT",
      headers: {
       
        "Authorization": `Bearer ${token}`
      },
      body: {
        id: decoded.id
      }

    }).then(res => res.json())
      .then(data => {
        setbBasket(data)
        console.log(data)
      })
    console.log(basket);

  }, [])

  return (
    <section id='basket'>
      <div className="hero">

        <div className="header">
          <p> <Link to={'/'}><span>HOME</span></Link> <i class="fa-solid fa-chevron-right"></i> <span>CART</span> </p>
          <h1>
            My Cart
          </h1>

        </div>
        <div className="shadow">

        </div>
      </div>
      <div className="container">

        {
          basket.length === 0 ? <h1 >Basket is Empty</h1> : <>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    basket.map(x => (

                      <tr>
                        <td></td>
                        <td><img src={x.image} alt="" /></td>
                        <td>{x.name}</td>
                        <td>${x.price}.00</td>
                        {/* <td> <button onClick={() => decrease(x)} >-</button>  {x.count} <button onClick={() => increase(x)}>+</button></td>
                    <td>${x.count * x.price}.00</td>
                    <td><i onClick={() => removeBasket(x)} class="fa-solid fa-xmark"></i></td> */}
                      </tr>
                    ))


                  }
                </tbody>

              </table>
            </div>
            <div className="total-bill">
              <div className="total-bill-container">
                <h2>Cart Totals</h2>
                <ul>
                  {/* <li><p>Subtotal</p> <p>$ {totalPrice}.00</p> </li> */}
                  <li><p>Delivery</p>  <p>$ 0.00</p></li>
                  <li><p>Discount</p>  <p>$ 0.00</p></li>
                  {/* <li ><p>TOTAL</p>  <p className='total' >$ {totalPrice}.00</p></li> */}
                </ul>
                <button>
                  Proceed to Checkout
                </button>
              </div>


            </div>
          </>

        }


      </div>


    </section>
  )
}

export default Basket