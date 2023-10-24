export default function UploadPaymentExit({ setIsOpenPaymentModal }) {
  const handleCloseModal = () => {
    setIsOpenPaymentModal(false);
  };
  return (
    <div
      className="flex justify-end mr-5 cursor-pointer"
      onClick={handleCloseModal}
    >
      X
    </div>
  );
}
