import SideBar from 'components/resources/SideBar';
import Chart from 'components/resources/Chart';
import Dropdown from 'components/commons/Dropdown';

const DashboardPage = ({ onClickFinance, username, name, lastLogin }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 jumbotron jumbotron-fluid dashboard dashboard--background dashboard__backgroundSide">
          <SideBar onClickFinance={onClickFinance} />
        </div>
        <div className="col-8 jumbotron jumbotron-fluid dashboard dashboard2--background dashboard__backgroundSide2">
          <div className="row">
            <h1 className="dashboard__hdashboard">DASHBOARD</h1>
          </div>
          <div className="row">
            <div className="col-6">
              <Chart />
            </div>
            <div className="col-6">
              <h1 className="dashboard__tdashboard2">Finance Account</h1>
              <div className="row">
                <div className="col col-3">
                  <div className="row mb-4 dashboard__cardd mt-5">
                    <div className="col-3">
                      <h3 className="dashboard__imgButton">AA</h3>
                    </div>
                    <div className="col-8">
                      <h6 className="m-0" className="dashboard__name mt-2">
                        Adam Aria{' '}
                        <span className="dashboard__span">- Bank</span>
                      </h6>
                      <p className="m-0 " className="dashboard__span">
                        New Account
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-3">
                  <div className="row mb-4 dashboard__cardd2 mt-5">
                    <div className="col-3">
                      <h3 className="dashboard__imgButton">AA</h3>
                    </div>
                    <div className="col-8">
                      <h6 className="m-0" className="dashboard__name mt-2">
                        Adam Aria{' '}
                        <span className="dashboard__span">- Bank</span>
                      </h6>
                      <p className="m-0 " className="dashboard__span">
                        New Account
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 jumbotron jumbotron-fluid dashboard dashboard2--background dashboard__backgroundSide2">
          <Dropdown username={username} name={name} lastLogin={lastLogin} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
