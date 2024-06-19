import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

function Banner() {

  const [text] = useTypewriter({
    words : ["customers", "sales", "savings", "exposure"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 120
  });

  return (
    <div className='bg-[#2699fb] w-full py-[50px]'>
        <div className='max-w-[1240px] mx-auto py-[100px] text-white text-[2rem] lg:text-[90px] md:text-[3.2rem] font-bold pl-6 md:pl-16'>
            <div className='md:p-[24px]'>
              Multiply the {" "}
              <span  className='text-[#000080]'>
                {text}
              </span>
              <Cursor/>
                {/* Mutiply the <ReactTyped 
                  className='text-[#000080] pl-4 relative'
                  strings={["customers", "sales", "savings", "exposure"]} 
                  typeSpeed={100} 
                  loop={true} 
                  backSpeed={120} /> */}
            </div>
            <div className='md:p-[24px]'>in your restaurant</div>


        </div>
    </div>
  )
}

export default Banner