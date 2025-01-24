import React,{useState} from 'react'
import Dropdown from '../../common/dropdown/Dropdown'
import { Link } from 'react-router-dom'
import { dropdownList } from './dropdownList'
import Login from '../../components/Login/Login'
import { useModalStore } from '../../store/useModalStore'
const Navbar = () => {
  const {isOpen, openModal, closeModal} = useModalStore((state)=>state.login);

  return (
    <>
      <nav className='relative flex justify-center items-center h-16'>
        <div><Link to='/home' className='text-blue-400'>위드펫 WITH:PET</Link></div>
        <div className='absolute right-5 text-blue-400'>
          <button onClick={openModal} className='p-2 hover:text-white hover:bg-blue-400 transition'><i class="fa-solid fa-user"></i></button>
          <button className='p-2 hover:text-white hover:bg-blue-400 transition'><i class="fa-solid fa-globe"></i></button>
        </div>
      </nav>

      <div className='flex gap-12 justify-center'>
        {dropdownList.map((dropdown)=>(
          <Dropdown>
            <Dropdown.header>
              <div className='px-4 cursor-pointer'>{dropdown.header}</div>
              <Dropdown.item>
                {dropdown.items.map((item)=>(
                  <li className='py-2 my-2 cursor-pointer'>{item}</li>
                ))}
              </Dropdown.item>
            </Dropdown.header>
          </Dropdown>          
        ))}
      </div>

      {
        isOpen && <Login/>
      }
    </>
  )
}

export default Navbar