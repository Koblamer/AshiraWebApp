// import { useState } from "react";
// import Modal from "../../components/Modal";
// import RegisterForm from "../features/RegisterForm";

export default function SignUpContainer() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center  pb-10 ">
      Don't have an account
      <div className="hover:text-stone-400 text-stone-400 mx-2">
        <a href="signup?">Sign up</a>
      </div>
      {/* <Modal title="Sign up" open={isOpen} onClose={() => setIsOpen(false)}>
        <RegisterForm />
      </Modal> */}
    </div>
  );
}
