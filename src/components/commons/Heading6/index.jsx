import classNames from 'classnames';

const Heading6 = ({ className, children, onClick }) => {
  return (
    <h6 className={classNames(className)} onClick={onClick}>
      {children}
    </h6>
  );
};

export default Heading6;
