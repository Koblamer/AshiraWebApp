export default function OrderStatusDetail({ orderDetail }) {
  return (
    <>
      <div className="p-10">
        <div>Order Number : {orderDetail?.orderDetail?.orderNumber}</div>
        <div>Order Status : {orderDetail?.orderDetail?.orderStatus}</div>
        <div>
          Total Price : ฿
          {orderDetail?.orderDetail?.total?.toLocaleString("en-US") || 0}
        </div>

        <div>Payment Status : {orderDetail?.payment?.paymentStatus}</div>
        <div>
          <img
            src={orderDetail?.payment?.slipURL}
            alt="slipPayment"
            height={600}
            width={600}
          />
        </div>
      </div>
    </>
  );
}
