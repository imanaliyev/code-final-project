import React, { createContext, useContext, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import { UserContext } from './UserContext';



export const BasketContext = createContext();


function BasketProvider({children}) {
   const {token,decoded} = useContext(UserContext)
    
   
    const [basket, setBasket] = useLocalStorage("basket" ,[])
    const [totalPrice, setTotalPrice] = useLocalStorage("totalPrice" ,0);
    const [isModalOpen, setisModalOpen] = useState(false)
   

    const addBasket =(item)=>{
       if (token) {
        fetch('http://localhost:8080/user/addBasket',{
          method:"PUT",
          headers: {
           
            "Authorization": `Bearer ${token}`},
          body:{
            id:decoded.id,
            productId:item._id
          }

        })
        
        setisModalOpen(false)
        console.log(item._id);
        console.log(decoded.id);
        }
        
  
    
   
    else{
      setisModalOpen(true)
 
    }

    }
    const removeBasket=(item)=>{
      const itemToRemove = basket.find((x) => x._id === item._id);
        if (!itemToRemove) {
            return 
        }
        const updatedBasket = basket.filter((x) => x._id !== item._id);
        const reductionAmount = itemToRemove.price * itemToRemove.count;
        setBasket(updatedBasket);
        setTotalPrice(Number((totalPrice - reductionAmount).toFixed(2)));
     
    }

    const increase=(item)=>{
      let index = basket.findIndex(x=> x._id === item._id)
      setTotalPrice(Number((totalPrice + item.price).toFixed(2)));

      basket[index].count++
      setBasket([...basket])
    }
    const decrease=(item)=>{
      let index = basket.findIndex(x=> x._id === item._id)
     
      if (basket[index].count>1) {
        basket[index].count--
        setTotalPrice(Number((totalPrice - item.price).toFixed(2)));
        
      }
     

      
    
      setBasket([...basket])
    }
  








    const data ={
       addBasket,isModalOpen , setisModalOpen

    }
  return (
    <>
     <BasketContext.Provider value={data}>
      {children}
    </BasketContext.Provider>


    </>
  )
}

export default BasketProvider