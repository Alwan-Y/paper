import Button from 'components/commons/Button';
import view from 'assets/images/index/eye.png';
import edit from 'assets/images/index/draw.png';
import trash from 'assets/images/index/trash.png';

const ItemTransaction = ({
  transactionDate,
  financeAccount,
  financeAccountName,
  refrence,
  amount,
  dataTargetView,
  dataTargetEdit,
  dataTargetDelete,
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
            <Button
              className="dropdown-item"
              dataToggle="modal"
              dataTarget={dataTargetView}
            >
              <img src={view} alt="view" /> View
            </Button>
            <Button
              className="dropdown-item"
              dataToggle="modal"
              dataTarget={dataTargetEdit}
            >
              <img src={edit} alt="edit" /> Edit
            </Button>
            <Button
              className="dropdown-item"
              dataToggle="modal"
              dataTarget={dataTargetDelete}
            >
              <img src={trash} alt="trash" /> Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemTransaction;
