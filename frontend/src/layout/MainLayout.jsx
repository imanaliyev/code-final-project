import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function MainLayout() {
    return (
        <>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </>

    )
}

export default MainLayout