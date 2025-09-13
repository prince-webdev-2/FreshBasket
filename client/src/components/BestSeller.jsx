import React from 'react'
import ProductCart from './ProductCart'
import { useAppContext } from '../context/AppContext'

function BestSeller() {
        const { products }= useAppContext();
  return (
    <div className='sm:w-[90%] sm:ms-[5%] pt-5'>
        <h2 className='text-black dark:text-white mb-4  text-2xl sm:text-3xl tracking-[5px] cursor-default'>Best Sellers</h2>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4'>
                {products.filter((product)=> product.inStock).slice(0,8).map((product,index)=>(
                   <ProductCart key={index} product={product} />     
                ))}
        </div>
    </div>
  )
}

export default BestSeller