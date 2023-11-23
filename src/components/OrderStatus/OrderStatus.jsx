import { useState } from "react";
import { searchOrderByNumber } from "../../api/order";
import OrderStatusDetail from "./OrderStatusDetail";
import OrderItemsDetail from "./OrderItemsDetail";

export default function OrderStatus() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [orderDetail, setOrderDetail] = useState(null);

  const searchOrder = async () => {
    const res = await searchOrderByNumber(orderNumber);
    console.log("searchOrder res =", res);
    setOrderDetail(res);
  };

  return (
    <>
      <div className="p-10 flex justify-center">
        <div className="py-2 pr-3">Order Number</div>
        <div className="mr-3">
          <input
            type="text"
            placeholder="Order Number"
            className=" pr-3 inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
            onChange={(e) => setOrderNumber(e.target.value)}
          />
        </div>
        <button
          className="border py-1 px-6 my-2 rounded-md w-48 bg-green-500 text-white"
          onClick={searchOrder}
        >
          Search
        </button>
      </div>
      <div className="p-10 flex justify-center">
        {orderDetail && <OrderStatusDetail orderDetail={orderDetail} />}
      </div>
      {orderDetail && <OrderItemsDetail orderDetail={orderDetail} />}
    </>
  );
}
