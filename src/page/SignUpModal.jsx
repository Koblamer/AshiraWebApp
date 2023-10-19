import SignInContainer from "../features/auth/SignInContainer";
import SignUpContent from "../features/auth/SignUpContent";
import SignUpForm from "../features/auth/SignUpForm";
import SignUpExit from "../features/auth/SignUpExit";

export default function SignUpModal(props) {
  return (
    <div className="modal-overlay">
      <div className="shadow-md modal-content">
        <SignUpExit toggleSignUpModal={props.toggleSignUpModal} />
        <SignUpContent />
        <SignUpForm />
        <SignInContainer
          closeSignUpAndBackToSignIn={props.closeSignUpAndBackToSignIn}
        />
      </div>
    </div>
  );
}
