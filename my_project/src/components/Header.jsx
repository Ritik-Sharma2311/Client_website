import React, { useState } from 'react'
import { AiOutlineMenu,  AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[12px] mx-auto flex justify-between items-center'>
          <div className='text-3xl font-bold'>
            Up Sales
          </div>
          {
            toggle ? (<AiOutlineClose onClick= {() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>) 
                    :
                     (<AiOutlineMenu onClick= {() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>)
            
          }
          
 
          <ul className='hidden md:flex text-white gap-10'>
            <li>Home</li>
            <li>Company</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          {/* Responsive menu */}
          <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? ('left-[0]') : ('left-[-100%]') } 
          `}>
            {/* Above 2 lines = ES6 template literal (string expand using `` backtiks)*/}
            <li className='p-5'>Home</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Resources</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Header