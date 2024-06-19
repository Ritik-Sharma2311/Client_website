import React from 'react'
import mobile_logo from '../assets/images/mobile_logo.jpg'

function Benefits() {
  return (
    <div className='max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-3 gap-10 lg:gap-20'>
      <div className='col-span-2 text-center'>
        <img src={mobile_logo} alt="" />
      </div>
      <div className='flex flex-col justify-center text-center md:text-start gap-4'>
       
        <p className='text-xl md:text-2xl font-semibold'>
          <h1 className='text-green-500 font-bold  text-5xl md:text-8xl'>2.5x</h1>
            Increase in sales during <br />non-peak hours
        </p>
        
        <p className='text-xl md:text-2xl font-semibold'>
          <h1 className='text-green-500 font-bold text-5xl md:text-8xl'>70%</h1>
            Increase in returning <br />customers
        </p>
          
        <p className='text-xl md:text-2xl font-semibold'>
          <h1 className='text-green-500 font-bold text-5xl md:text-8xl'>3x</h1>
            Increase in positive <br />Google reviews
        </p>
      </div>
    </div>
  )
}

export default Benefits