import classNames from 'classnames';

const Button = ({
  type,
  size,
  block,
  outline,
  children,
  className,
  onClick,
  dataToggle,
  ariaHaspopup,
  ariaExpanded,
  dataDismiss,
  dataTarget,
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
      className,
    )}
    onClick={onClick}
    data-toggle={dataToggle}
    aria-haspopup={ariaHaspopup}
    aria-expanded={ariaExpanded}
    data-dismiss={dataDismiss}
    data-target={dataTarget}
  >
    {children}
  </button>
);

export default Button;
