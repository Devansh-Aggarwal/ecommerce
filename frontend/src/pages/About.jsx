import React from 'react'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</p>
          <p>this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text this is a dummy text</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'Why '} text2={'Choose Us'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We offer high Quality products for various requirements.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassel-free ordering process enjoy shopping with us.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated proffesionals are here to assist you.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
