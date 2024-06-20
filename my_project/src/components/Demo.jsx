import React from 'react'
import phone1 from '../assets/images/phone1.png'
import phone2 from '../assets/images/phone2.png'
import phone3 from '../assets/images/phone3.png'


function Demo() {
    return (
        <div className='max-w-[1240px] p-2 my-10 mx-auto'>
            <h1 className='text-green-500 font-bold text-4xl text-center md:text-5xl'>Grow your restaurant </h1>
            <h1 className='text-black font-bold text-4xl text-center md:text-5xl py-3'>faster with Whatsapp</h1>
            <div className='max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-2'>
            <div className='flex flex-col justify-center text-center md:text-start gap-4'>
               <h1 className='text-2xl md:text-4xl font-bold pb-4'>Interactive Menu</h1>
               <p className='text-xl md:text-2xl'>
              <ul className='md:list-disc space-y-1 md:space-y-3'>
                <li>Capture Customer Data</li>
                <li>Showcase Bestsellers, Chef's special & more</li>
                <li>Display Proper Description with Image</li>
                <li>Add Party & Catering Packages</li>
                <li>Upsell Combos & Happy Hours
                </li>
              </ul>
               </p>
            
            
          </div>
             <div className='text-center py-3'>
               <img src={phone1} alt="" />
             </div>
             
        </div>

        <div className='max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-2 gap-10 lg:gap-20'>
        <div className='text-center py-3'>
            <img src={phone2} alt="" />
          </div>

        <div className='flex flex-col justify-center text-center md:text-start gap-4'> 
            <h1 className='text-2xl md:text-4xl font-bold pb-4'>Feedback Manager</h1>
           <p className='text-xl md:text-2xl'>
          <ul className='md:list-disc space-y-1 md:space-y-3'>
            <li>40% Increase in Customer Feedback</li>
            <li>Redirect Positive Reviews at Google</li>
            <li>Resolve Negative Feedback Instantly</li>
            <li>Reconnect Customers on Call Personally</li>
          </ul>
           </p>
        
      </div>
         
        </div>

        <div className='max-w-[1240px] p-2 my-10 mx-auto md:grid grid-cols-2 gap-10 lg:gap-20'>
          
          <div className='flex flex-col justify-center text-center md:text-start gap-4'> 
            <h1 className='text-2xl md:text-4xl font-bold pb-4'>Run Local Ads
            (BoostUp)</h1>
           <p className='text-xl md:text-2xl'>
          <ul className='md:list-disc space-y-1 md:space-y-3'>
            <li>Scratch Card & Surprises</li>
            <li>Loyalty, Rewards & Pre-paid</li>
            <li>Display Personalised Content with Image</li>
            <li>Personalized Birthday & Anniversary Offers</li>
            <li>Targeted Campaign & Ads (WhatsApp/FB/Insta)</li>
          </ul>
           </p>
        
      </div>
      <div className='text-center py-3'>
            <img src={phone3} alt="" />
          </div>
        </div>
        </div>
        
      )
}

export default Demo