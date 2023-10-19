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

export default function SignUpForm() {
  console.log("TOAST", toast("test"));
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
      await axios.post("auth/signup", form);
      alert("Register success");
      navaigate("/");
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

// import { useState } from "react";
// import { toast } from "react-toastify";
// import SignInButton from "../auth/SignInButton";
// import SignInput from "../auth/SignInInput";
// import { useAuth } from "../../hooks/use-auth";

// export default function LoginForm() {
//   //   const [input, setInput] = useState({
//   //     emailOrMobile: "",
//   //     password: "",
//   //   });

//   //   const { login } = useAuth();

//   //   const handleSubmitForm = (e) => {
//   //     e.preventDefault();
//   //     login(input).catch((err) => {
//   //       toast.error(err.response.data.message);
//   //     });
//   //   };

//   return (

//   );
// }

// import { useState } from "react";
// import { toast } from "react-toastify";
// import RegisterInput from "./RegisterInput";
// import Joi from "joi";
// import InputErrorMessage from "./InputErrorMessage";
// import { useAuth } from "../../hooks/use-auth";

// // const registerSchema = Joi.object({
// //   firstName: Joi.string().trim().required(),
// //   lastName: Joi.string().trim().required(),
// //   emailOrMobile: Joi.alternatives([
// //     Joi.string().email({ tlds: false }),
// //     Joi.string().pattern(/^[0-9]{10}$/),
// //   ]).required(),
// //   password: Joi.string()
// //     .pattern(/^[a-zA-Z0-9]{6,30}$/)
// //     .trim()
// //     .required(),
// //   confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
// // });

// // const validateRegister = (input) => {
// //   // undefined | { firstName: ...,lastName: ..., }
// //   const { error } = registerSchema.validate(input, { abortEarly: false });

// //   if (error) {
// //     const result = error.details.reduce((acc, el) => {
// //       const { message, path } = el;
// //       acc[path[0]] = message;
// //       return acc;
// //     }, {});
// //     return result;
// //   }
// // };

// export default function SingUpForm() {
//   // const [input, setInput] = useState({
//   //   firstName: "",
//   //   lastName: "",
//   //   emailOrMobile: "",
//   //   password: "",
//   //   confirmPassword: "",
//   // });
//   // const [error, setError] = useState({});

//   // const { register } = useAuth();

//   // const handleChangeInput = (e) => {
//   //   setInput({ ...input, [e.target.name]: e.target.value });
//   // };

//   // const handleSubmitForm = (e) => {
//   //   e.preventDefault();
//   //   const validationError = validateRegister(input);
//   //   if (validationError) {
//   //     return setError(validationError);
//   //   }
//   //   setError({});
//   //   register(input).catch((err) => {
//   //     toast.error(err.response?.data.message);
//   //   });
//   // };

//   return (
//     // <form
//     //   className="grid grid-cols-2 gap-x-3 gap-y-4"
//     //   onSubmit={handleSubmitForm}
//     // >
//     //   <div>
//     //     <RegisterInput
//     //       placeholder="First name"
//     //       value={input.firstName}
//     //       onChange={handleChangeInput}
//     //       name="firstName"
//     //       hasError={error.firstName}
//     //     />
//     //     {error.firstName && <InputErrorMessage message={error.firstName} />}
//     //   </div>
//     //   <div>
//     //     <RegisterInput
//     //       placeholder="Last name"
//     //       value={input.lastName}
//     //       onChange={handleChangeInput}
//     //       name="lastName"
//     //       hasError={error.lastName}
//     //     />
//     //     {error.lastName && <InputErrorMessage message={error.lastName} />}
//     //   </div>
//     //   <div className="col-span-full">
//     //     <RegisterInput
//     //       placeholder="Email address or mobile number"
//     //       value={input.emailOrMobile}
//     //       onChange={handleChangeInput}
//     //       name="emailOrMobile"
//     //       hasError={error.emailOrMobile}
//     //     />
//     //     {error.emailOrMobile && (
//     //       <InputErrorMessage message={error.emailOrMobile} />
//     //     )}
//     //   </div>
//     //   <div className="col-span-full">
//     //     <RegisterInput
//     //       placeholder="Password"
//     //       type="password"
//     //       value={input.password}
//     //       onChange={handleChangeInput}
//     //       name="password"
//     //       hasError={error.password}
//     //     />
//     //     {error.password && <InputErrorMessage message={error.password} />}
//     //   </div>
//     //   <div className="col-span-full">
//     //     <RegisterInput
//     //       placeholder="Confirm password"
//     //       type="password"
//     //       value={input.confirmPassword}
//     //       onChange={handleChangeInput}
//     //       name="confirmPassword"
//     //       hasError={error.confirmPassword}
//     //     />
//     //     {error.confirmPassword && (
//     //       <InputErrorMessage message={error.confirmPassword} />
//     //     )}
//     //   </div>
//     //   <div className="mx-auto col-span-full">
//     <button className="bg-green-500 rounded-lg text-white px-3 py-1.5 text-lg font-bold min-w-[10rem]">
//       Sign up
//     </button>
//     //   </div>
//     // </form>
//   );
// }
