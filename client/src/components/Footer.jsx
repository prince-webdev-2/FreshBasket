import React from 'react'
import { NavLink } from 'react-router-dom'
import { footerLinks } from '../assets/assets';

function Footer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <NavLink to={'/'}>
                        <h1 className='text-xl text-black dark:text-white font-semibold tracking-[5px]'>FRESH<span className='text-[red]'>BASKET</span></h1>
                    </NavLink>
                    <p className="max-w-[410px] mt-6 dark:text-[#ffffffa1] cursor-default">FreshBasket always delivers fresh items with fast and reliable service. The quality is excellent, and you can trust every order to arrive on time and in perfect condition.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 dark:text-[white] md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <NavLink className="hover:underline dark:hover:text-[white] hover:text-black transition" to={link.url}>{link.text}</NavLink>
                                </li>
                            ))}
                            </ul>
                        </div>
                        ))}
                </div>
            </div>
            <div className='flex max-sm:flex-col max-sm:mt-3 max-sm:text-center justify-between'>
                <p className="sm:py-4 max-sm:mb-2 text-sm md:text-base hover:text-black dark:hover:text-white cursor-default duration-300 text-gray-500/80">
                        Copyright 2025 © <a href="https://prebuiltui.com">FRESHBASKET</a> All Right Reserved.
                </p>
                <p className="sm:py-4 max-sm:pb-4 text-sm md:text-base text-gray-500/80 hover:text-black dark:hover:text-white cursor-default duration-300">Devloped by Prince Kumar</p>
            </div>
        </div>
  )
}

export default Footer