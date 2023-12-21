import { useState, useEffect } from "react";
import AddressInput from "./AddressInput";
import { addAddress } from "../../api/address";
import axios from "axios";

export default function AddressForm() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    province: "",
    district: "",
    sub_district: "",
    post_code: "",
  });

  const getUserAddress = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const res = await axios.get(`/address/${userData.id}`);
    if (res.data.address) {
      setInput({
        firstName: userData.firstName,
        lastName: userData.lastName,
        mobile: userData.mobile,
        address: res.data.address.address,
        province: res.data.address.province,
        district: res.data.address.district,
        sub_district: res.data.address.sub_district,
        post_code: res.data.address.post_code,
      });
    }

    console.log(res);
  };

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const userData = JSON.parse(localStorage.getItem("userData"));
      const userAddress = JSON.parse(localStorage.getItem("userAddress"));
      const addressPayload = {
        userId: userData?.id,
        address: userAddress.address,
        province: userAddress.province,
        district: userAddress.district,
        sub_district: userAddress.sub_district,
        post_code: userAddress.post_code,
      };

      const hasAddress = await axios.get(`/address/${userData.id}`);

      console.log("hasAddress =", hasAddress);

      if (hasAddress.data.address) {
        const resAddAddress = await axios.patch(
          `/address/${hasAddress.data.address.id}`,
          input
        );
        if (resAddAddress) {
          alert("Update Address success");
        }
      } else {
        const resAddAddress = await addAddress(addressPayload);
        if (resAddAddress) {
          alert("Add Address success");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (input) {
      localStorage.setItem("userAddress", JSON.stringify(input));
    }
  }, [input]);

  useEffect(() => {
    getUserAddress();
  }, []);

  return (
    <>
      <div className="py-3">
        <form onSubmit={handleOnSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <div className="pl-2">First name</div>
            <AddressInput
              placeholder="First name"
              value={input.firstName}
              onChange={(e) => {
                console.log(e);
                setInput({ ...input, firstName: e.target.value });
              }}
            />
          </div>
          <div>
            <div className="pl-2">Last name</div>
            <AddressInput
              placeholder="Last name"
              value={input.lastName}
              onChange={(e) => setInput({ ...input, lastName: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">Phone Number</div>
            <AddressInput
              type="numeric"
              placeholder="Phone Number"
              value={input.mobile}
              onChange={(e) => setInput({ ...input, mobile: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">Address</div>
            <AddressInput
              placeholder="Address"
              value={input.address}
              onChange={(e) => setInput({ ...input, address: e.target.value })}
            />
          </div>

          <div>
            <div className="pl-2">Province</div>
            <AddressInput
              placeholder="Province"
              value={input.province}
              onChange={(e) => setInput({ ...input, province: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">District</div>
            <AddressInput
              placeholder="District"
              value={input.district}
              onChange={(e) => setInput({ ...input, district: e.target.value })}
            />
          </div>
          <div>
            <div className="pl-2">Sub District</div>
            <AddressInput
              placeholder="Sub District"
              value={input.sub_district}
              onChange={(e) =>
                setInput({ ...input, sub_district: e.target.value })
              }
            />
          </div>
          <div>
            <div className="pl-2">Postal Code</div>
            <AddressInput
              placeholder="Postal Code"
              value={input.post_code}
              onChange={(e) =>
                setInput({ ...input, post_code: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center my-2 ">
            {/* <button
              type="button"
              className="text-center text-base  rounded-md py-1 w-48 m-1   border border-stone-400  hover:border-stone-400    hover:text-stone-400 "
            >
              Edit
            </button> */}
            <button
              type="submit"
              className="text-center text-base  rounded-md py-1 w-48 m-1   border border-stone-400  hover:border-stone-400    hover:text-stone-400 "
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
