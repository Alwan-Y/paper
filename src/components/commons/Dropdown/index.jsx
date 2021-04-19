import userLogo from 'assets/images/index/users.svg';

const Dropdown = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src={userLogo} alt="user logo" /> User
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">
          <h5>User Name</h5> <h6>Example</h6>
        </a>
        <a className="dropdown-item" href="#">
          <h5>Name</h5> <h6>Example</h6>
        </a>
        <a className="dropdown-item" href="#">
          <h5>Last Login</h5> <h6>2021-03-12 12:00:01</h6>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
