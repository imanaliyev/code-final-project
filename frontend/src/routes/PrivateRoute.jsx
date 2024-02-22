import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute({roles}) {
    const {decoded} = useContext(UserContext)
    console.log(decoded);
  return (
  roles.includes(decoded.role)  ? <Outlet/> :  <Navigate to={"/"}/>

  )
}

export default PrivateRoute