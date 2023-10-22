import OrderSummary from "../components/OrderSummary/OrderSummary";
import ShippingAddress from "../components/OrderSummary/ShippingAddress";
import ShoppingCart from "../components/OrderSummary/ShoppingCart";
import Header2 from "../layout/Header2";

const OrderSummaryPage = () => {
  return (
    <div>
      <Header2 />
      <div className="grid grid-cols-2">
        <div>
          <ShippingAddress />
        </div>
        <div>
          <OrderSummary />
        </div>
        <div>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
