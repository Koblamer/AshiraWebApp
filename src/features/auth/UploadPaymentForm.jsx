import { useState } from "react";
import { toast } from "react-toastify";
import UploadPaymentInput from "./UploadPaymentInput";
import UploadPaymentButton from "./UploadPaymentButton";
import UploadPaymentErrorMessage from "./UploadPaymentErrorMessage";
import Joi from "joi";

import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import { addOrder } from "../../api/order";
import { ORDER_STATUS } from "../../constant";
import { useRef } from "react";
import { uploadImage } from "../../api/image";
import DatePicker from "react-datepicker";

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

export default function UploadPaymentForm({
  orderNumber,
  setIsOpenPaymentModal,
}) {
  const { shoppingCart, setShoppingCart } = useProduct();
  const [input, setInput] = useState({
    destinationBank: "",
    sourceBank: "",
    senderAccountNumber: "",
    senderName: "",
    transactionDate: new Date(),
    amount: "",
    upload: "",
    note: "",
    file: null,
  });
  const fileEl = useRef(null);
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

      setError({});

      const userData = JSON.parse(localStorage.getItem("userData"));

      const formData = new FormData();
      formData.append("image", input.file);

      const resUploadSlipPayment = await uploadImage(formData);

      const productPayload = {
        orderNumber: orderNumber,
        userId: userData?.id,
        total: sumSubTotal(),
        orderStatus: ORDER_STATUS.PROCESSING,
        products: shoppingCart,
        slipPayment: resUploadSlipPayment?.imageUrl,
        destinationBank: input.destinationBank,
        sourceBank: input.sourceBank,
        senderAccountNumber: input.senderAccountNumber,
        senderName: input.senderName,
        transactionDate: input.transactionDate,
        amount: input.amount,
      };
      const res = await addOrder(productPayload);

      if (res?.status === 200) {
        setShoppingCart([]);
        localStorage.removeItem("shoppingCart");
      }

      alert(`Payment Successful, Order Number : ${orderNumber}`);
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
          {/* <UploadPaymentInput
            placeholder="Transaction Date *"
            value={input.transactionDate}
            onChange={(e) =>
              setInput({ ...input, transactionDate: e.target.value })
            }
          /> */}
          <div className="pt-3 pl-3">Transaction Date *</div>
          <DatePicker
            className="cursor-pointer p-4 inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
            selected={input.transactionDate}
            onChange={(date) => {
              setInput({ ...input, transactionDate: date });
            }}
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
          <div className="text-[10px]">
            {input?.file ? (
              <div
                onClick={() => fileEl.current.click()}
                className="text-sm cursor-pointer max-h-52 overflow-hidden pl-4 py-2"
              >
                File Name : {input.file?.name}
              </div>
            ) : (
              <div className="flex justify-center my-2 ">
                <button
                  type="button"
                  onClick={() => fileEl.current.click()}
                  className="text-center text-xs  rounded-md py-1 w-48 m-1 border border-stone-400 hover:border-stone-400 hover:text-stone-400 "
                >
                  Add Slip payment
                </button>
              </div>
            )}
            <input
              type="file"
              id="PaymentSlip"
              name="PaymentSlip"
              className="hidden"
              ref={fileEl}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setInput({ ...input, file: e.target.files[0] });
                }
              }}
            />
          </div>
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
