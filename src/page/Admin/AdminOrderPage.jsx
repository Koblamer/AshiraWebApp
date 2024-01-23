import axios from "axios";
import { useState, useEffect } from "react";
import UpdateOrderModal from "./component/UpdateOrderModal";
import moment from "moment";

const AdminOrderPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [updateOrderId, setUpdateOrderId] = useState(null);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

  const getOrderDetails = async () => {
    console.log("getOrderDetails");
    const res = await axios.get("/order");
    setOrderDetails(res.data.orders);
    console.log("res =", res);
  };

  const openUpdateModal = async (id) => {
    setUpdateOrderId(id);
    setIsOpenUpdateModal(true);
  };

  useEffect(() => {
    console.log("useEffect");
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
            <th>Order Number</th>
            <th>Order Status</th>
            <th>Payment Status</th>
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
                  <td>{order.orderNumber}</td>
                  <td>{order.orderStatus}</td>
                  <td>{order.paymentStatus}</td>
                  <td>฿ {order.total.toLocaleString("en-US")}</td>
                  <td>{moment(order.createdAt).format("YYYY/MM/DD hh:ss")}</td>
                  <td>{moment(order.updatedAt).format("YYYY/MM/DD hh:ss")}</td>
                  <td>
                    <button
                      onClick={() => openUpdateModal(order?.id)}
                      className="border px-2 py-1 rounded-md bg-blue-500 text-white"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
      {isOpenUpdateModal && (
        <UpdateOrderModal
          updateOrderId={updateOrderId}
          setIsOpenUpdateModal={setIsOpenUpdateModal}
          getOrderDetails={getOrderDetails}
        />
      )}
    </div>
  );
};

export default AdminOrderPage;
