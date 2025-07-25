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

      <div className='bg-[#F7F1F0] my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full ml-3 mt-3 mb-3 border border-[#d0b9a7] md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col ml-3 mt-3 mb-3 mr-3 justify-center gap-6 md:w-2/4'>
          <b className='text-[#714329]'>How it all Started:</b>
          <p className='text-[#262220]'>Established in 1990 by Shri Ratan Lal Aggarwal, our retail dryfruit store has built a legacy of trust and quality for over three decades. Located in the bustling heart of Khari Baoli, Tilak Bazar, near Chandni Chowk, we have become a well-known destination for premium dryfruits and essential commodities.</p>
          <b className='text-[#714329]'>What We Offer:</b>
          <p className='text-[#262220]'>A wide assortment of top-quality dryfruits including almonds, cashews, walnuts, pistachios, and raisins.
              Range of exotic nuts, seeds, and spices from across India and abroad.
              Commodities that meet household and festive needs, specially selected for freshness and taste.
              Personalized service rooted in traditional family values and customer satisfaction.</p>
          <p className='text-[#262220]'>Nestled in Asia’s largest spice and dryfruit market, our store reflects the vibrant culture and heritage of Old Delhi. We believe in honest business practices and delivering value, ensuring that every product is handled with care and authenticity.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'Why '} text2={'Choose Us'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border bg-[#F7F1F0] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-[#714329]'>Quality Assurance:</b>
          <p className='text-[#262220]'>We offer high Quality products for various requirements.</p>
        </div>
        <div className='border bg-[#e9e6e1] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-[#714329]'>Convenience:</b>
          <p className='text-[#262220]'>With our user-friendly interface and hassel-free ordering process enjoy shopping with us.</p>
        </div>
        <div className='border bg-[#F7F1F0] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-[#714329]'>Exceptional Customer Service:</b>
          <p className='text-[#262220]'>Our team of dedicated proffesionals are here to assist you.</p>
        </div>
      </div>

      <NewsLetterBox />

    </div>
  )
}

export default About
