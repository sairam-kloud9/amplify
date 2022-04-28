const LoanServicesModal = (props) => {
  const { clickedService, setModalOption } = props;
  return (
    <div
      className="modal centered_Modal selection_modal"
      id={`loanModal${clickedService.id}`}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {clickedService.serviceName}
            <button
              type="button"
              className="close modal_close_btn"
              data-dismiss="modal"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="modal-body">
            <div className="please_select">
              <form className="selecton_form loan_form">
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">
                      Full Name(As Per PAN card)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label label-md">Gender</label>
                    <div className="gender_flex">
                      <div className="form-check">
                        <label className="select_container">
                          Male
                          <input type="radio" name="gender" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="form-check">
                        <label className="select_container">
                          Female
                          <input type="radio" name="gender" />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">Date Of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Date Of Birth"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label label-md">
                      Employment Type
                    </label>
                    <select className="form-control">
                      <option>Salaried</option>
                      <option>Self Employed</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">
                      Current Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Current Company Name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label label-md">
                      Monthly Income
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Monthly Income"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">
                      Current Residence Pincode
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pincode"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label label-md">Mobile No.</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Mobile No."
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="form-group__btn">
                  <button type="submit" className="btn btn-black btn-md">
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanServicesModal;
