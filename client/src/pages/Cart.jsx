import React, { useEffect, useState } from "react"
import { useAppContext } from "../context/AppContext"
import { categories } from "../assets/assets";
const Cart = () => {
    const [showAddress, setShowAddress] = React.useState(false)

    const {cartTotalAmount, userAddress, currency, countCart,cartItems, removeFromCart, navigate, products, paymentType, setPaymentType}= useAppContext();

    // set final cart array
    const [cartList, setCartList]= useState([]);
    const getCart= ()=> {
        let tempArray=[];
        for(const key in cartItems){
            const product= products.find((item)=>item._id===key);
            product.quantity=cartItems[key];
            tempArray.push(product);
        }
        setCartList(tempArray);
    }

    const placeOrder= async ()=>{

    }

    useEffect(()=>{
        if(products.length > 0 && cartItems){
            getCart();
        }
    },[products, cartItems])

    
    return cartList.length > 0 ?(
        
        <div className="flex flex-col md:flex-row gap-4 mt-5 sm:mt-16 max-w-6xl w-full px-6 mx-auto">
            <div>
                <button type='button' className='fixed max-sm:text-xl text-4xl max-sm:h-10 h-16 max-sm:w-10 w-16 text-[white] bg-black dark:text-[black] dark:bg-white z-30 right-3 bottom-12 rounded-full cursor-pointer animate-bounce' onClick={()=>scrollTo(0,0)}><i className="fa-solid fa-angle-up"></i></button>
            </div>
            <div className='flex-1 max-w-4xl overflow-auto h-[60vh] scrollbar-hide'>
                <h1 className="text-3xl font-medium mb-6 text-black dark:text-white">
                Shopping Cart <span className="text-sm text-[red]">{countCart}</span>
            </h1>
                <div className="grid grid-cols-[2fr_1fr_1fr] max-sm:mt-10 text-gray-500 text-base font-medium pb-3">
                    <p className="text-left">Product Details</p>
                    <p className="text-center">Subtotal</p>
                    <p className="text-center">Action</p>
                </div>

                {cartList.map((product, index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium py-3  sm:hover:bg-[#ccc] px-2 duration-300 rounded-xl group border-2 dark:border-[white] border-[black] mb-3">
                        <div className="flex items-center md:gap-6 gap-3">
                            <div className="cursor-pointer w-24 h-24 flex items-center justify-center rounded-full overflow-hidden">
                                <img className="max-w-full h-full object-cover rounded-full" src={product.image} alt={product.name} onClick={()=>navigate(`/products/${product.category.toLowerCase()}/${product._id}`)} />
                            </div>
                            <div>
                                <p className="hidden md:block font-semibold group-hover:text-black">{product.name}</p>
                                <div className="font-normal text-gray-500/70">
                                    <div className='flex items-center'>
                                        <p className=" group-hover:text-black">Qty: {cartItems[product._id]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-center group-hover:text-black">${product.offerPrice * product.quantity}</p>
                        <button className="cursor-pointer mx-auto" onClick={()=>removeFromCart(product._id)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m12.5 7.5-5 5m0-5 5 5m5.833-2.5a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0" stroke="#FF532E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>)
                )}

                <button className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium" onClick={()=>navigate('/products')}>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#615fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Continue Shopping
                </button>

            </div>

            <div className="max-w-[360px] w-full bg-[#cccccc58] dark:bg-[black] p-5 max-md:mt-16 border-2 dark:border-white border-gray-300/70 rounded-2xl">
                <h2 className="text-xl md:text-xl font-medium dark:text-white cursor-default">Order Summary</h2>
                <hr className="border-[black] dark:border-[white] my-5" />

                <div className="mb-6">
                    <p className="text-sm font-medium uppercase dark:text-[#ffffffc2]">Delivery Address</p>
                    <div className="relative flex justify-between items-start mt-2">
                        <p className="text-gray-500"> {userAddress} </p>
                        <button onClick={() => setShowAddress(!showAddress)} className="text-indigo-500 hover:underline cursor-pointer">
                            Change
                        </button>
                        {showAddress && (
                            <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                                <p onClick={() => setShowAddress(false)} className="text-gray-500 p-2 hover:bg-gray-100">
                                    New York, USA
                                </p>
                                <p onClick={() => setShowAddress(false)} className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
                                    Add address
                                </p>
                            </div>
                        )}
                    </div>

                    <p className="text-sm font-medium uppercase mt-6">Payment Method</p>

                    <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none" onChange={(e) => setPaymentType(e.target.value)}>
                        <option value="COD">Cash On Delivery</option>
                        <option value="Online">Online Payment</option>
                    </select>
                </div>

                <hr className="border-gray-300" />

                <div className="text-gray-500 mt-4 space-y-2">
                    <p className="flex justify-between dark:text-[#ffffffc2]">
                        <span>Price</span><span>{currency}{cartTotalAmount()}</span>
                    </p>
                    <p className="flex justify-between dark:text-[#ffffffc2]">
                        <span>Shipping Fee</span><span className="text-green-600">Free</span>
                    </p>
                    <p className="flex justify-between dark:text-[#ffffffc2]">
                        <span>Tax (2%)</span><span>{currency}{(0.02 * cartTotalAmount()).toFixed(2)}</span>
                    </p>
                    <p className="flex justify-between text-lg font-medium mt-3 dark:text-[#ffffffc2]">
                        <span>Total Amount:</span>{currency}{(cartTotalAmount() + (0.02 * cartTotalAmount())).toFixed(2)}
                    </p>
                </div>

                <button className="w-full py-3 mt-6 cursor-pointer bg-[#008000aa] text-white font-medium hover:bg-[green] transition duration-300 rounded-md" onClick={placeOrder}>
                    {paymentType=== 'COD' ? 'Place Order' : 'Proceed to Checkout'}
                </button>
            </div>
        </div>
    ) : 
    <div className="flex flex-col md:flex-row pt-10 max-sm:text-center sm:pt-16 max-w-6xl w-full px-6 mx-auto">
        <div className='flex-1'>
            <h1 className="text-3xl font-medium mb-6 sm:mb-20 text-black dark:text-white">
                Shopping Cart <span className="text-sm text-[red]">{countCart}</span>
            </h1>
            <div className="w-full max-sm:h-[43vh] sm:h-[40vh] lg:h-[25vh]">
                <h2 className="text-xl text-center font-medium max-sm:mt-10 dark:text-white">Your cart is empty</h2>
                <p className="text-sm text-center mt-2 dark:text-[#ffffffab]">Looks like you haven’t added anything yet.</p>
                <button className="ms-[50%] transform -translate-x-1/2 group cursor-pointer flex items-center mt-12 gap-2 text-indigo-500 font-medium" onClick={()=>navigate('/products')}>
                    <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.09 5.5H1M6.143 10 1 5.5 6.143 1" stroke="#615fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Continue Shopping
                </button>
            </div>
        </div>
    </div>
}

export default Cart;