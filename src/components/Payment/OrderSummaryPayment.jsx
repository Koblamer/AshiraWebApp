export default function OrderSummaryPayment() {
  return (
    <>
      <div className="my-5 text-xl font-semibold ml-10">Order Summary</div>
      <hr className="mx-5" />
      <div className="my-5 font-semibold mx-10">
        <div>Subtotal</div>
        {/* <Subtotal /> */}
      </div>
      <hr className="mx-5" />
      <div className="ml-10">
        <div className="my-5">
          <div>Shipping Fee</div>
          {/* <ShippingStatus /> */}
        </div>
        <div className="my-5">
          <div>Total</div>
          {/* <Total /> */}
        </div>
        <div className=" flex justify-center">
          <button className="border py-1 px-6 my-2 rounded-md w-48 bg-green-500 text-white">
            Upload Payment Receipt
          </button>
        </div>
      </div>
    </>
  );
}
