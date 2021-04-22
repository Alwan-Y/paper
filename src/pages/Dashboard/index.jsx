import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DashboardPage from 'components/resources/DashboardPage';
import AccountPage from 'components/resources/AccountPage';
import TransactionPage from 'components/resources/TransactionPage';
import ROUTES from 'configs/routes';

const Dashboard = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [lastLogin, setLastLogin] = useState('');
  const [page, setPage] = useState(true);
  const [financePage, setFinancePage] = useState(true);

  const logout = () => {
    localStorage.removeItem('login');
    localStorage.removeItem('username');
    localStorage.removeItem('name');
    localStorage.removeItem('token');

    alert('Succes logout~');

    history.push(ROUTES.ROOT);
  };

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
        onClickLogout={() => {
          logout();
        }}
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
        onClickLogout={() => {
          logout();
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
      onClickLogout={() => {
        logout();
      }}
    />
  );
};

export default Dashboard;
