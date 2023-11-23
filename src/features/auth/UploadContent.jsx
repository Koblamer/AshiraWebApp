import { useEffect, useCallback } from "react";
import logoHeader from "../../assets/Logo/ASHIRA_BRAND.png";
import moment from "moment";

export default function UploadContent({ orderNumber, setOrderNumber }) {
  const generateOrderNumber = useCallback(() => {
    const year = moment().year();
    const month = moment().month();
    const millisecond = moment().milliseconds();
    const genNumber = "" + year + month + millisecond;
    setOrderNumber(genNumber);
  }, []);

  useEffect(() => {
    generateOrderNumber();
  }, [generateOrderNumber]);

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={logoHeader}
          alt="logo"
          width={80}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between text-md font-semibold px-16 mt-2">
        <div>Payment for invoice</div>
        <div>#{orderNumber}</div>
      </div>
      <div className=" text-amber-800 text-[10px] px-16 ">
        Note : Please make sure that you have wired the money before filling
        this form
      </div>
    </>
  );
}
