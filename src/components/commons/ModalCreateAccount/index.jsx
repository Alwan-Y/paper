import Input from 'components/commons/Input';
import Button from 'components/commons/Button';
import Heading1 from 'components/commons/Heading1';

const ModalCreateAccount = ({
  heading,
  target,
  onClick,
  onChangeAccountName,
  onChangeTypeAccount,
  onChangeDescription,
  valueAccountName,
  valueTypeAccount,
  valueDescription,
  readOnly,
}) => {
  return (
    <div
      className="modal fade"
      id={target}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content finance__backgroundModal jumbotron3 jumbotron3-fluid login login--background">
          <div className="modal-body">
            <Button className="close" dataDismiss="modal" ariaLable="Close">
              <span aria-hidden="true">&times;</span>
            </Button>
            <div className="row text-left ml-5 mt-4">
              <Button className="finance__buttonCustom" size="sm">
                finance
              </Button>
            </div>
            <div className="row mt-3">
              <div className="col text-left">
                <Heading1 className="finance__heading2 ml-5">
                  {heading}
                </Heading1>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-10 text-left ml-5">
                <div>
                  <div class="form-group">
                    <label>Account Name</label>
                    <Input
                      type="text"
                      className="form-control finance__form"
                      id="exampleInputEmail1"
                      placeholder="e.g. breakfast expense"
                      onChange={onChangeAccountName}
                      value={valueAccountName}
                      readOnly={readOnly}
                    />
                  </div>
                  <div class="form-group">
                    <label>Type</label>
                    <Input
                      type="text"
                      className="form-control finance__form"
                      id="exampleInputPassword1"
                      placeholder="e.g. expense"
                      onChange={onChangeTypeAccount}
                      value={valueTypeAccount}
                      readOnly={readOnly}
                    />
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <Input
                      type="text"
                      className="form-control finance__form"
                      id="description"
                      onChange={onChangeDescription}
                      value={valueDescription}
                      readOnly={readOnly}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row finance__marginCustom">
              <div className="col ">
                <Button
                  type="success"
                  size="lg"
                  className="rounded-pill mt-5 finance__buttonCustom4"
                  onClick={onClick}
                >
                  Simpan
                </Button>
              </div>
              <div className="col">
                <Button
                  className="close"
                  dataDismiss="modal"
                  ariaLable="Close"
                  size="lg"
                  block="block"
                  className="rounded-pill mt-5 finance__buttonCustom5"
                >
                  Batal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateAccount;
