import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >

      <div className='bg-[#F7F1F0] flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        <div>
            <img src={assets.logo} className='mb-5 ml-3 mt-2 w-32' alt="" />
            <p className='w-full ml-3 md:w-2/3 text-[#262220]'>
                Welcome to our online store, where you can find a wide range of products at competitive prices. We are committed to providing you with the best shopping experience possible, with fast and reliable delivery, easy returns, and excellent customer service.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 mt-2 text-[#714329]'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-[#262220]'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 mt-2 text-[#714329]'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-[#262220]'>
                <li>+91-8851687663</li>
                <li>devanshagg246@gmail.com</li>
            </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center text-[#714329]'>Copyright 2024@ rlda.com - ALL RIGHTS RESERVED.</p>
      </div>

    </div>
  )
}

export default Footer
