import React from 'react'
import { AiOutlineMenu,  AiOutlineClose } from "react-icons/ai";

function Header() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[12px] mx-auto flex justify-between items-center'>
          <div className='text-3xl font-bold'>
            Up Sales
          </div>
          <AiOutlineMenu className='text-white text-2xl md:hidden block'/>
          {/* <AiOutlineClose  className='text-white text-2xl md:hidden block'/> */}
          <ul className=' hidden md:flex text-white gap-10'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          {/* Responsive menu */}
          <ul className='md:hidden text-white gap-10'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Header