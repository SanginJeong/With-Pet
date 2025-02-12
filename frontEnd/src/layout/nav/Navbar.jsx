import React from 'react'
import { Link } from 'react-router-dom'
import LoginModal from '../../components/Login/LoginModal'
import { useModalStore } from '../../store/useModalStore'
const Navbar = () => {
  const isOpen = useModalStore((state)=>state.modals.login);
  const openModal = useModalStore((state)=>state.openModal);
  return (
    <>
      <nav className='relative flex justify-center items-center h-16'>
        <div><Link to='/home' className='text-blue-400 font-bold'>위드펫 WITH:PET</Link></div>
        <div className='absolute right-5 text-blue-400'>
          <button onClick={()=>openModal("login")} className='p-2 hover:text-white hover:bg-blue-400 transition'><i class="fa-solid fa-user"></i></button>
          <button className='p-2 hover:text-white hover:bg-blue-400 transition'><i class="fa-solid fa-globe"></i></button>
        </div>
      </nav>

      {
        isOpen && <LoginModal/>
      }
    </>
  )
}

export default Navbar