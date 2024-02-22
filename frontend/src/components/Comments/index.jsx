import React from 'react'
import './comments.scss'
import { Carousel } from '@trendyol-js/react-carousel'
import Item from '../Item'
function Comments() {
  return (
    <section id='comments'>
       
        <div className="shadow">
        <div className="header">
            <p>Testimonial</p>
            <h2>Happy Clients</h2>
        </div>
        </div>
       <div className="container">
       <Carousel show={3} slide={3} swiping={true} autoSwipe={true}>
		<Item />
		<Item />
		<Item />
		<Item />
	   </Carousel>,
       </div>

    </section>
  
  )
}

export default Comments