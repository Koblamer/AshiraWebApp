import { useState } from "react";
import { toast } from "react-toastify";
import UploadPaymentInput from "./UploadPaymentInput";
import UploadPaymentButton from "./UploadPaymentButton";
import Joi from "joi";
import UploadPaymentErrorMessage from "./UploadPaymentErrorMessage";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

const UploadPaymentSchema = Joi.object({
  destinationBank: Joi.string().trim().required(),
  sourceBank: Joi.string().trim().required(),
  senderAccountNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  senderName: Joi.string().trim().required(),
  transactionDate: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  amount: Joi.number().required(),
  upload: Joi.string().trim().required(),
  note: Joi.string(),
});

const validateUploadPayment = (input) => {
  const { error } = UploadPaymentSchema.validate(input, {
    abortEarly: false,
  });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function UploadPaymentForm({ setIsOpenPaymentModal }) {
  const { shoppingCart } = useProduct();
  const [input, setInput] = useState({
    destinationBank: "",
    sourceBank: "",
    senderAccountNumber: "",
    senderName: "",
    transactionDate: "",
    amount: "",
    upload: "",
    note: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const sumSubTotal = () => {
    let sum = 0;
    if (shoppingCart?.length > 0) {
      shoppingCart?.forEach((p) => {
        const total = p?.qty * p?.price;
        sum = sum + total;
      });
      return sum;
    } else {
      return sum;
    }
  };

  const handleSubmitForm = async (e) => {
    console.log("handleSubmitForm");
    try {
      e.preventDefault();
      const validationError = validateUploadPayment(input);

      console.log("handleSubmitForm validationError =", validationError);

      // if (validationError) {
      //   return setError(validationError);
      // }

      setError({});
      // const form = { ...input };

      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log("userData =", userData);
      const productPayload = {
        userId: userData?.id,
        total: sumSubTotal(),
        orderStatus: "PENDDING",
        products: shoppingCart,
      };
      const res = await axios.post("order/add", productPayload);

      // await axios.post("auth/UploadPayment", form);
      alert("Payment Successful");
      setIsOpenPaymentModal(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div>
      <form className=" mx-14  w-80 h-90 " onSubmit={handleSubmitForm}>
        <div>
          <UploadPaymentInput
            placeholder="Destination Bank *"
            value={input.destinationBank}
            onChange={(e) =>
              setInput({ ...input, destinationBank: e.target.value })
            }
          />
          {error.destinationBank && (
            <UploadPaymentErrorMessage message={error.destinationBank} />
          )}
        </div>
        <div>
          <UploadPaymentInput
            placeholder="Source Bank *"
            value={input.sourceBank}
            onChange={(e) => setInput({ ...input, sourceBank: e.target.value })}
          />
          {error.sourceBank && (
            <UploadPaymentErrorMessage message={error.sourceBank} />
          )}
        </div>
        <div>
          <UploadPaymentInput
            placeholder="Sender Account Number *"
            value={input.senderAccountNumber}
            onChange={(e) =>
              setInput({ ...input, senderAccountNumber: e.target.value })
            }
          />
          {error.senderAccountNumber && (
            <UploadPaymentErrorMessage message={error.senderAccountNumber} />
          )}
        </div>
        <div>
          <UploadPaymentInput
            placeholder="Sender Name *"
            value={input.senderName}
            onChange={(e) => setInput({ ...input, senderName: e.target.value })}
          />
        </div>
        <div>
          <UploadPaymentInput
            placeholder="Transaction Date *"
            value={input.transactionDate}
            onChange={(e) =>
              setInput({ ...input, transactionDate: e.target.value })
            }
          />
        </div>
        <div>
          <UploadPaymentInput
            placeholder="Amount *"
            value={input.amount}
            onChange={(e) => setInput({ ...input, amount: e.target.value })}
          />
        </div>

        <div className="flex justify-between">
          <UploadPaymentInput
            placeholder="Upload Receipt *"
            value={input.uploadReceipt}
            onChange={(e) =>
              setInput({ ...input, uploadReceipt: e.target.value })
            }
          />
          <div className=" text-[10px]">
            <input
              type="file"
              id="PaymentSlip"
              name="PaymentSlip"
              onChange={(e) => console.log(e)}
            />
          </div>
          {/* <div className=" text-[10px]">choose file</div> */}
        </div>

        <div>
          <UploadPaymentInput
            placeholder="Note (optional)"
            value={input.note}
            onChange={(e) => setInput({ ...input, note: e.target.value })}
          />
        </div>

        <div className="grid justify-center my-2 ">
          <UploadPaymentButton />
        </div>

        {/* <div>Sender Account Number</div>
        <input
          type="text"
          //   placeholder={placeholder}
          className="inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
          //   value={value}
          //   onChange={onChange}
        /> */}
      </form>
    </div>
  );
}
