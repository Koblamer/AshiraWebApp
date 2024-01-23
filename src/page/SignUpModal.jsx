import SignInContainer from "../features/auth/SignInContainer";
import SignUpContent from "../features/auth/SignUpContent";
import SignUpForm from "../features/auth/SignUpForm";
import SignUpExit from "../features/auth/SignUpExit";

export default function SignUpModal(props) {
  return (
    <div className="signin-modal-overlay">
      <div className="shadow-md signin-modal-content">
        <SignUpExit toggleSignUpModal={props.toggleSignUpModal} />
        <SignUpContent />
        <SignUpForm setShowSignUpModal={props.setShowSignUpModal} />
        <SignInContainer
          closeSignUpAndBackToSignIn={props.closeSignUpAndBackToSignIn}
        />
      </div>
    </div>
  );
}
