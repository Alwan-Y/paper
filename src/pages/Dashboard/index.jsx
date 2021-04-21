import { useState, useEffect } from 'react';
import DashboardPage from 'components/resources/DashboardPage';
import AccountPage from 'components/resources/AccountPage';
import TransactionPage from 'components/resources/TransactionPage';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [lastLogin, setLastLogin] = useState('');
  const [page, setPage] = useState(true);
  const [financePage, setFinancePage] = useState(true);

  const getDetailLogin = () => {
    setUsername(localStorage.getItem('username'));
    setName(localStorage.getItem('name'));
    setLastLogin(localStorage.getItem('login'));
  };

  useEffect(() => {
    getDetailLogin();
  }, []);

  if (page) {
    return (
      <DashboardPage
        onClickFinance={() => {
          setPage(false);
        }}
        username={username}
        name={name}
        lastLogin={lastLogin}
      />
    );
  }

  if (!page && financePage) {
    return (
      <AccountPage
        username={username}
        name={name}
        lastLogin={lastLogin}
        onClickSetPage={() => {
          setPage(true);
        }}
        onClickSetFinancePage={() => {
          setFinancePage(false);
        }}
      />
    );
  }

  return (
    <TransactionPage
      onClickSetPage={() => {
        setPage(true);
      }}
      onClickSetFinancePage={() => {
        setFinancePage(true);
      }}
      onClick
      username={username}
      name={name}
      lastLogin={lastLogin}
    />
  );
};

export default Dashboard;
