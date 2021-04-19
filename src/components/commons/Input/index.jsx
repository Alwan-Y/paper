const Input = ({ type, id, placeholder, value, onChange, className }) => (
  <div className="form-group">
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  </div>
);

export default Input;
