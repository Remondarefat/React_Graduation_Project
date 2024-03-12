import React from 'react'
import Navbar from '../MainNavbar/Navbar'
import Footer from '../MainFooter/Footer'
import { Outlet } from 'react-router-dom'

export default function HomePage() {
    return <>
        <Navbar />
        <Outlet/>
        <Footer />
    </>
    
}