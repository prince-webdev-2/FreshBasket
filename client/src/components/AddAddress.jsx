import React, { useState } from 'react'
import asserts from '../assets/assets'
import { useAppContext } from '../context/AppContext';

const InputField=({type, placeholder, address, name, handleChange, className})=> (
        <input type={type} name={name} onChange={handleChange} value={address[name]} placeholder={placeholder} className={className} required />
);

function AddAddress() {
        const {setUserAddress, navigate}= useAppContext();

        const [address, setAddress]= useState({
                firstName: '',
                lastName: '',
                email: '',
                street: '',
                city: '',
                state: '',
                pincode: '',
                country: '',
                phone: ''
        });

        const handleChange= (e)=> {
                const {name,value}= e.target;
                setAddress((prevAddress)=> {
                        const updatedAddress={...prevAddress,[name]:value};
                        return updatedAddress;
                });
        };

        const onSubmitHandler= (e)=> {
                e.preventDefault();
                setUserAddress(address);
                navigate('/cart')


        }
  return (
    <div className='sm:w-[90%] sm:ms-[5%] max-sm:px-3 pt-5'>
        <div>
          <button type='button' className='fixed max-sm:text-xl text-4xl max-sm:h-10 h-16 max-sm:w-10 w-16 text-[white] bg-black dark:text-[black] dark:bg-white z-30 right-3 bottom-12 rounded-full cursor-pointer animate-bounce' onClick={()=>scrollTo(0,0)}><i className="fa-solid fa-angle-up"></i></button>
        </div>
        <h2 className='text-black dark:text-white  text-2xl sm:text-3xl tracking-[5px] cursor-default'>Add Shipping <span className='text-[red]'>Address</span></h2>

        <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='flex mt-10 sm:mt-20 justify-center'>
                        <form onSubmit={onSubmitHandler}>
                                <div className='sm:flex sm:gap-4 sm:mb-4'>
                                        <InputField className='w-[50%] max-sm:w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white' handleChange={handleChange} address={address} name='firstName' type='text' placeholder='First Name' />
                                        <InputField className='w-[50%] max-sm:w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white' handleChange={handleChange} address={address} name='lastName' type='text' placeholder='Last Name' />
                                </div>
                                <InputField className='w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white mb-4' handleChange={handleChange} address={address} name='email' type='email' placeholder='Email Address' />
                                <InputField className='w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white mb-4' handleChange={handleChange} address={address} name='street' type='text' placeholder='Street' />
                                <div className='sm:flex sm:gap-4 sm:mb-4'>
                                        <InputField className='w-[50%] max-sm:w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white' handleChange={handleChange} address={address} name='city' type='text' placeholder='City' />
                                        <InputField className='w-[50%] max-sm:w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white' handleChange={handleChange} address={address} name='state' type='text' placeholder='State' />
                                </div>
                                <div className='sm:flex sm:gap-4 sm:mb-4'>
                                        <InputField className='w-[50%] max-sm:w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white' handleChange={handleChange} address={address} name='pincode' type='number' placeholder='Pincode' />
                                        <InputField className='w-[50%] max-sm:w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white' handleChange={handleChange} address={address} name='country' type='text' placeholder='Country' />
                                </div>
                                <InputField className='w-[100%] max-sm:mb-3 border-2 rounded-sm p-2 outline-0 border-[#00000091] dark:border-[#ffffff] text-black dark:text-white mb-4' handleChange={handleChange} address={address} name='phone' type='text' placeholder='Phone' />
                                <button type='submit' className='w-full bg-[#008000b5] mt-7 sm:mt-15 py-4 rounded-sm text-white tracking-[3px] font-semibold cursor-pointer hover:bg-[green] duration-300'>Save Address</button>
                        </form>                        
                </div>
                <div className='flex items-center justify-center'>
                        <img className='animate-pulse' src={asserts.location} alt="" />
                </div>
        </div>
    </div>
  )
}

export default AddAddress