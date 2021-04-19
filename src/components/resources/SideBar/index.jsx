import paperLogo from 'assets/images/index/paperlogo.png';
import dashboardLogo from 'assets/images/index/dashboard.svg';
import financeLogo from 'assets/images/index/finance.svg';

const SideBar = () => {
  return (
    <div className="row">
      <div className="col dashboard__logo">
        <img className="dashboard__logo" src={paperLogo} alt="logo paper" />
        <h6 className="dashboard__heading mt-5">
          {' '}
          <img
            className="dashboard__icon"
            src={dashboardLogo}
            alt="dashboard logo"
          />{' '}
          Dashboard
        </h6>
        <h6 className="dashboard__heading mt-5">
          {' '}
          <img className="dashboard__icon" src={financeLogo} alt="" /> Finance
        </h6>
      </div>
    </div>
  );
};

export default SideBar;
