export default function SignUpExit(props) {
  return (
    <div
      className="flex justify-end mr-5 py-2 "
      onClick={props.toggleSignUpModal}
    >
      X
    </div>
  );
}
