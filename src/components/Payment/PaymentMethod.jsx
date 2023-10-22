import scbLogo from "../../assets/Logo/scbLogo.png";
import QRCode from "../../assets/QRCode/QRCodeAshiraWeb.jpg";

export default function PaymentMethod() {
  return (
    <>
      <div className="grid">
        <div className="my-5 text-xl font-semibold ml-10 ">Payment Method</div>
        <hr className="mx-5" />
        <div className="ml-10">
          <div className="my-5  font-semibold">Payment Information </div>
          <div className="flex mt-5">
            <div className="flex items-center">
              <img src={scbLogo} alt="logo" width={100} />
              <div className="ml-2">
                <div>Siam Commercial Bank (SCB)</div>
                <div>Account Name : Ashira Company Limited</div>
                <div>Account No. : 223-245855-0 </div>
              </div>
            </div>
            <div className="mx-16">
              <img src={QRCode} alt="QRCode" width={100} />
            </div>
          </div>
          <div className="flex mt-10">
            <div className="font-bold"> Step 1 </div>
            <div className="ml-2">
              Bank transfer to the bank account(s) listed in the payment
              Infomation.
            </div>
          </div>
          <div className="flex ">
            <div className="font-bold"> Step 2 </div>
            <div className="ml-2">
              Upload the payment receipt or payment proof of the bank
              transaction.
            </div>
          </div>

          <div className="mt-5">
            <div>
              Kindly mention your Full Name and Phone Number in Reference
            </div>
            <div>
              After the loader is completed, the receipt uploader will be
              available
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
