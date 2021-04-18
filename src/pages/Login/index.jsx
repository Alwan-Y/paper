import paperLogo from '../../assets/images/index/paperlogo.png';
import iconTutorial from '../../assets/images/index/Tutorial.svg';

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
              <h1 className="login__heading">
                Masuk ke Paper.id <img src={iconTutorial} alt="icon tutorial" />
              </h1>
              <div className="login__border"></div>
              <h6 className="login__text mt-4">
                Masuk dengan akun yang terdaftar di <br /> Paper.id/PayPer
              </h6>
              <form className="mt-5">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control login__email mt-5"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <hr />
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control login__password mt-5"
                    id="password"
                    placeholder="Kata Sandi"
                  />
                </div>
                <hr />
                <h6 className="login__forgotPassword mt-5">Lupa kata sandi?</h6>
                <button
                  type="button"
                  className="btn btn-success btn-lg btn-block rounded-pill mt-5"
                >
                  Masuk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
