import paperLogo from 'assets/images/index/paperlogo.png';
import dashboardLogo from 'assets/images/index/dashboard.svg';
import financeLogo from 'assets/images/index/finance.svg';
import Heading6 from 'components/commons/Heading6';

const SideBar = ({ onClickDashboard, onClickFinance }) => {
  return (
    <div className="row">
      <div className="col dashboard__logo">
        <img className="dashboard__logo" src={paperLogo} alt="logo paper" />
        <Heading6
          className="dashboard__heading mt-5"
          onClick={onClickDashboard}
        >
          {' '}
          <img
            className="dashboard__icon"
            src={dashboardLogo}
            alt="dashboard logo"
          />{' '}
          Dashboard
        </Heading6>
        <Heading6 className="dashboard__heading mt-5" onClick={onClickFinance}>
          {' '}
          <img className="dashboard__icon" src={financeLogo} alt="" /> Finance
        </Heading6>
      </div>
    </div>
  );
};

export default SideBar;
