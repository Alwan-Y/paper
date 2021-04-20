import Input from 'components/commons/Input';
import Button from 'components/commons/Button';
import Heading1 from 'components/commons/Heading1';
import Heading6 from '../Heading6';

const ModalDelete = ({
  heading,
  target,
  onClick,
  onChangeFinanceName,
  onChangeFinanceAccount,
  onChangeAmount,
  onChangeDescription,
}) => {
  return (
    <div
      className="modal fade"
      id={target}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content finance__backgroundModalDelete jumbotron3 jumbotron3-fluid finance finance--background">
          <div className="modal-body">
            <Button className="close" dataDismiss="modal" >
              <span aria-hidden="true">&times;</span>
            </Button>
            <div className="row mt-3">
              <div className="col text-center mt-3">
                <Heading1 className="finance__heading3 ">{heading}</Heading1>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col text-center">
                <Heading6 className="finance__heading6">Are you sure?</Heading6>
              </div>
            </div>
            <div className="row mt-5"></div>
            <div className="row finance__marginCustom2">
              <div className="col ">
                <Button
                  size="lg"
                  className="rounded-pill mt-5 finance__buttonCustom3"
                  dataDismiss="modal"
                >
                  Cancel
                </Button>
              </div>
              <div className="col">
                <Button
                  onClick={onClick}
                  type="success"
                  size="lg"
                  block="block"
                  className="rounded-pill mt-5 finance__buttonCustom2"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
