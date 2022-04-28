import ElectricianDetailModal from "./ElectricianDetailModal";

const ElectricianServiceModal = () => {
  return (
    <div
      className="modal centered_Modal selection_modal pest_control_modal"
      id="electricianServiceModal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            Electrician Services
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
                <li>
                  <h4>Expert Technicians</h4>
                  <p>Background checked and trained technicians</p>
                </li>
                <li>
                  <h4>Service Guarantee</h4>
                  <p>Customer Protection of upto Rs. 10000 against damages</p>
                  <p>30-day service guarantee</p>
                </li>
              </ul>
              <div class="form-group-btn">
                <button
                  type="button"
                  class="btn btn-black w-100"
                  data-toggle="modal"
                  data-target="#electriciandetailedModal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ElectricianDetailModal />
    </div>
  );
};

export default ElectricianServiceModal;
