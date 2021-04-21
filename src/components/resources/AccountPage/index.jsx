import { useState, useEffect } from 'react';
import SideBar from 'components/resources/SideBar';
import Dropdown from 'components/commons/Dropdown';
import SwitchOption from 'components/commons/SwitchOption';
import Heading1 from 'components/commons/Heading1';
import Search from 'components/commons/Search';
import Button from 'components/commons/Button';
import DescriptionAccount from 'components/resources/DesciptionAccount';
import ItemAccount from 'components/resources/ItemAccount';
import Pagination from 'components/resources/Pagination';
import ModalCreateAccount from 'components/commons/ModalCreateAccount';
import ModalDelete from 'components/commons/ModelDelete';
import API from 'services';

const AccountPage = ({
  onClickSetPage,
  username,
  name,
  lastLogin,
  onClickSetFinancePage,
}) => {
  const [update, setUpdate] = useState(0);
  const [allAccount, setAllAccount] = useState([]);
  const [accountId, setAccountId] = useState('');
  const [modalViewData, setModalViewData] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountDescription, setAccountDescription] = useState('');

  const setNullVariable = () => {
    setAccountName('');
    setAccountType('');
    setAccountDescription('');
  };

  const getAllAccount = async () => {
    const allAccount = await API.getAllAccount();
    setAllAccount(allAccount.data);
  };

  const addAccount = async () => {
    const addAccount = await API.addAccount(
      accountName,
      accountType,
      accountDescription
    );

    setUpdate(update + 1);

    setNullVariable();

    alert('Succes add account');
  };

  const updateAccount = async () => {
    const updateAccount = await API.updateAccount(
      accountName,
      accountType,
      accountDescription,
      accountId
    );

    if (!updateAccount) {
      return alert('something error');
    }

    setNullVariable();

    setUpdate(update + 1);

    alert('Succes update account');
  };

  const deleteAccount = async () => {
    const deleteAccount = await API.deleteAccount(accountId);

    setUpdate(update + 1);

    alert('Succes delete account');
  };

  useEffect(() => {
    getAllAccount();
  }, [update]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 jumbotron jumbotron-fluid dashboard dashboard--background dashboard__backgroundSide">
          <SideBar onClickDashboard={onClickSetPage} />
        </div>
        <div className="col-10 jumbotron jumbotron-fluid dashboard dashboard2--background dashboard__backgroundSide2">
          <Dropdown
            className="finance__dropdown"
            username={username}
            name={name}
            lastLogin={lastLogin}
          />
          <SwitchOption truee="true" onClickFinance={onClickSetFinancePage} />
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
          {allAccount
            ? allAccount.map((account, idx) => {
                return (
                  <ItemAccount
                    key={idx}
                    accountName={account.name}
                    description={account.description}
                    accountType={account.type}
                    dataTargetView="#viewAccount"
                    dataTargetEdit="#editAccount"
                    dataTargetDelete="#deleteAccount"
                    onClick={() => {
                      setAccountId(account.finance_account_id);
                      setModalViewData(account);
                    }}
                  />
                );
              })
            : null}
          <Pagination />
          <ModalCreateAccount
            target="createNewAccount"
            heading="Create New Account"
            onChangeAccountName={(e) => {
              setAccountName(e.target.value);
            }}
            onChangeTypeAccount={(e) => {
              setAccountType(e.target.value);
            }}
            onChangeDescription={(e) => {
              setAccountDescription(e.target.value);
            }}
            onClick={() => {
              addAccount();
            }}
          />
          <ModalCreateAccount
            target="editAccount"
            heading="Edit Account"
            onChangeAccountName={(e) => {
              setAccountName(e.target.value);
            }}
            onChangeTypeAccount={(e) => {
              setAccountType(e.target.value);
            }}
            onChangeDescription={(e) => {
              setAccountDescription(e.target.value);
            }}
            onClick={() => {
              setAccountId(modalViewData.finance_account_id);
              updateAccount();
            }}
          />
          <ModalCreateAccount
            target="viewAccount"
            heading="View Account"
            readOnly="readOnly"
            valueAccountName={modalViewData.name}
            valueTypeAccount={modalViewData.type}
            valueDescription={modalViewData.description}
          />
          <ModalDelete
            target="deleteAccount"
            heading={modalViewData.name}
            onClick={() => {
              setAccountId(modalViewData.finance_account_id);
              deleteAccount();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
