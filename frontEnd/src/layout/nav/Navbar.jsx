import React from 'react'
import Dropdown from '../../common/dropdown/Dropdown'
import { Link } from 'react-router'
const dropdownList = [
  {
    header: "Menu 1", items: ["menu1-1", "menu1-2", "menu1-3", "menu1-4"] 
  },
  {
    header: "Menu 2", items: ["menu2-1", "menu2-2", "menu2-3", "menu2-4"] 
  },
  {
    header: "Menu 3", items: ["menu3-1", "menu3-2", "menu3-3", "menu3-4"] 
  }
]
const Navbar = () => {
  return (
    <nav className='flex items-center h-16'>
      <div className='flex-[3] flex justify-center'>
        <Link to='/' className='text-blue-400'>위드펫 WITH:PET</Link>
      </div>
      <div className='flex-[7] flex gap-12'>
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
    </nav>
  )
}

export default Navbar