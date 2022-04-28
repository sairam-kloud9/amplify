import CarpenterDetailsModal from "./CarpenterDetailsModal";

const CarpenterServiceModal = () => {
  return (
    <div
      className="modal centered_Modal selection_modal pest_control_modal"
      id="carpenterServiceModal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            Carpenter Services
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
              <h3>About the service</h3>
              <ul className="carpenter_list">
                <li>Doorstep repair within 90 mins</li>
                <li>Protection Against Damage Upto INR 10,000</li>
                <li>30 day post-service guarantee</li>
              </ul>
              <div class="form-group-btn">
                <button
                  type="button"
                  class="btn btn-black w-100"
                  data-toggle="modal"
                  data-target="#carpenterdetailedModal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarpenterDetailsModal />
    </div>
  );
};

export default CarpenterServiceModal;
