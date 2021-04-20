import Button from 'components/commons/Button';
import view from 'assets/images/index/eye.png';
import edit from 'assets/images/index/draw.png';
import trash from 'assets/images/index/trash.png';
import ModalCreateAccount from 'components/commons/ModalCreateAccount'
import ModalDelete from 'components/commons/ModelDelete'

const ItemAccount = ({
  accountName,
  description,
  accountType,
  dataTargetView,
  dataTargetEdit,
  dataTargetDelete,
  viewAccountName,
  viewAccountType,
  viewAccountDescription,
  idx
}) => {
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
      <ModalCreateAccount target="editAccount" heading="Edit Account" />
      <ModalCreateAccount
              target={"viewAccount"}
              heading="View Account"
              readOnly="readOnly"
              valueAccountName={viewAccountName}
              valueTypeAccount={viewAccountType}
              valueDescription={viewAccountDescription}
            />
      <ModalDelete target="deleteAccount" heading="Delete Account" />
    </div>
  );
};

export default ItemAccount;
