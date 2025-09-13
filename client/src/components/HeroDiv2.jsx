import React from 'react'
import asserts, { whyUs } from '../assets/assets'

function HeroDiv2({theme}) {
  return (
    <div className='sm:w-[90%] sm:ms-[5%] py-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 '>
                <div className='max-sm:mb-4'>
                        <img className='w-[30rem]' src={`${theme==='dark' ? asserts.hero2white : asserts.hero2black}`} alt="hero-div-img" />
                </div>
                <div className='bg-[#cccccc38] dark:bg-black rounded-md max-sm:px-3 py-5 sm:px-15'>
                        <h2 className='text-black dark:text-white mb-4 text-2xl sm:text-3xl tracking-[5px] cursor-default'>What Sets Us Apart</h2>
                        <div>
                                {whyUs.map((item,index)=>(
                                        <div className='w-full items-center flex my-2 cursor-default hover:scale-105 duration-300'>
                                                <div className='bg-amber-100 p-4'>
                                                        <img className='w-[2.3rem]' src={item.icon} alt="" />
                                                </div>
                                                <div className='ms-4'>
                                                        <h4 className='font-semibold text-[16px] dark:text-white'>{item.title}</h4>
                                                        <p className='text-[14px] dark:text-[#ffffff8e]'>{item.desc}</p>
                                                </div>
                                        </div>
                                ))}
                        </div>
                </div>
        </div>
    </div>
  )
}

export default HeroDiv2