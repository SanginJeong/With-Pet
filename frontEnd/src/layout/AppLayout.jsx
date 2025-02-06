import React from 'react'
import Navbar from './nav/Navbar'
import {Outlet} from 'react-router';
import Footer from './footer/Footer';
const AppLayout = () => {
  return (
    <>
      <Navbar/>
      <div className='flex justify-center'>
        <div className='w-[80%]'>
          <Outlet/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AppLayout