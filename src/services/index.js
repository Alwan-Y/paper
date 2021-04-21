import axios from 'axios';

const baseURL = 'https://development.paper.id:3500/test-case';
const baseLocalTesting = 'http://localhost:3001';

class API {
  static login = async (username, password) => {
    try {
      const loginUser = await axios.post(`${baseURL}/api/v1/login`, {
        username,
        password,
      });

      return loginUser;
    } catch (e) {
      return e;
    }
  };

  static getAllAccount = async () => {
    try {
      const getAllAcount = await axios.get(
        `${baseLocalTesting}/api/v1/account`
      );

      return getAllAcount;
    } catch (e) {
      return e;
    }
  };

  static getAllTransaction = async () => {
    try {
      const getAllTransaction = await axios.get(
        `${baseLocalTesting}/api/v1/finances`
      );

      return getAllTransaction;
    } catch (e) {
      return e;
    }
  };

  static addAccount = async (accountName, accountType, accountDescription) => {
    try {
      const addAccount = await axios.post(
        `${baseLocalTesting}/api/v1/account`,
        {
          name: accountName,
          type: accountType,
          description: accountDescription,
        }
      );

      return addAccount;
    } catch (e) {
      return e;
    }
  };

  static addTransaction = async (
    transactionName,
    transactionAccountName,
    transactionAmount,
    transactionDescription
  ) => {
    try {
      const addTransaction = await axios.post(
        `${baseLocalTesting}/api/v1/finances`,
        {
          finance_account_type_id: 1,
          description: transactionDescription,
          debit_amount: transactionAmount,
          credit_amount: transactionAmount,
          title: transactionName,
          finance_account_name: transactionAccountName,
        }
      );

      return addTransaction;
    } catch (e) {
      return e;
    }
  };

  static updateAccount = async (
    accountName,
    accountType,
    accountDescription,
    accountID
  ) => {
    try {
      const updateAccount = await axios.patch(
        `${baseLocalTesting}/api/v1/account/${accountID}`,
        {
          name: accountName,
          type: accountType,
          description: accountDescription,
        }
      );

      return updateAccount;
    } catch (e) {
      return e;
    }
  };

  static updateTransaction = async (
    transactionName,
    transactionAccountName,
    transactionAmount,
    transactionDescription,
    accountId
  ) => {
    try {
      const updateTransaction = await axios.patch(
        `${baseLocalTesting}/api/v1/finances/${accountId}`,
        {
          finance_account_type_id: 1,
          description: transactionDescription,
          debit_amount: transactionAmount,
          credit_amount: transactionAmount,
          title: transactionName,
          finance_account_name: transactionAccountName,
        }
      );

      return updateTransaction;
    } catch (e) {
      return e;
    }
  };

  static deleteAccount = async (accountID) => {
    try {
      const deleteAccount = await axios.delete(
        `${baseLocalTesting}/api/v1/account/${accountID}`
      );

      return deleteAccount;
    } catch (e) {
      return e;
    }
  };

  static deleteTransaction = async (accountId) => {
    try {
      const deleteAccount = await axios.delete(
        `${baseLocalTesting}/api/v1/finances/${accountId}`
      );

      return deleteAccount;
    } catch (e) {
      return e;
    }
  };
}

export default API;
