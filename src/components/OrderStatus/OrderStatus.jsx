import { useState, useEffect } from "react";
import { searchOrderByNumber } from "../../api/order";
import OrderStatusDetail from "./OrderStatusDetail";
import OrderItemsDetail from "./OrderItemsDetail";
import axios from "axios";

export default function OrderStatus() {
  const [orderNumber, setOrderNumber] = useState(null);
  const [orderDetail, setOrderDetail] = useState(null);
  const [orderList, setOrderList] = useState(null);
  const userData = JSON.parse(localStorage.getItem("userData"));

  const searchOrder = async () => {
    const res = await searchOrderByNumber(orderNumber);
    console.log("searchOrder res =", res);
    setOrderDetail(res);
  };

  const getOrderByUserId = async () => {
    const userId = userData.id;
    const res = await axios.get(`/order/userId/${userId}`);

    console.log("res =", res);

    setOrderList(res?.data?.order);
  };

  useEffect(() => {
    getOrderByUserId();
  }, []);

  return (
    <>
      <div
        className="p-6 flex justify-center"
        style={{ borderColor: "red", borderStyle: "solid" }}
      >
        <div className="px-10 py-2">
          <div>Your Orders</div>
          <>
            {orderList &&
              orderList?.map((data, i) => {
                return <div key={i}>Order Number : {data?.orderNumber}</div>;
              })}
          </>
        </div>
      </div>
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
        {orderDetail?.orderDetail && (
          <OrderStatusDetail orderDetail={orderDetail} />
        )}
      </div>
      {orderDetail?.orderDetail && (
        <OrderItemsDetail orderDetail={orderDetail} />
      )}
    </>
  );
}
