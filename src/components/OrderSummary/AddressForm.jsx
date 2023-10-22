import { useState } from "react";
import AddressInput from "./AddressInput";

export default function AddressForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    street: "",
    province: "",
    district: "",
    postalCode: "",
  });

  return (
    <>
      <div className="border p-3-2">
        <form className="grid grid-cols-2 gap-4 border   ">
          <AddressInput
            placeholder="first name"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, firstName: e.target.value })}
          />
          <AddressInput
            placeholder="Last name"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, lastName: e.target.value })}
          />
          <AddressInput
            type="numeric"
            placeholder="Phone Number"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, mobile: e.target.value })}
          />
          <AddressInput
            placeholder="Address"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, address: e.target.value })}
          />
          <AddressInput
            placeholder="Street"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, street: e.target.value })}
          />
          <AddressInput
            placeholder="Province"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, province: e.target.value })}
          />
          <AddressInput
            placeholder="DistrictInput"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, district: e.target.value })}
          />
          <AddressInput
            placeholder="Postal Code"
            value={input.AddressInput}
            onChange={(e) => setInput({ ...input, postalCode: e.target.value })}
          />
        </form>
      </div>
    </>
  );
}
