import userLogo from 'assets/images/index/users.svg';

const Dropdown = ({ className, username, name, lastLogin, onClickLogout }) => {
  return (
    <div className={className}>
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src={userLogo} alt="user logo" /> {name}
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item">
          <h5>User Name</h5> <h6>{username}</h6>
        </a>
        <a className="dropdown-item">
          <h5>Name</h5> <h6>{name}</h6>
        </a>
        <a className="dropdown-item">
          <h5>Last Login</h5> <h6>{lastLogin}</h6>
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" onClick={onClickLogout}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
