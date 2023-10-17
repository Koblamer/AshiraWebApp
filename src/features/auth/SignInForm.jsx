import { useState } from "react";
// import { toast } from "react-toastify/dist/components";
import SignInButton from "../auth/SignInButton";
import SignInInput from "../auth/SignInInput";
import LoginWithFacebookButton from "./LoginWithFacebookButton";

export default function SignInForm() {
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });

  return (
    <div>
      <form className="grid justify-center m-10 ">
        <div className="my-2 text-left ">
          <SignInInput
            placeholder="Email address or phone number"
            value={input.emailOrMobile}
            onChange={(e) =>
              setInput({ ...input, emailOrMobile: e.target.value })
            }
          />
        </div>
        <div className="my-2">
          <SignInInput
            type="password"
            placeholder="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </div>
      </form>
      <div className="m-5 mt-14">
        <div className="grid justify-center ">
          <SignInButton />
        </div>
        <div className="grid justify-center">
          <LoginWithFacebookButton />
        </div>
      </div>
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
