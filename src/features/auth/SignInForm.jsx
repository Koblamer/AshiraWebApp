/* eslint-disable react/prop-types */
import { useState } from "react";
// import { toast } from "react-toastify/dist/components";
import SignInButton from "../auth/SignInButton";
import SignInInput from "../auth/SignInInput";
import LoginWithFacebookButton from "./LoginWithFacebookButton";
import { toast } from "react-toastify";
import Joi from "joi";
import InputErrorMessage from "../auth/InputErrorMessage";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { addAccessToken } from "../../utils/local-storage";

const signInSchema = Joi.object({
  email: Joi.string().email({ tlds: false }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .min(6)
    .trim()
    .required()
    .label("Wrong password")
    .messages({
      "string.min": "Must have at least 6 characters",
      "object.regex": "Password must have a-z, A-Z or 0-9",
      "string.pattern.base": "Password must have a-z, A-Z or 0-9",
    }),
});

const validateSignIn = (input) => {
  const { error } = signInSchema.validate(input, { abortEarly: false });
  if (error) {
    console.log("error.details =", error.details);
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function SignInForm({ setShowSignInModal }) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const validationError = validateSignIn(input);
      if (validationError) {
        return setError(validationError);
      }
      setError({});
      const res = await axios.post("auth/signin", input);

      localStorage.setItem("userData", JSON.stringify(res?.data?.user));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(res?.data?.accessToken)
      );
      addAccessToken(res?.data?.accessToken);

      //accessToken

      alert("Sign In success");
      setShowSignInModal(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div>
      <form className="grid justify-center m-10 ">
        <div className="my-2 text-left ">
          <SignInInput
            placeholder="Email address"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          {
            error.email && <InputErrorMessage message={error.email} />
            //conditional rendering
          }
        </div>
        <div className="my-2">
          <SignInInput
            type="password"
            placeholder="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>
      </form>
      <div className="m-5 mt-14">
        <div className="grid justify-center ">
          <SignInButton handleSubmitForm={handleSubmitForm} />
        </div>
        <div className="grid justify-center">
          <LoginWithFacebookButton />
        </div>
      </div>
    </div>
  );
}
