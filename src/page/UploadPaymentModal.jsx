import { useState } from "react";
import UploadContent from "../features/auth/UploadContent";
import UploadPaymentExit from "../features/auth/UploadPaymentExit";
import UploadPaymentForm from "../features/auth/UploadPaymentForm";

export default function UploadPaymentModal({ setIsOpenPaymentModal }) {
  const [orderNumber, setOrderNumber] = useState(null);

  return (
    <div className="modal-overlay ">
      <div className="shadow-md modal-content w-full m-80">
        <UploadPaymentExit setIsOpenPaymentModal={setIsOpenPaymentModal} />
        <UploadContent
          orderNumber={orderNumber}
          setOrderNumber={setOrderNumber}
        />
        <UploadPaymentForm
          setIsOpenPaymentModal={setIsOpenPaymentModal}
          orderNumber={orderNumber}
        />
      </div>
    </div>
  );
}
