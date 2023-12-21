import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import moment from "moment";

const UpdateOrderModal = ({
  updateOrderId,
  setIsOpenUpdateModal,
  getOrderDetails,
}) => {
  const [input, setInput] = useState({
    orderNumber: "",
    orderStatus: "",
    paymentStatus: "",
    total: "",
    imageUrl: "",
    transactionDate: "",
    createdAt: "",
    updatedAt: "",
  });

  const getOrder = useCallback(async () => {
    const res = await axios.get(`/order/${updateOrderId}`);
    console.log("getOrder res =", res.data);
    if (res.data) {
      setInput({
        orderNumber: res.data.order.orderNumber,
        orderStatus: res.data.order.orderStatus,
        paymentStatus: res.data.paymentDetail.paymentStatus,
        total: res.data.paymentDetail.totalPrice,
        imageUrl: res.data.paymentDetail.slipURL,
        transactionDate: res.data.paymentReciept.transactionDate,
        createdAt: res.data.order.createdAt,
        updatedAt: res.data.order.updatedAt,
      });
    }
  }, [updateOrderId]);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log("handleSubmitForm input =", input);

      const res = await axios.patch(`/order/${updateOrderId}`, input);

      if (res) {
        alert("Updated success");
        setIsOpenUpdateModal(false);
        getOrderDetails();
      }
    } catch (err) {
      console.log("handleSubmitForm err =", err);
    }
  };

  useEffect(() => {
    getOrder();
  }, [getOrder]);

  return (
    <div className="modal-overlay">
      <div className="shadow-md modal-content w-1/3">
        Update Order
        <div
          className="flex justify-end mr-5 cursor-pointer"
          onClick={() => setIsOpenUpdateModal(false)}
        >
          X
        </div>
        <div>
          <form
            className="grid justify-center m-2 "
            onSubmit={handleSubmitForm}
          >
            <div>
              <div className="pl-2">Order Number</div>
              <div className="pl-2 py-2">{input.orderNumber}</div>
            </div>
            <div>
              <div className="ml-2 my-2">Order Status</div>
              <div>
                <select
                  name="orderStatus"
                  id="orderStatus"
                  className="w-full p-1 border border-neutral-500"
                  onChange={(e) =>
                    setInput({ ...input, orderStatus: e.target.value })
                  }
                  value={input?.orderStatus}
                >
                  <option value="PROCESSING">Processing</option>
                  <option value="SHIPPED">Shipped</option>
                  <option value="IN_TRANSIT">In transit</option>
                  <option value="OUT_FOR_DELIVERY">Out for delivery</option>
                  <option value="DELIVERED">Delivered</option>
                </select>
              </div>
            </div>
            <div>
              <div className="ml-2 my-2">Payment Status</div>
              <div>
                <select
                  name="paymentStatus"
                  id="paymentStatus"
                  className="w-full p-1 border border-neutral-500"
                  onChange={(e) =>
                    setInput({ ...input, paymentStatus: e.target.value })
                  }
                  value={input?.paymentStatus}
                >
                  <option value="PENDING">Pending</option>
                  <option value="PAID">Paid</option>
                  <option value="CANCEL">Cancel</option>
                </select>
              </div>
            </div>
            <div>
              <div className="pl-2 pt-2">Total Price</div>
              <div className="pl-2 py-2">
                ฿ {input.total.toLocaleString("en-US")}
              </div>
            </div>
            <div>
              <div className="pl-2 pt-2">transactionDate</div>
              <div className="pl-2 py-2">
                {moment(input.transactionDate).format("YYYY/MM/DD hh:ss")}
              </div>
            </div>
            <div>
              <div className="pl-2 pt-2">Created Date</div>
              <div className="pl-2 py-2">
                {moment(input.createdAt).format("YYYY/MM/DD hh:ss")}
              </div>
            </div>
            <div>
              <div className="pl-2 pt-2">Updated Date</div>
              <div className="pl-2 py-2">
                {moment(input.updatedAt).format("YYYY/MM/DD hh:ss")}
              </div>
            </div>

            <div className="text-sm cursor-pointer max-h-52 overflow-hidden my-3">
              <div className="py-2">Slip Payment</div>
              <img
                src={input?.imageUrl}
                alt="fileImage"
                height={300}
                width={300}
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="text-center text-base  rounded-md py-1 w-48 m-1   border border-stone-400  hover:border-stone-400    hover:text-stone-400 "
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrderModal;
