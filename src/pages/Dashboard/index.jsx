import { useState, useEffect } from 'react';
import SideBar from 'components/resources/SideBar';
import Chart from 'components/resources/Chart';
import Dropdown from 'components/commons/Dropdown';
import SwitchOption from 'components/commons/SwitchOption';
import Heading1 from 'components/commons/Heading1';
import Search from 'components/commons/Search';
import Button from 'components/commons/Button';
import DescriptionAccount from 'components/resources/DesciptionAccount';
import ItemAccount from 'components/resources/ItemAccount';
import Pagination from 'components/resources/Pagination';
import DescriptionTransaction from 'components/resources/DescriptionTransaction';
import ItemTransaction from 'components/resources/ItemTransaction';
import ModalCreate from 'components/commons/ModalCreate';
import ModalDelete from 'components/commons/ModelDelete';
import ModalCreateAccount from 'components/commons/ModalCreateAccount';
import API from 'services';

const Dashboard = () => {
  const [update, setUpdate] = useState(0)
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [lastLogin, setLastLogin] = useState("")
  const [allAccount, setAllAccount] = useState([])
  const [accountName, setAccountName] = useState("")
  const [accountType, setAccountType] = useState("")
  const [accountDescription, setAccountDescription] = useState("") 
  const [page, setPage] = useState(true);
  const [financePage, setFinancePage] = useState(true);

  const getDetailLogin = () => {
    setUsername(localStorage.getItem("username"))
    setName(localStorage.getItem("name"))
    setLastLogin(localStorage.getItem("login"))
  }

  const getAllAccount = async () => {
    const allAccount = await API.getAllAccount()
    setAllAccount(allAccount.data)
  }

  const addAccount = async () => {
    const addAccount = await API.addAccount(accountName, accountType, accountDescription)
  }

  useEffect(() => {
    getDetailLogin()
    getAllAccount()
  }, [])

  useEffect(() => {
    getAllAccount()
  }, [update])

  if (page) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 jumbotron jumbotron-fluid dashboard dashboard--background dashboard__backgroundSide">
            <SideBar
              onClickFinance={() => {
                setPage(false);
              }}
            />
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
            <Dropdown 
            username={username}
            name={name}
            lastLogin={lastLogin}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!page && financePage) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 jumbotron jumbotron-fluid dashboard dashboard--background dashboard__backgroundSide">
            <SideBar
              onClickDashboard={() => {
                setPage(true);
              }}
            />
          </div>
          <div className="col-10 jumbotron jumbotron-fluid dashboard dashboard2--background dashboard__backgroundSide2">
            <Dropdown 
            className="finance__dropdown"
            username={username}
            name={name}
            lastLogin={lastLogin}
            />
            <SwitchOption
              truee="true"
              onClickFinance={() => {
                setFinancePage(false);
              }}
            />
            <hr className="finance__hr" />
            <div className="row">
              <div className="col text-left">
                <Heading1 className="finance__heading ml-5 mt-5">
                  All Finance Account
                </Heading1>
              </div>
            </div>
            <div className="row">
              <div className="col-4 ml-5 mt-4">
                <Search placeholder="Search" />
              </div>
              <div className="col-7 text-right">
                <p>
                  <Button
                    type="info"
                    size="lg"
                    className="rounded-pill mt-4 finance__button"
                    dataToggle="modal"
                    dataTarget="#createNewAccount"
                  >
                    Create New Account
                  </Button>
                </p>
              </div>
            </div>
            <DescriptionAccount />
            {allAccount ? allAccount.map((account, idx) => {
              return (
                <ItemAccount
                key={idx}
                accountName={account.name}
                description={account.description}
                accountType={account.type}
                dataTargetView="#viewAccount"
                dataTargetEdit="#editAccount"
                dataTargetDelete="#deleteAccount"
                viewAccountName={account.name}
                viewAccountType={account.type}
                viewAccountDescription={account.description}
              />
              )
            }) : null}
            <Pagination />
            <ModalCreateAccount
              target="createNewAccount"
              heading="Create New Account"
              onChangeAccountName={(e) => {
                setAccountName(e.target.value)
              }}
              onChangeTypeAccount={(e) => {
                setAccountType(e.target.value)
              }}
              onChangeDescription={(e) => {
                setAccountDescription(e.target.value)
              }}
              onClick={() => {
                addAccount()
                setUpdate(update + 1)
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 jumbotron jumbotron-fluid dashboard dashboard--background dashboard__backgroundSide">
          <SideBar
            onClickDashboard={() => {
              setPage(true);
            }}
          />
        </div>
        <div className="col-10 jumbotron jumbotron-fluid dashboard dashboard2--background dashboard__backgroundSide2">
          <Dropdown 
            className="finance__dropdown"
            username={username}
            name={name}
            lastLogin={lastLogin}
          />
          <SwitchOption
            onClickAccount={() => {
              setFinancePage(true);
            }}
          />
          <hr className="finance__hr" />
          <div className="row">
            <div className="col text-left">
              <Heading1 className="finance__heading ml-5 mt-5">
                All Finance Transaction
              </Heading1>
            </div>
          </div>
          <div className="row">
            <div className="col-4 ml-5 mt-4">
              <Search placeholder="Search" />
            </div>
            <div className="col-7 text-right">
              <p>
                <Button
                  type="info"
                  size="lg"
                  className="rounded-pill mt-4 finance__button"
                  dataToggle="modal"
                  dataTarget="#createNewFinance"
                >
                  Create New Transaction
                </Button>
              </p>
            </div>
          </div>
          <DescriptionTransaction />
          <ItemTransaction
            transactionDate="Example"
            financeAccount="Example"
            financeAccountName="Example"
            refrence="Example"
            amount="Example"
            dataTargetView="#viewFinance"
            dataTargetEdit="#editFinance"
            dataTargetDelete="#deleteFinance"
          />
          <ItemTransaction
            transactionDate="Example"
            financeAccount="Example"
            financeAccountName="Example"
            refrence="Example"
            amount="Example"
            dataTargetView="#viewFinance"
            dataTargetEdit="#editFinance"
            dataTargetDelete="#deleteFinance"
          />
          <ItemTransaction
            transactionDate="Example"
            financeAccount="Example"
            financeAccountName="Example"
            refrence="Example"
            amount="Example"
            dataTargetView="#viewFinance"
            dataTargetEdit="#editFinance"
            dataTargetDelete="#deleteFinance"
          />
          <Pagination />
          <ModalCreate
            target="createNewFinance"
            heading="Create New Finance"
            onClick={() => {
              console.log('oke');
            }}
            onChangeFinanceName={(e) => {
              console.log(e.target.value);
            }}
            onChangeFinanceAccount={(e) => {
              console.log(e.target.value);
            }}
            onChangeAmount={(e) => {
              console.log(e.target.value);
            }}
            onChangeDescription={(e) => {
              console.log(e.target.value);
            }}
          />
          <ModalCreate
            target="editFinance"
            heading="Edit Finance"
            onClick={() => {
              console.log('oke');
            }}
            onChangeFinanceName={(e) => {
              console.log(e.target.value);
            }}
            onChangeFinanceAccount={(e) => {
              console.log(e.target.value);
            }}
            onChangeAmount={(e) => {
              console.log(e.target.value);
            }}
            onChangeDescription={(e) => {
              console.log(e.target.value);
            }}
          />
          <ModalCreate
            target="viewFinance"
            heading="View Finance"
            onClick={() => {
              console.log('oke');
            }}
            readOnly="readOnly"
            valueFinanceName="Example"
            valueFinanceAccount="Example"
            valueAmount="Example"
            valueDescription="Example"
          />
          <ModalDelete target="deleteFinance" heading="Delete Finance" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
