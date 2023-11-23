import { useProduct } from "../../hooks/useProduct";

export default function OrderSummaryPayment({ setIsOpenPaymentModal }) {
  const { shoppingCart } = useProduct();

  const sumSubTotal = () => {
    let sum = 0;
    if (shoppingCart?.length > 0) {
      shoppingCart?.forEach((p) => {
        const total = p?.qty * p?.price;
        sum = sum + total;
      });
      return sum;
    } else {
      return sum;
    }
  };

  return (
    <>
      <div className="my-5 text-xl font-semibold ml-10">Order Summary</div>
      <hr className="mx-5" />
      <div className="my-5 font-semibold mx-10 flex justify-between">
        <div>Subtotal</div>
        <div>฿ {sumSubTotal().toLocaleString("en-US")}</div>
        {/* <Subtotal /> */}
      </div>
      <hr className="mx-5" />
      <div className="my-5 mx-10 flex justify-between">
        <div>Shipping Fee</div>
        <div>Shipping Fee</div>
        {/* <ShippingStatus /> */}
      </div>
      <div className="my-5 mx-10 flex justify-between">
        <div>Total</div>
        <div>฿ {sumSubTotal().toLocaleString("en-US")}</div>
        {/* <Total /> */}
      </div>
      <div className=" flex justify-center">
        <button
          className="border py-1 px-6 my-2 rounded-md w-48 bg-green-500 text-white"
          onClick={() => setIsOpenPaymentModal(true)}
        >
          Upload Payment Receipt
        </button>
      </div>
    </>
  );
}
