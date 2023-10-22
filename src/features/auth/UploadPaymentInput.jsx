export default function UploadPaymentInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="inputUnderLine border-neutral-500 hover:border-stone-400 hover:text-stone-400 "
      value={value}
      onChange={onChange}
    />
  );
}
