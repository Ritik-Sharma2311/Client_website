import React from 'react'
import j1 from '../assets/images/j1.png'
import j2 from '../assets/images/j2.png'
import j3 from '../assets/images/j3.png'

function Workflow() {
  return (
    <div>
        
        <div className='max-w-[1240px] p-2 my-10 mx-auto grid grid-cols-3 '>
      
        <div className='flex justify-center items-center text-center'> 
            <h1 className=' text-green-500 text-4xl md:text-8xl font-bold pb-2'>1</h1>
        
      </div>

        <div className='text-center py-3'>
            <img src={j1} alt="" />
          </div>

        <div className='flex flex-col justify-center text-center  gap-4'> 
            <h1 className=' text-green-500 text-2xl md:text-4xl font-bold pb-2'>Open Account</h1>
           <p className='md:text-2xl'>
           Get demo and understand upsale. <br />
           Pay one time setup fee & we will get to work
           </p>
        
      </div>
         
        </div>

        <div className='max-w-[1240px] p-2 my-10 mx-auto grid grid-cols-3 '>
      
      <div className='flex justify-center items-center text-center'> 
          <h1 className=' text-green-500 text-4xl md:text-8xl font-bold pb-2'>2</h1>
      
    </div>

      <div className='text-center py-3'>
          <img src={j2} alt="" />
        </div>

      <div className='flex flex-col justify-center text-center  gap-4'> 
          <h1 className=' text-green-500 text-2xl md:text-4xl font-bold pb-2'>Get QR Codes</h1>
          <p className='md:text-2xl'>
           Once our team does the setup we will send WhatsApp Qr to check working. As soon as you approve we will send a kit to your address.
           </p>
      
    </div>
       
      </div>

      <div className='max-w-[1240px] p-2 my-10 mx-auto grid grid-cols-3 '>
      
      <div className='flex justify-center items-center text-center'> 
          <h1 className=' text-green-500 text-4xl md:text-8xl font-bold pb-2'>3</h1>
      
    </div>

      <div className='text-center py-3'>
          <img src={j3} alt="" />
        </div>

      <div className='flex flex-col justify-center text-center  gap-4'> 
          <h1 className=' text-green-500 text-2xl md:text-4xl font-bold pb-2'>Intro Your Staff</h1>
          <p className='md:text-2xl'>
           Our dedicated team will provide a quick training session to your staff. It's time to increase customer experience & sales welcome to UpSale.
           </p>
      
    </div>
       
      </div>
      
    </div>
  )
}

export default Workflow