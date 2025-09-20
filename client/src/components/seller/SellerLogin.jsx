import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

function SellerLogin() {
        const {isSeller, setIsSeller, navigate}= useAppContext();
        const [email, setEmail]= useState('');
        const [password, setPassword]= useState('');

        const onSubmitHandler= async(e)=>{
          e.preventDefault();
          setIsSeller(true);
        }

        useEffect(()=>{
          navigate('/seller')
        },[isSeller]);

  return !isSeller &&(
    <div className='w-full h-[100vh]'>
        <form onSubmit={onSubmitHandler} className='fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 px-4 py-8 rounded-xl border-[#000000a0] shadow-2xl dark:border-[white] lg:w-[30%] sm:w-[60%] w-[95%]'>
          <p className='dark:text-white text-center text-2xl tracking-[4px] font-semibold'>Seller <span className='text-[red]'>Login</span></p>
          <div className='my-4'>
            <label className='dark:text-white tracking-[3px]' htmlFor="mail">Email</label><br />
            <input className='border-1 px-2 py-3 w-full rounded-md mt-1 dark:border-[white] dark:text-white outline-0' type="email" required placeholder='Enter your email' id='mail' onChange={(e)=>setEmail(e.target.value)} value={email} />
          </div>
          <div>
            <label className='dark:text-white tracking-[3px]' htmlFor="pass">Password</label><br />
            <input className='border-1 px-2 py-3 w-full rounded-md mt-1 dark:border-[white] dark:text-white outline-0' type="password" required placeholder='Enter your password' id='pass' onChange={(e)=>setPassword(e.target.value)} value={password} />
          </div>
          <button className='bg-[#008000bc] w-full rounded-sm text-white py-3 tracking-[3px] mt-6 cursor-pointer hover:bg-[green] duration-300'>Login</button>
        </form>
    </div>
  )
}

export default SellerLogin;