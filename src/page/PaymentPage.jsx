import OrderSummaryPayment from "../components/Payment/OrderSummaryPayment";
import PaymentMethod from "../components/Payment/PaymentMethod";
import Header2 from "../layout/Header2";

const PaymentPage = () => {
  return (
    <div>
      <Header2 />
      <div className="grid grid-cols-2  divide-x py-5">
        <div>
          <PaymentMethod />
        </div>
        <div>
          <OrderSummaryPayment />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
