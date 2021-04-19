import classNames from 'classnames';

const Button = ({
  type,
  size,
  block,
  outline,
  children,
  className,
  onClick,
  ...rest
}) => (
  <button
    type="button"
    className={classNames(
      'button btn',
      { [`btn-${type}`]: outline },
      { [`btn-${type}`]: !outline },
      { [`btn-${size}`]: size },
      { 'btn-block': block },
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
