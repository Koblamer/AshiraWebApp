import { useState } from "react";
import { toast } from "react-toastify";
import SignUpButton from "../auth/SignUpButton";
import SignUpInput from "../auth/SignUpInput";
import Joi from "joi";
import InputErrorMessage from "../auth/InputErrorMessage";
import LoginWithFacebookButton from "./LoginWithFacebookButton";
import axios from "../../config/axios";
import { useNavigate } from "react-router-dom";

// import { useAuth } from "../../hooks/use-auths";

const signUpSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateSignUp = (input) => {
  const { error } = signUpSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function SignUpForm({ setShowSignUpModal }) {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({});

  // const { signUp } = useAuth();

  // const handleOnChange = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const validationError = validateSignUp(input);
      if (validationError) {
        return setError(validationError);
      }
      setError({});
      const form = { ...input };
      delete form.confirmPassword;
      const res = await axios.post("auth/signup", form);
      console.log("res =", res);

      localStorage.setItem("userData", JSON.stringify(res?.data?.user));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(res?.data?.accessToken)
      );

      alert("Register success");
      navigate("/");
      setShowSignUpModal(false);
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  console.log(input);

  return (
    <div>
      <form className="grid justify-center m-10 " onSubmit={handleSubmitForm}>
        <div className="my-2 text-left ">
          <SignUpInput
            placeholder="First Name "
            value={input.firstName}
            onChange={(e) => setInput({ ...input, firstName: e.target.value })}
            // name="firstName"
            // hasError={error.firstName}
          />
          {error.firstName && <InputErrorMessage message={error.firstName} />}
        </div>
        <div className="my-2 text-left ">
          <SignUpInput
            placeholder="Last Name"
            value={input.lastName}
            onChange={(e) => setInput({ ...input, lastName: e.target.value })}
          />
          {error.lastName && <InputErrorMessage message={error.lastName} />}
        </div>

        <div className="my-2 text-left ">
          <SignUpInput
            placeholder="Email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          {error.email && <InputErrorMessage message={error.email} />}
        </div>

        <div className="my-2 text-left ">
          <SignUpInput
            placeholder="Phone number"
            value={input.mobile}
            onChange={(e) => setInput({ ...input, mobile: e.target.value })}
          />
          {error.mobile && <InputErrorMessage message={error.mobile} />}
        </div>

        <div className="my-2">
          <SignUpInput
            type="password"
            placeholder="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          {error.password && <InputErrorMessage message={error.password} />}
        </div>

        <div className="my-2">
          <SignUpInput
            type="password"
            placeholder="confirm password"
            value={input.confirmPassword}
            onChange={(e) =>
              setInput({ ...input, confirmPassword: e.target.value })
            }
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
        </div>
        <div className="m-5 mt-14">
          <div className="grid justify-center ">
            <SignUpButton />
          </div>
          <div className="grid justify-center">
            <LoginWithFacebookButton />
          </div>
        </div>
      </form>
    </div>
  );
}
