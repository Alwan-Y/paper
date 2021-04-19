import paperLogo from '../../assets/images/index/paperlogo.png';
import iconTutorial from '../../assets/images/index/Tutorial.svg';
import Button from '../../components/commons/Button';
import Input from '../../components/commons/Input';
import Heading6 from '../../components/commons/Heading6';
import Heading1 from '../../components/commons/Heading1';

const Login = () => {
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
              <form className="mt-5">
                <Input
                  type="email"
                  className="form-control login__email mt-5"
                  id="email"
                  placeholder="Email"
                />
                <hr />
                <Input
                  type="password"
                  className="form-control login__password mt-5"
                  id="password"
                  placeholder="Kata Sandi"
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
                >
                  Masuk
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
