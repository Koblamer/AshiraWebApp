export default function SignInButton(props) {
  return (
    <div
      type="submit"
      className="text-center text-base  rounded-md py-1 w-48 m-1   border border-stone-400  hover:border-stone-400    hover:text-stone-400 "
      onClick={props.toggleSignInModal}
    >
      Sign in
    </div>
  );
}
