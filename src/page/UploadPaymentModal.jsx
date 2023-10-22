import UploadPaymentForm from "../features/auth/UploadPaymentForm";

export default function UploadPaymentModal() {
  return (
    <div className="modal-overlay">
      <div className="shadow-md modal-content">
        <UploadPaymentForm />
      </div>
    </div>
  );
}
