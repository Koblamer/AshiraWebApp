// import { useState } from "react";
// import Modal from "../../components/Modal";
// import RegisterForm from "../features/RegisterForm";

export default function SignInContainer(props) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center  pb-10 ">
      back to
      <div className="hover:text-stone-400 text-stone-400 mx-2">
        {/* <a href="signin?">Sign In</a> */}
        <div onClick={props.closeSignUpAndBackToSignIn}>Sign In</div>
      </div>
      {/* <Modal title="Sign up" open={isOpen} onClose={() => setIsOpen(false)}>
        <RegisterForm />
      </Modal> */}
    </div>
  );
}
