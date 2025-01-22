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

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justofy-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'> 270, Katra Pedan, Khari Baoli <br/> Near Chandni Chowk <br />Delhi-110006 ,INDIA </p>
          <p className='text-gray-500'>Tel: (+91) 8851687663 <br />Email: devanshagg246@gmail.com</p>
          <p className='text-semibold text-xl text-gray-600'>Wanna Work with Us!</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
