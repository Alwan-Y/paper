import classNames from 'classnames';

const Heading1 = ({ className, children }) => {
  return <h1 className={classNames(className)}>{children}</h1>;
};

export default Heading1;
