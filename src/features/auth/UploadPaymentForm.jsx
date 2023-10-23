import { useState } from "react";
import UploadPaymentInput from "./UploadPaymentInput";

export default function UploadPaymentForm() {
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

  return (
    <div className="my-5 mx-10">
      <form className="w-full">
        <div>
          <UploadPaymentInput
            placeholder="Destination Bank *"
            value={input.destinationBank}
            onChange={(e) =>
              setInput({ ...input, destinationBank: e.target.value })
            }
          />
        </div>
        <div>
          <UploadPaymentInput
            placeholder="Source Bank *"
            value={input.sourceBank}
            onChange={(e) => setInput({ ...input, sourceBank: e.target.value })}
          />
        </div>
        <div>
          <UploadPaymentInput
            placeholder="Sender Account Number *"
            value={input.senderAccountNumber}
            onChange={(e) =>
              setInput({ ...input, senderAccountNumber: e.target.value })
            }
          />
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
          <div className=" text-[10px]">choose file</div>
        </div>

        <div>
          <UploadPaymentInput
            placeholder="Note (optional)"
            value={input.note}
            onChange={(e) => setInput({ ...input, note: e.target.value })}
          />
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
