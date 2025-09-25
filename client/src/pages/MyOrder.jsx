import React from 'react'
import { dummyOrderProducts } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

function MyOrder() {
        const {currency}= useAppContext();
  return (
    <div className='sm:w-[90%] sm:ms-[5%] max-sm:px-3 pt-5'>
        <div>
          <button type='button' className='fixed max-sm:text-xl text-4xl max-sm:h-10 h-16 max-sm:w-10 w-16 text-[white] bg-black dark:text-[black] dark:bg-white z-30 right-3 bottom-12 rounded-full cursor-pointer animate-bounce' onClick={()=>scrollTo(0,0)}><i className="fa-solid fa-angle-up"></i></button>
        </div>
        <h2 className='text-black dark:text-white  text-2xl sm:text-3xl tracking-[5px] cursor-default'>All products</h2><hr className='mb-5 sm:mb-10 w-[5rem] border border-[red] ms-[110px] sm:ms-[130px]' />

        <div>
                {dummyOrderProducts.map((order,index)=>(
                        <div key={index} className='w-full p-4 border-1 border-[#ccc] rounded-sm mb-4 grid grid-cols-3 max-sm:grid-cols-1 dark:text-white'>
                               <div>
                                        <p>OrderId:{order._id}</p>
                                        <div className='grid grid-cols-[40%_60%] sm:mt-4'>
                                                <img src={order.imageUrl} alt="order-item-image" className='rounded-full h-20 w-20' />
                                                <div>
                                                        <p>{order.name}</p>
                                                        <p>{order.category}</p>
                                                </div>
                                        </div>
                               </div>
                               <div>
                                        <p>Payment:{order.paymentType}</p>
                                        <div className='sm:mt-4'>
                                                <p>Quantity:1</p>
                                                <p>Status:Pending</p>
                                                <p>Date:20/09/2025</p>
                                        </div>
                               </div>
                               <div>
                                        <p>Total Amount:</p>
                                        <p className='sm:mt-4 text-[red]'>{currency}{order.price}</p>
                               </div>
                        </div>
                ))}
        </div>
    </div>
  )
}

export default MyOrder;