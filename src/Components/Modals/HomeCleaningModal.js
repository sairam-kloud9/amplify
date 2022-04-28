import HomeCleaningDetailsModal from "./HomeCleaningDetailsModal";

const HomeCleaningModal = () => {
  return (
    <div
      className="modal centered_Modal selection_modal pest_control_modal"
      id="homeCleaningModal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            Home Cleaning
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
              <h3>Please Select</h3>
              <form className="selecton_form">
                <div className="form-group">
                  <div className="form-check">
                    <label className="select_container">
                      Bathroom & Kitchen Cleaning
                      <input
                        type="radio"
                        checked="checked"
                        name="pest_controls"
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <label className="select_container">
                      Full Home Cleaning
                      <input type="radio" name="pest_controls" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <label className="select_container">
                      Kitchen Cleaning
                      <input type="radio" name="pest_controls" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <label className="select_container">
                      Sofa & Carpet Cleaning
                      <input type="radio" name="pest_controls" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="form-group-btn">
                  <button
                    type="button"
                    className="btn btn-black w-100"
                    data-toggle="modal"
                    data-target="#cleaningdetailedModal"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <HomeCleaningDetailsModal />
    </div>
  );
};

export default HomeCleaningModal;
