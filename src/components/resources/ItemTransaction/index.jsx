import Button from 'components/commons/Button';

const ItemTransaction = ({
  transactionDate,
  financeAccount,
  financeAccountName,
  refrence,
  amount,
  dataToggleEdit,
  dataTargetEdit
}) => {
  return (
    <div className="row text-left ml-5 mt-2 finance__item">
      <div className="col finance__choicePage mt-3">{transactionDate}</div>
      <div className="col finance__choicePage mt-3">{financeAccount}</div>
      <div className="col finance__choicePage mt-3">{financeAccountName}</div>
      <div className="col finance__choicePage mt-3">{refrence}</div>
      <div className="col finance__choicePage mt-3">{amount}</div>
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
            <Button className="dropdown-item">
              View
            </Button>
            <Button className="dropdown-item" dataToggle={dataToggleEdit} dataTarget={dataTargetEdit}>
              Edit
            </Button>
            <Button className="dropdown-item" >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTransaction;
