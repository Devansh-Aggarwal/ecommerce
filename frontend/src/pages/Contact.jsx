import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'}/>
      </div>

      <div className='my-10 bg-[#F7F1F0] flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justofy-center items-start gap-6'>
          <p className='font-semibold text-xl mt-5 text-[#714329]'>Our Store</p>
          <p className='text-[#262220]'> 270, Katra Pedan, Khari Baoli <br/> Near Chandni Chowk <br />Delhi-110006 ,INDIA </p>
          <p className='text-[#262220]'>Tel: (+91) 8851687663 <br />Email: devanshagg246@gmail.com</p>
          <p className='text-semibold text-xl text-[#714329]'>Wanna Work with Us!</p>
          <p className='text-[#262220]'>Learn more about our teams and job openings.</p>
          <button className='border border-[#714329] px-8 py-4 text-sm text-[#262220] hover:bg-[#714329] hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
