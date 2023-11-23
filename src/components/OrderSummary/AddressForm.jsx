import { useState, useEffect } from "react";
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
    post_code: "",
  });

  useEffect(() => {
    if (input) {
      localStorage.setItem("userAddress", JSON.stringify(input));
    }
  }, [input]);

  return (
    <>
      <div className="py-3">
        <form className="grid grid-cols-2 gap-4">
          <div>
            <div className="pl-2">First name</div>
            <AddressInput
              placeholder="First name"
              value={input.AddressInput}
              onChange={(e) =>
                setInput({ ...input, firstName: e.target.value })
              }
            />
          </div>
          <div>
            <div className="pl-2">Last name</div>
            <AddressInput
              placeholder="Last name"
              value={input.AddressInput}
              onChange={(e) => setInput({ ...input, lastName: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">Phone Number</div>
            <AddressInput
              type="numeric"
              placeholder="Phone Number"
              value={input.AddressInput}
              onChange={(e) => setInput({ ...input, mobile: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">Address</div>
            <AddressInput
              placeholder="Address"
              value={input.AddressInput}
              onChange={(e) => setInput({ ...input, address: e.target.value })}
            />
          </div>

          <div>
            <div className="pl-2">Province</div>
            <AddressInput
              placeholder="Province"
              value={input.AddressInput}
              onChange={(e) => setInput({ ...input, province: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">District</div>
            <AddressInput
              placeholder="District"
              value={input.AddressInput}
              onChange={(e) => setInput({ ...input, district: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">Sub District</div>
            <AddressInput
              placeholder="Sub District"
              value={input.AddressInput}
              onChange={(e) =>
                setInput({ ...input, sub_district: e.target.value })
              }
            />
          </div>
          <div>
            <div className="pl-2">Postal Code</div>
            <AddressInput
              placeholder="Postal Code"
              value={input.AddressInput}
              onChange={(e) =>
                setInput({ ...input, post_code: e.target.value })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}
