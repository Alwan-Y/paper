import { useState, useEffect } from 'react';
import SideBar from 'components/resources/SideBar';
import Dropdown from 'components/commons/Dropdown';
import SwitchOption from 'components/commons/SwitchOption';
import Heading1 from 'components/commons/Heading1';
import Search from 'components/commons/Search';
import Button from 'components/commons/Button';
import Pagination from 'components/resources/Pagination';
import DescriptionTransaction from 'components/resources/DescriptionTransaction';
import ItemTransaction from 'components/resources/ItemTransaction';
import ModalCreate from 'components/commons/ModalCreate';
import ModalDelete from 'components/commons/ModelDelete';
import API from 'services';

const TransactionPage = ({
  onClickSetPage,
  onClickSetFinancePage,
  username,
  name,
  lastLogin,
  onClickLogout
}) => {
  const [update, setUpdate] = useState(0);
  const [allTransaction, setAllTransaction] = useState([]);
  const [transactionName, setTransactionName] = useState('');
  const [transactionAccountName, setTransactionAccountName] = useState('');
  const [transactionDescription, setTransactionDescription] = useState('');
  const [transactionAmmount, setTransactionAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [modalViewTransaction, setModalViewTransaction] = useState({});
  const [paginationTotal, setPaginationTotal] = useState(1)

  const setNullVariable = () => {
    setTransactionName('');
    setTransactionAccountName('');
    setTransactionAmount('');
    setTransactionDescription('');
  };

  const getAllTransaction = async () => {
    const allTransaction = await API.getAllTransaction();
    setAllTransaction(allTransaction.data);
  };

  const addTransaction = async () => {
    const addTransaction = await API.addTransaction(
      transactionName,
      transactionAccountName,
      transactionAmmount,
      transactionDescription
    );

    setUpdate(update + 1);

    setNullVariable();

    alert('Succes add transaction');
  };

  const updateTransaction = async () => {
    const updateTransaction = await API.updateTransaction(
      transactionName,
      transactionAccountName,
      transactionAmmount,
      transactionDescription,
      transactionId
    );

    if (!updateTransaction) {
      return alert('something error');
    }

    setUpdate(update + 1);

    setNullVariable();

    alert('Succes update transaction');
  };

  const deleteTransaction = async () => {
    const deleteTransaction = await API.deleteTransaction(transactionId);

    setUpdate(update + 1);

    alert('Succes delete transaction');
  };

  useEffect(() => {
    getAllTransaction();
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
            onClickLogout={onClickLogout}
          />
          <SwitchOption onClickAccount={onClickSetFinancePage} />
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
          {allTransaction
            ? allTransaction.map((transaction, idx) => {
                return (
                  <ItemTransaction
                    key={idx}
                    transactionDate="Example"
                    financeAccount={transaction.title}
                    financeAccountName={transaction.finance_account_name}
                    refrence={transaction.description}
                    amount={transaction.debit_amount}
                    dataTargetView="#viewFinance"
                    dataTargetEdit="#editFinance"
                    dataTargetDelete="#deleteFinance"
                    onClick={() => {
                      setTransactionId(transaction.finance_account_id);
                      setModalViewTransaction(transaction);
                    }}
                  />
                );
              })
            : null}
          <Pagination 
          onClickDoubleLeft={() => {
            if (paginationTotal && paginationTotal <= 10) {
              return setPaginationTotal(1)
            }

            setPaginationTotal(paginationTotal - 10)
          }}
          onClickLeft={() => {
            if (paginationTotal && paginationTotal <= 1) {
              return setPaginationTotal(1)
            }

            setPaginationTotal(paginationTotal - 1)
          }}
          onClickRight={() => {
            setPaginationTotal(paginationTotal + 1)
          }}
          onClickDoubleRight={() => {
            setPaginationTotal(paginationTotal + 10)
          }}
          total={paginationTotal}
          />
          <ModalCreate
            target="createNewFinance"
            heading="Create New Finance"
            onClick={() => {
              addTransaction();
            }}
            onChangeFinanceName={(e) => {
              setTransactionName(e.target.value);
            }}
            onChangeFinanceAccount={(e) => {
              setTransactionAccountName(e.target.value);
            }}
            onChangeAmount={(e) => {
              setTransactionAmount(e.target.value);
            }}
            onChangeDescription={(e) => {
              setTransactionDescription(e.target.value);
            }}
          />
          <ModalCreate
            target="editFinance"
            heading="Edit Finance"
            onClick={() => {
              setTransactionId(modalViewTransaction.finance_account_id);
              updateTransaction();
            }}
            onChangeFinanceName={(e) => {
              setTransactionName(e.target.value);
            }}
            onChangeFinanceAccount={(e) => {
              setTransactionAccountName(e.target.value);
            }}
            onChangeAmount={(e) => {
              setTransactionAmount(e.target.value);
            }}
            onChangeDescription={(e) => {
              setTransactionDescription(e.target.value);
            }}
          />
          <ModalCreate
            target="viewFinance"
            heading="View Finance"
            onClick={() => {
              console.log('oke');
            }}
            readOnly="readOnly"
            valueFinanceName={modalViewTransaction.title}
            valueFinanceAccount={modalViewTransaction.finance_account_name}
            valueAmount={modalViewTransaction.debit_amount}
            valueDescription={modalViewTransaction.description}
          />
          <ModalDelete
            target="deleteFinance"
            heading={modalViewTransaction.title}
            onClick={() => {
              setTransactionId(modalViewTransaction.finance_account_id);
              deleteTransaction();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
