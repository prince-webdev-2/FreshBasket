import { useEffect, useState } from "react";
import asserts, { dummyOrderProducts } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";

const Orders = () => {
  const { currency } = useAppContext();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    setOrders(dummyOrderProducts);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium text-black dark:text-white">Orders List</h2>

      {orders.map((order, index) => (
        <div key={index} className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800 dark:text-white hover:scale-95 duration-300" >
          <div className="flex gap-5">
            <img className="w-12 h-12 object-cover opacity-60" src={asserts.boxIcon} alt="boxIcon" />
            <div className="flex flex-col justify-center space-y-1">
              {order.items.map((item, idx) => (
                <p key={idx} className="font-medium">
                  {item.name}{" "}
                  <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}> x {item.quantity} </span>
                </p>
              ))}
            </div>
          </div>
          <div className="text-sm">
            <p className="font-medium mb-1">{order.customerName}</p>
            <p>{order.address}</p>
          </div>
          <p className="font-medium text-base my-auto text-[red]">
            {currency}{order.amount.toFixed(2)}
          </p>
          <div className="flex flex-col text-sm">
            <p>Method: {order.paymentType}</p>
            <p>Date: {order.date}</p>
            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
