import SignInContent from "../features/auth/SignInContent";
import SignInExit from "../features/auth/SignInExit";
import SignInForm from "../features/auth/SignInForm";
import SignUpContainer from "../features/auth/SignUpContainer";

export default function SignInModal() {
  return (
    <div className="shadow-md max-w-max ">
      <SignInExit />
      <SignInContent />
      <SignInForm />
      <SignUpContainer />
    </div>
  );
}
