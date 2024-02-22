import React, {  useContext, useState } from 'react'
import './login.scss'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
function Login() {

  const {addToken} = useContext(UserContext)
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate =useNavigate()
const handelSubmit =(e)=>{
  e.preventDefault()
  fetch("http://localhost:8080/login", {
  method: "POST",
  body: JSON.stringify({
    username:username ,
    password:password,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
}
).then(response => response.json())
.then(data=>{
  addToken(data)
  navigate('/')
});

}


  return (
    <section id='login'>

      <form onSubmit={handelSubmit} >

        <input type="text" placeholder='username' onChange={(e)=>setUsername(e.target.value)} />
        <input type="password"  placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
       <button>login</button>
      </form>






    </section>
  )
}

export default Login