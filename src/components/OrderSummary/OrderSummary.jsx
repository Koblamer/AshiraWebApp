import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();
  const handleOnClick = (page) => {
    navigate(`/${page}`, true);
  };

  return (
    <>
      <div className="text-xl">Order Summary</div>
      <div>
        <div>Subtotal</div>
        {/* <Subtotal /> */}
      </div>
      <hr />
      <div>
        <div>Shipping Fee</div>
        {/* <ShippingStatus /> */}
      </div>
      <div>
        <div>Total</div>
        {/* <Total /> */}
      </div>
      <button
        onClick={() => handleOnClick("payment")}
        className="border py-1 px-6 my-2 rounded-md w-48 bg-green-500 text-white"
      >
        Proceed to checkout
      </button>
    </>
  );
}
