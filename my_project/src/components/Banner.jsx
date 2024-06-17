import React from 'react'
import { ReactTyped } from "react-typed";

function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] mx-auto py-[100px] text-center text-white text-3xl md:text-[60px] font-bold'>
            <div className='md:p-[24px]'>
                Multiply the
            </div>
            <div className='text-[#000080] md:p-[24px]'>
                <ReactTyped 
                  strings={["customers", "sales", "savings", "exposure"]} 
                  typeSpeed={100} 
                  loop={true} 
                  backSpeed={120} />
            </div>
            <div className='md:p-[24px]'>in your restaurant</div>


        </div>
    </div>
  )
}

export default Banner