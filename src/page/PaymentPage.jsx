import { useState } from "react";
import OrderSummaryPayment from "../components/Payment/OrderSummaryPayment";
import PaymentMethod from "../components/Payment/PaymentMethod";
import Header2 from "../layout/Header2";
import UploadPaymentModal from "./UploadPaymentModal";

const PaymentPage = () => {
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
  return (
    <div>
      <Header2 />
      <div className="grid grid-cols-2 divide-x py-5">
        <div>
          <PaymentMethod />
        </div>
        <div>
          <OrderSummaryPayment setIsOpenPaymentModal={setIsOpenPaymentModal} />
        </div>
      </div>
      {isOpenPaymentModal && (
        <UploadPaymentModal setIsOpenPaymentModal={setIsOpenPaymentModal} />
      )}
    </div>
  );
};

export default PaymentPage;
