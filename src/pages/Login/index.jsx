import paperLogo from 'assets/images/index/paperlogo.png';
import iconTutorial from 'assets/images/index/Tutorial.svg';
import Button from 'components/commons/Button';
import Input from 'components/commons/Input';
import Heading6 from 'components/commons/Heading6';
import Heading1 from 'components/commons/Heading1';
import API from 'services';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ROUTES from 'configs/routes';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const loginUser = await API.login(email, password);
    const { data } = loginUser;

    if (!data) {
      return alert('Ups email / password wrong');
    }

    localStorage.setItem('login', data.last_login);
    localStorage.setItem('username', email);
    localStorage.setItem('name', data.name);
    localStorage.setItem('token', data.token);

    alert('Succes login');

    history.push(ROUTES.DASHBOARD);
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid login login--background">
        <div className="row text-right">
          <div className="col login__logo">
            <img className="login__logo" src={paperLogo} alt="logo paper" />
          </div>
        </div>
        <div className="container mt-5">
          <div className="row text-center">
            <div className="col-6">
              <Heading1 className="login__heading">
                Masuk ke Paper.id <img src={iconTutorial} alt="icon tutorial" />
              </Heading1>
              <div className="login__border"></div>
              <Heading6 className="login__text mt-4">
                Masuk dengan akun yang terdaftar di <br /> Paper.id/PayPer
              </Heading6>
              <div className="mt-5">
                <Input
                  type="text"
                  className="form-control login__form login__email mt-5"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <hr />
                <Input
                  type="password"
                  className="form-control login__form login__password mt-5"
                  id="password"
                  placeholder="Kata Sandi"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <hr />
                <Heading6 className="login__forgotPassword mt-5">
                  Lupa kata sandi?
                </Heading6>
                <Button
                  type="success"
                  size="lg"
                  block="block"
                  className="rounded-pill mt-5"
                  onClick={login}
                >
                  Masuk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
