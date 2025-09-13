import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppContext } from '../context/AppContext.jsx';
import asserts from '../assets/assets.js';

function Navbar({theme, setTheme, activeMenu, setActiveMenu}) {
        // get usestate from context
        const {user, setUser}= useAppContext();

        const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex items-center dark:bg-[black] justify-between px-6 md:px-10 py-4 border-b border-gray-300 bg-white relative transition-all">

            <NavLink to={'/'}>
                <h1 className='text-xl dark:text-white font-semibold tracking-[5px]'>FRESH<span className='text-[red]'>BASKET</span></h1>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to={'/'} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Home</NavLink>
                <NavLink to={'/product'} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >All Product</NavLink>
                <NavLink to={'/contact'} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Contact</NavLink>              

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="text-black dark:text-[white] py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.836 10.615 15 14.695" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        <path clip-rule="evenodd" d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783" stroke="#7A7B7D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="relative cursor-pointer">
                    <i className="fa-solid fa-cart-shopping text-2xl text-[#000000d1] dark:text-white"></i>
                    <button className="absolute -top-2 -right-3 text-xs text-white bg-[red] w-[18px] h-[18px] rounded-full">3</button>
                </div>

                {user ?
                    <div className='relative group'>
                        <img className='w-[2.4rem] cursor-pointer' src={asserts.user} alt="user" />
                        <div className='absolute z-40 hidden group-hover:block w-[150px] dark:bg-black bg-[#ccc] rounded-md left-[-20px]'>
                            <NavLink to={'/profile'} className='block py-1 px-2 hover:bg-[green] text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Profile</NavLink>
                            <NavLink to={'/order'} className='block py-1 px-2 hover:bg-[green] text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Orders</NavLink>
                            <p className='block cursor-pointer py-1 px-2 hover:bg-[green] text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' onClick={()=>setUser(null)} >Log out</p>
                        </div>
                    </div>
                    :
                    <button className="cursor-pointer px-8 py-2 bg-[#eb7220] hover:bg-[red] transition text-white rounded-full" onClick={()=>setUser('Prince')}>
                        Login
                    </button>
                }
                
                <button className={`cursor-pointer bg-[#cccccc96] p-2 rounded-[100%] dark:bg-[#cccccc3d]`} onClick={()=>setTheme(theme==='dark' ? 'light' : 'dark')} >{theme==='light' ? <i className="fa-regular fa-moon text-xl"></i> : <i className="fa-solid fa-lightbulb text-xl dark:text-white"></i>}</button>
            </div>

            <button className={`cursor-pointer sm:hidden bg-[#cccccc96] p-2 rounded-[100%] dark:bg-[#cccccc3d]`} onClick={()=>setTheme(theme==='dark' ? 'light' : 'dark')} >{theme==='light' ? <i className="fa-regular fa-moon text-xl"></i> : <i className="fa-solid fa-lightbulb text-xl dark:text-white"></i>}</button>
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden hover:cursor-pointer">
                {/* Menu Icon SVG */}
                <i className={`${open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered'} text-3xl dark:text-white text-black`}></i>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white dark:bg-black shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-40`}>
                <NavLink to={'/'} onClick={()=>setOpen(false)} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Home</NavLink>
                <NavLink to={'/product'} onClick={()=>setOpen(false)} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >All Product</NavLink>
                { user ?
                    <>
                        <NavLink to={'/'} onClick={()=>setOpen(false)} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Profile</NavLink>
                        <NavLink to={'/'} onClick={()=>setOpen(false)} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Cart</NavLink>
                    </>
                    :
                    <></>
                }
                <NavLink to={'/'} onClick={()=>setOpen(false)} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Orders</NavLink>
                <NavLink to={'/contact'} onClick={()=>setOpen(false)} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >Contact</NavLink>
                <NavLink to={'/'} onClick={()=>{setOpen(false);setUser(user? null : 'prince')}} className='text-[#000000bf] hover:text-[#000] dark:text-[#ffffff95] dark:hover:text-[white]' >{user ? 'Log out' : 'Log in'}</NavLink>                
            </div>
        </nav>
  )
}

export default Navbar