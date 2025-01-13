import React from 'react'
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';
import Title from './Title';

const LatestCollection = () => {
    
    const {products} = useContext(ShopContext);


    return (
    <div className='my-10'>
      <div className='text-centre py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        hi this is a webpage created by me
        </p>
      </div>
    </div>
  )
}

export default LatestCollection
