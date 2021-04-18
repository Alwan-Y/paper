import paperLogo from "../../assets/images/index/paperlogo.png";
import dashboardLogo from "../../assets/images/index/dashboard.svg";
import financeLogo from "../../assets/images/index/finance.svg";
import userLogo from "../../assets/images/index/users.svg";
import { useState, useEffect } from "react";
import { Bar, Bubble } from "react-chartjs-2";

const Dashboard = () => {
  // const [chartData, setChartData] = useState({})

  const chartData = {
    labels: ["Mar", "Apr", "Mey", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Transaction data",
        data: [1000000, 2000000, 3000000, 4000000, 5000000, 6000000],
        borderWidth: 0,
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 jumbotron jumbotron-fluid dashboard dashboard--background dashboard__backgroundSide">
          <div className="row">
            <div className="col dashboard__logo">
              <img
                className="dashboard__logo"
                src={paperLogo}
                alt="logo paper"
              />
              <h6 className="dashboard__heading mt-5">
                {" "}
                <img
                  className="dashboard__icon"
                  src={dashboardLogo}
                  alt="dashboard logo"
                />{" "}
                Dashboard
              </h6>
              <h6 className="dashboard__heading mt-5">
                {" "}
                <img
                  className="dashboard__icon"
                  src={financeLogo}
                  alt=""
                />{" "}
                Finance
              </h6>
            </div>
          </div>
        </div>
        <div className="col-8 jumbotron jumbotron-fluid dashboard dashboard2--background dashboard__backgroundSide2">
          <div className="row">
            <h1 className="dashboard__hdashboard">DASHBOARD</h1>
          </div>
          <div className="row">
            <div className="col-6">
              <h1 className="dashboard__tdashboard">Transaction Summary</h1>
              <div className="dashboard__chart mt-5">
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            autoSkip: true,
                            maxTicksLimit: 10,
                            beginAtZero: true,
                          },
                          gridLines: {
                            display: true,
                          },
                        },
                      ],
                      xAxes: [
                        {
                          gridLines: {
                            display: false,
                          },
                        },
                      ],
                    },
                  }}
                />
              </div>
            </div>
            <div className="col-6">
              <h1 className="dashboard__tdashboard2">Finance Account</h1>
              <div className="row">
                <div className="col-3">
                  <div className="row mb-4 dashboard__cardd mt-5">
                    <div className="col-3">
                      <h3 className="dashboard__imgButton">AA</h3>
                    </div>
                    <div className="col-8">
                      <h6 className="m-0" className="dashboard__name mt-2">
                        Adam Aria{" "}
                        <span className="dashboard__span">- Bank</span>
                      </h6>
                      <p className="m-0 " className="dashboard__span">
                        New Account
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="row mb-4 dashboard__cardd2 mt-5">
                    <div className="col-3">
                      <h3 className="dashboard__imgButton">AA</h3>
                    </div>
                    <div className="col-8">
                      <h6 className="m-0" className="dashboard__name mt-2">
                        Adam Aria{" "}
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
          <div className="btn-group dashboard__profile">
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
