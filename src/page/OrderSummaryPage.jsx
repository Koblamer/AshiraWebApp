import OrderSummary from "../components/OrderSummary/OrderSummary";
import ShippingAddress from "../components/OrderSummary/ShippingAddress";
import ShoppingCart from "../components/OrderSummary/ShoppingCart";
import Header2 from "../layout/Header2";

const OrderSummaryPage = () => {
  return (
    <div>
      <Header2 />
      <div className="grid grid-cols-2 m-5">
        <div>
          <ShippingAddress />
        </div>
        <div className="ml-5">
          <OrderSummary />
        </div>
        <div className="my-5">
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
