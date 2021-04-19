import Button from 'components/commons/Button';

const ItemAccount = ({ accountName, description, accountType }) => {
  return (
    <div className="row text-left ml-5 mt-2 finance__item">
      <div className="col finance__choicePage mt-3">{accountName}</div>
      <div className="col finance__choicePage mt-3">{description}</div>
      <div className="col finance__choicePage mt-3">{accountType}</div>
      <div className="col finance__choicePage mt-2">
        <div className="btn-group">
          <Button
            className=" dropdown-toggle"
            type="success"
            dataToggle="dropdown"
            ariaHaspopup="true"
            ariaExpended="false"
          >
            Action
          </Button>
          <div className="dropdown-menu">
            <p className="dropdown-item" href="#">
              View
            </p>
            <p className="dropdown-item" href="#">
              Edit
            </p>
            <p className="dropdown-item" href="#">
              Delete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemAccount;
