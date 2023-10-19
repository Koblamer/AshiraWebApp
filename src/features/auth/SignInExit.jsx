export default function SignInExit(props) {
  return (
    <div
      className="flex justify-end mr-5 py-20"
      onClick={props.toggleSignInModal}
    >
      X
    </div>
  );
}
