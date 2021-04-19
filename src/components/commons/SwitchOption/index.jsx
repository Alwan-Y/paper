const SwitchOption = ({ truee, falsee }) => {
  if (truee) {
    return (
      <div className="row finance__margin">
        <div className="col-2">
          <h6 className="finance__choicePage">Account</h6>
          <div className="finance__border"></div>
        </div>
        <div className="col-2">
          <h6 className="finance__choicePage">Transaction</h6>
        </div>
      </div>
    );
  }
  return (
    <div className="row finance__margin">
      <div className="col-2">
        <h6 className="finance__choicePage">Account</h6>
      </div>
      <div className="col-2">
        <h6 className="finance__choicePage">Transaction</h6>
        <div className="finance__border"></div>
      </div>
    </div>
  );
};

export default SwitchOption;
