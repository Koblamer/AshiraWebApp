import axios from "axios";
import { useState, useEffect } from "react";

const AdminOrderPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  const getOrderDetails = async () => {
    const res = await axios.get("/order");
    setOrderDetails(res.data.orders);
    console.log(res);
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  return (
    <div className="container">
      <div className="text-xl pb-5">Order</div>
      <div className="table-dashboard">
        <table>
          <tr>
            <th>OrderID</th>
            <th>User ID</th>
            <th>Order Status</th>
            <th>Payment ID</th>
            <th>Total</th>
            <th>Created Date</th>
            <th>Update Date</th>
            <th></th>
          </tr>
          {orderDetails?.length > 0 &&
            orderDetails?.map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{order.userId}</td>
                  <td>
                    <select name="orderStatus" id="orderStatus" className="p-1">
                      <option value="PENDING">Pending</option>
                      <option value="PAYMENTSUCCESSFULL">
                        Payment Successfull
                      </option>
                    </select>
                  </td>
                  {/* <td>{order.orderStatus}</td> */}
                  <td>{order.paymentId}</td>
                  <td>{order.total}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.updatedAt}</td>
                  <td>
                    <button className="border px-2 py-1 rounded-md bg-green-500 text-white">
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default AdminOrderPage;
