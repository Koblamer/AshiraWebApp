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
    <div>
      <form>
        <div>
          <UploadPaymentInput
            placeholder="Destination Bank"
            value={input.destinationBank}
            onChange={(e) =>
              setInput({ ...input, destinationBank: e.target.value })
            }
          />
        </div>
      </form>
    </div>
  );
}
