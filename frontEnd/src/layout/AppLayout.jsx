import React from 'react'
import Navbar from './nav/Navbar'
import {Outlet} from 'react-router';
import Footer from './footer/Footer';
const AppLayout = () => {
  
 
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout