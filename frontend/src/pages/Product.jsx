import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products,currency,addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image,setImage] = useState('')
  const [size,setSize] = useState('')

  const fetchProductData = async()=>{
    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(()=>{
    fetchProductData();
  },[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* -------------- Product Data ------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      {/* ------------- Product Images -----------*/}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt="" />
        </div>
      </div>
      {/* ---------- Product Info ----------- */}
      <div className='flex-1 bg-[#f7f1f0] '>
          <h1 className='text-2xl font-md mt-2 ml-3 text-[#262220]' >{productData.name}</h1>
          {/*<div className='flex item-center gap-1 mt-2 ml-3'>
            <img src={assets.star_icon} alt="" className="w-3.5 " />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2 text-[#262220]'>(122)</p>
          </div>*/}
          <p className='mt-5 text-3xl font-md ml-3 text-[#262220]'>{currency}{productData.price}</p>
          <p className='mt-5 text-[#714329] md:w-4/5 ml-3'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8 ml-3 text-[#262220]'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-[#d0b9a7] ${item === size ? 'border-[#714329]' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-[#714329] text-[#f7f1f0] ml-3 px-8 py-3 text-sm active:bg-[#d0b9a7]'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-[#b08463] ml-3 mt-5 flex flex-col gap-1'>
              <p>100% Original Product.</p>
              <p>Cash on Delivery Available on this product.</p>
              <p>Easy Return and Exchange Policy within 7-Days.</p>
          </div>
      </div>
      </div>

      {/* --------- Description & Review Section ---------- */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm text-[#714329]'>Description</b>
          {/*<p className='border px-5 py-3 text-sm text-[#714329]'>Reviews (122)</p>*/}
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-[#b08463] bg-[#f7f1f0]'>
          <p>Asorted Products ,specially handcrafted for you.</p>
          <p>Best in quality at the most reasonable price.</p>
        </div>
      </div>

      {/* ----------- Display Related Products -------------- */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
