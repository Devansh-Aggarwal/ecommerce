import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='bg-[#F7F1F0] flex flex-col sm:flex-row justify-around gap-12 text-center sm:gap-2 my-10 py-20 text-xs sm:text-sm md-text-base text-[#714329]'>
       
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold text-[#714329]'>Easy Exchange Policy</p>
            <p className='text-[#262220]'>We offer hassel free Exchange Policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold text-[#714329]'>7 Days Return Policy</p>
            <p className='text-[#262220]'>We provide 7-Days Free Return Policy</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold text-[#714329]'>Best Customer Support</p>
            <p className='text-[#262220]'>24/7 Customer Support Available</p>
        </div>
      
    </div>
  )
}

export default OurPolicy
