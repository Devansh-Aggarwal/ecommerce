import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {

  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relevant');

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter = ()=> {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category))
    } 
    
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct =()=>{
    
    let fpCopy = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
        
      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/*FILTER OPTIONS*/}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl text-[#714329] flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* CATEGORY FILTER */}
        <div className={`border border-[#b08463] bg-[#f7f1f0] pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm text-[#714329] font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <p className='flex gap-2 text-[#262220]'>
              <input className='w-3' type="checkbox" value={'Nuts & Dates'} onChange={toggleCategory}/>Nuts & Dates
            </p>
            <p className='flex gap-2 text-[#262220]'>
              <input className='w-3' type="checkbox" value={'Dried Fruits & Berries'} onChange={toggleCategory}/>Dried Fruits & Berries
            </p>
            <p className='flex gap-2 text-[#262220]'>
              <input className='w-3' type="checkbox" value={'Seeds'} onChange={toggleCategory}/>Seeds
            </p>
            <p className='flex gap-2 text-[#262220]'>
              <input className='w-3' type="checkbox" value={'Gift Packs'} onChange={toggleCategory}/>Gift Packs
            </p>
          </div>
        </div>
        {/* SUBCATEGORY FILTER */}
        <div className={`border border-[#b08463] bg-[#f7f1f0] pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm text-[#714329] font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 text-[#262220]'>
              <input className='w-3' type="checkbox" value={'Mixed Nuts'} onChange={toggleSubCategory}/>Mixed Nuts
            </p>
            <p className='flex gap-2 text-[#262220]'>
              <input className='w-3' type="checkbox" value={'Jumbo Packs'} onChange={toggleSubCategory}/>Jumbo Packs
            </p>
            <p className='flex gap-2 text-[#262220]'>
              <input className='w-3' type="checkbox" value={'Snacks & Breakfast'} onChange={toggleSubCategory}/>Snacks & Breakfast
            </p>
          </div>
        </div>

      </div>

      {/*RIGHT SIDE*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
            {/* PRODUCT SORTING */}          
            <select onChange={(e)=>(setSortType(e.target.value))} className='border-2 border-[#b08463] text-[#714329] text-sm px-2'>
              <option value="relevant">Sort By: Relevant</option>
              <option value="low-high">Sort By: Low to High</option>
              <option value="high-low">Sort By: High to Low</option>
            </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Collection
