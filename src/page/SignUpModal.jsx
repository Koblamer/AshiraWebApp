import SignUpContainer from "../features/auth/SignUpContainer";
import SignUpContent from "../features/auth/SignUpContent";
import SignUpForm from "../features/auth/SignUpForm";
import SignUpExit from "../features/auth/SignUpExit";
import SignUpInput from "../features/auth/SignUpInput";

export default function SignUpModal() {
  return (
    <div className="shadow-md max-w-max ">
      <SignUpExit />
      <SignUpContent />
      <SignUpForm />
      <SignUpContainer />
    </div>
  );
}
