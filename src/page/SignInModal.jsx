/* eslint-disable react/prop-types */
import SignInContent from "../features/auth/SignInContent";
import SignInExit from "../features/auth/SignInExit";
import SignInForm from "../features/auth/SignInForm";
import SignUpContainer from "../features/auth/SignUpContainer";

export default function SignInModal(props) {
  console.log(props);
  return (
    <div className="modal-overlay">
      <div className="shadow-md modal-content ">
        <SignInExit toggleSignInModal={props.toggleSignInModal} />
        <SignInContent />
        <SignInForm />
        <SignUpContainer toggleSignUpModal={props.toggleSignUpModal} />
      </div>
    </div>
  );
}
