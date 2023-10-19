// import { useState } from "react";
// import Modal from "../../components/Modal";
// import RegisterForm from "../features/RegisterForm";

// import SignUpModal from "../../page/SignUpModal";

export default function SignUpContainer(props) {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-center  pb-10 ">
      Don't have an account
      <div className="hover:text-stone-400 text-stone-400 mx-2">
        <div onClick={props.toggleSignUpModal}>Sign Up</div>
      </div>
      {/* <Modal title="Sign up" open={isOpen} onClose={() => setIsOpen(false)}>
        <SignUpModal />
      </Modal> */}
    </div>
  );
}
