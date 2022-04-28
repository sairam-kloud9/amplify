import PaintingDetailedModal from "./PaintingDetailedModal";

const PaintingServiceModal = () => {
  return (
    <div
      className="modal centered_Modal selection_modal pest_control_modal"
      id="paintingServiceModal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            Home Painting Services
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
                <li>On-Time & Mess-Free Experience</li>
                <li>Top Quality Paints & Transparent Costs</li>
                <li>1 Year Service Guarantee</li>
              </ul>
              <div class="form-group-btn">
                <button
                  type="button"
                  class="btn btn-black w-100"
                  data-toggle="modal"
                  data-target="#paintingdetailedModal"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaintingDetailedModal />
    </div>
  );
};

export default PaintingServiceModal;
