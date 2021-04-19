import axios from 'axios';

const baseURL = 'https://development.paper.id:3500/test-case';

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
}

export default API;
