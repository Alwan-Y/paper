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
}

export default API;
