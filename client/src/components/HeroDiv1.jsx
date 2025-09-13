import React from 'react'
import asserts from '../assets/assets'
import { Link } from 'react-router-dom'

function HeroDiv1() {
  return (
    <div className='max-sm:h-[20rem] h-[35rem] sm:w-[90%] sm:ms-[5%] rounded-2xl relative'>
        <img src={asserts.heroDiv1} alt="heroDiv1" className='w-full h-full rounded-2xl' />
        <div className='absolute max-sm:top-[60%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>Freshness with every bite, savings with every cart</h1>
                <div className='flex max-sm:flex-col gap-4 sm:mt-[3rem] mt-[1rem] items-center'>
                        <Link to={'/product'} className='px-6 py-2 rounded-md bg-[green] text-center font-medium text-white tracking-[2px]'>Shop now</Link>
                        <Link to={'/product'} className='px-2 py-2 group font-medium text-center border-b-1 border-l-3 max-sm:my-2 text-white tracking-[2px] hidden sm:block'>Explore <span className='group-hover:text-[red] duration-300'>deals</span></Link>
                </div>
        </div>
    </div>
  )
}

export default HeroDiv1