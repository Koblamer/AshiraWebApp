import PropTypes from "prop-types";

export default function AddressInput({
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

AddressInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
};
