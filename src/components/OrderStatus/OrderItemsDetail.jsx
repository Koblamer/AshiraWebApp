export default function OrderItemsDetail({ orderDetail }) {
  return (
    <div className="p-10">
      <div className="font-bold grid grid-cols-5 start-1 my-2">
        <div className="col-start-3">Price</div>
        <div>Quantity</div>
        <div>Sub Total</div>
      </div>

      {orderDetail?.orderItems?.length > 0 &&
        orderDetail?.orderItems?.map((p, i) => {
          return (
            <div key={i}>
              <div className="grid grid-cols-5 my-6">
                <div className="flex items-center">
                  <img
                    src={p?.product?.imageUrl}
                    alt="product_order_summary"
                    className="pr-5"
                  />
                </div>
                <div className="flex items-center">{p?.product?.name}</div>
                <div className="flex items-center">
                  ฿ {p?.product?.price?.toLocaleString("en-US")}
                </div>
                <div className="flex items-center text-sm">{p?.quantity}</div>
                <div className="flex items-center">
                  ฿ {(p?.quantity * p?.product?.price).toLocaleString("en-US")}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
