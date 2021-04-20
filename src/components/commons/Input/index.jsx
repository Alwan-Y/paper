const Input = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  className,
  readOnly,
}) => (
  <div className="form-group">
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      readOnly={readOnly}
    />
  </div>
);

export default Input;
