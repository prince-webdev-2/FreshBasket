import React from 'react'
import { useAppContext } from '../context/AppContext'

function Cart() {
        const {cartItems, countCart, userAddress, currency, cartTotalAmount}= useAppContext();
        const [isOpen, setIsOpen] = React.useState(false);
        const [selected, setSelected] = React.useState("Select");

        const paymentType = ['Cash on Delivery', 'UPI Payment'];
        const handleSelect = (type) => {
                setSelected(type);
                setIsOpen(false);
        };
  return (
    <div className='sm:w-[90%] sm:ms-[5%] max-sm:px-3 pt-5'>
        <div>
          <button type='button' className='fixed max-sm:text-xl text-4xl max-sm:h-10 h-16 max-sm:w-10 w-16 text-[white] bg-amber-500 z-30 right-3 bottom-12 rounded-full cursor-pointer animate-bounce' onClick={()=>scrollTo(0,0)}><i className="fa-solid fa-angle-up"></i></button>
        </div>
        <h2 className='text-black dark:text-white  text-2xl sm:text-3xl tracking-[5px] cursor-default'>Shopping Cart<span className='text-[red] text-sm tracking-normal'>{countCart} items</span></h2>
        {/* cart items table */}
        <div className='sm:grid lg:grid-cols-[60%_40%] grid-cols-1 gap-4'>
                <div>products</div>
                <div className='py-8 px-6 bg-[#cccccc46] dark:bg-[black] dark:border-1 rounded-md dark:border-white dark:shadow-white dark:shadow-md cursor-default'>
                        <h4 className='text-2xl font-semibold dark:text-white'>Order Summary</h4> <hr className='my-4 dark:border-white' />
                        <h2 className='text-md font-semibold text-[#000000b2] dark:text-[#ffffffb0]'>DELIVERY ADDRESS</h2>
                        <p className='text-[#06b806] text-sm mt-1 mb-5'>{userAddress}</p>
                        <h2 className='text-md font-semibold text-[#000000b2] dark:text-[#ffffffb0]'>PAYMENT MODE</h2>
                        <div className="flex flex-col w-full text-sm relative mt-2 mb-5 cursor-pointer">
                                <button type="button" onClick={() => setIsOpen(!isOpen)}
                                className="w-full text-left sm:py-4 lg:py-2 px-4 pr-2 py-2 border rounded bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none cursor-pointer">
                                        <span>{selected}</span>
                                        <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280" >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                </button>
                                {isOpen && (
                                        <ul className="w-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2 absolute top-10 sm:top-15 lg:top-10">
                                                {paymentType.map((type, index) => (
                                                        <li key={index} className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer" onClick={() => handleSelect(type)} >
                                                                {type}
                                                        </li>
                                                ))}
                                        </ul>
                                )}
                        </div> <hr className='my-4 dark:border-white' />
                        <div>
                                <div className='flex justify-between items-center'>
                                        <p className='text-[#000000b2] dark:text-[#ffffffb0]'>Price</p>
                                        <p className='text-black dark:text-white'>{currency}{cartTotalAmount()}</p>                          
                                </div>
                                <div className='flex justify-between items-center'>
                                        <p className='text-[#000000b2] dark:text-[#ffffffb0]'>Shipping Fee</p>
                                        <p className='text-[#06b806]'>Free</p>                          
                                </div>
                                <div className='flex justify-between items-center mb-3'>
                                        <p className='text-[#000000b2] dark:text-[#ffffffb0]'>Tax(2%)</p>
                                        <p className='text-black dark:text-white'>{currency} {(cartTotalAmount() * 0.02).toFixed(2)}</p>                          
                                </div>
                                <div className='flex justify-between items-center'>
                                        <p className='text-black dark:text-white'>Total Amount:</p>
                                        <p className='text-xl text-[red]'>{currency} {(cartTotalAmount() + cartTotalAmount() * 0.02).toFixed(2)}</p>                          
                                </div>
                        </div>
                        <button type='button' className='py-3 sm:py-5 lg:py-3 text-white rounded-md mt-7 font-semibold w-full bg-[#06b806] cursor-pointer hover:bg-[green] duration-300 sm:text-xl lg:text-sm'>Place Order</button>
                </div>
        </div>
    </div>
  )
}

export default Cart