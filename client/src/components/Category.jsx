import React from 'react'
import asserts, { categories } from '../assets/assets'

function Category() {
  return (
    <div className='sm:w-[90%] sm:ms-[5%] py-5'>
        <h2 className='text-black dark:text-white mb-4 text-3xl tracking-[5px]'>Categories</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4'>
                {categories.map((item,index)=>(
                  <div key={index} className='px-4 py-8 group flex flex-col items-center justify-center rounded-md cursor-pointer' style={{backgroundColor: item.bgColor}} onClick={navigator}>
                    <img className='w-22 rounded-full group-hover:scale-110 duration-300' src={item.image} alt={item.image} />
                    <p className='mt-4 text-black font-semibold'>{item.text}</p>
                  </div>
                ))}
        </div>
    </div>
  )
}

export default Category