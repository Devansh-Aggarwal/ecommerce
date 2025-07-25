import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-[#714329]'>Subscribe now and get 20% OFF.</p>
      <p className='text-[#262220] mt-3'>
        Subscribe to our newsletter and get the latest updates, news, and special offers delivered directly to your inbox.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm-w-1/2 flex item-center gap-3 mx-auto my-6 border border-[#714329] pl-3'>
        <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter your Email' required/>
        <button type='submit' className='bg-[#d0b9a7] text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
