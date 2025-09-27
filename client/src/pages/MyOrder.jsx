import React from 'react'
import { dummyOrderProducts } from '../assets/assets'
import { useAppContext } from '../context/AppContext';

function MyOrder() {
  const { currency } = useAppContext();

  return (
    <div className='sm:w-[90%] sm:ms-[5%] max-sm:px-3 pt-5'>
      <div>
        <button type='button' className='fixed max-sm:text-xl text-4xl max-sm:h-10 h-16 max-sm:w-10 w-16 text-[white] bg-black dark:text-[black] dark:bg-white z-30 right-3 bottom-12 rounded-full cursor-pointer animate-bounce' onClick={() => scrollTo(0, 0)} >
          <i className="fa-solid fa-angle-up"></i>
        </button>
      </div>
      <h2 className='text-black dark:text-white text-2xl sm:text-3xl tracking-[5px] cursor-default'>
        All Orders
      </h2>
      <hr className='mb-5 sm:mb-10 w-[5rem] border border-[red] ms-[110px] sm:ms-[130px]' />
      <div>
        {dummyOrderProducts.map((order, index) => (
          <div key={index} className='w-full p-4 border-1 border-[#ccc] rounded-sm mb-6 dark:text-white group hover:scale-95 duration-300' >
            <div className='mb-3'>
              <p><strong>OrderId:</strong> {order._id}</p>
              <p><strong>Customer:</strong> {order.customerName}</p>
              <p><strong>Phone:</strong> {order.phone}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Payment:</strong> {order.paymentType} ({order.isPaid ? "Paid" : "Pending"})</p>
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
              {order.items.map((item, idx) => (
                <div key={idx} className='flex items-center gap-4 border p-3 rounded-md group-hover:scale-95 duration-300'>
                  <img src={item.imageUrl} alt={item.name} className='rounded-full h-20 w-20 object-cover' />
                  <div>
                    <p className='font-semibold'>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {currency}{item.price.toFixed(2)}</p>
                    <p className='text-[red]'>
                      Total: {currency}{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className='mt-4'>
              <p className='font-bold text-lg'>
                Order Total: <span className='text-[red]'>{currency}{order.amount.toFixed(2)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyOrder;
