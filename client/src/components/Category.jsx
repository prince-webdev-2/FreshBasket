import React from 'react'
import asserts, { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

function Category() {
  const {navigate}= useAppContext();
  return (
    <div className='sm:w-[90%] sm:ms-[5%] max-sm:px-3 pt-5'>
        <h2 className='text-black dark:text-white mb-4 text-2xl sm:text-3xl tracking-[5px] cursor-default'>Categories</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4'>
                {categories.map((item,index)=>(
                  <div key={index} className='px-4 py-8 group hover:scale-105 duration-300 flex flex-col items-center justify-center rounded-md cursor-pointer' style={{backgroundColor: item.bgColor}} onClick={()=>{navigate(`/products/${item.path.toLowerCase()}`);scrollTo(0,0)}}>
                    <img className='w-22 rounded-full group-hover:scale-110 duration-300' src={item.image} alt={item.image} />
                    <p className='mt-4 text-black font-semibold'>{item.text}</p>
                  </div>
                ))}
        </div>
    </div>
  )
}

export default Category