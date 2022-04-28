import { useState } from "react";
import Slider from "@mui/material/Slider";

const RentalServicesModal = (props) => {
  const { clickedService, setModalOption } = props;
  const [area, setArea] = useState([25000, 300000]);

  function areavaluetext(value) {
    return `${area}L`;
  }

  const handleChangeArea = (event, newValue) => {
    setArea(newValue);
  };

  return (
    <div
      className="modal centered_Modal selection_modal"
      id={`rental${clickedService.id}`}
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
              <form className="selecton_form property_selection_form">
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Property Type</label>
                  <label className="check_container">
                    Apartment
                    <input
                      type="checkbox"
                      checked="checked"
                      id="apartment"
                      value="AP"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    Independent Houses/Villa
                    <input type="checkbox" id="ih" value="IH" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    Gated Community Villa
                    <input type="checkbox" id="gc" value="GC" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    Standalone Building
                    <input type="checkbox" name="standalone" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Apartment Type</label>
                  <label className="check_container">
                    1 RK
                    <input type="checkbox" checked="checked" name="1rk" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    1 BHK
                    <input type="checkbox" name="1bhk" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    2 BHK
                    <input type="checkbox" name="2bhk" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    3 BHK
                    <input type="checkbox" name="3bhl" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    4 BHK
                    <input type="checkbox" name="4bhk" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    5 BHK
                    <input type="checkbox" name="5bhk" />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? ""
                      : "d-none"
                  }`}
                >
                  <label class="form_label">Property Type</label>
                  <label class="check_container">
                    Office Space
                    <input
                      type="checkbox"
                      checked="checked"
                      id="apartment"
                      value="AP"
                    />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Co-Working
                    <input type="checkbox" id="ih" value="IH" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Shop
                    <input type="checkbox" id="gc" value="GC" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Showroom
                    <input type="checkbox" name="standalone" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Godown/Warehouse
                    <input type="checkbox" id="gc" value="GC" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Industrial shed
                    <input type="checkbox" name="standalone" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Industrial Building
                    <input type="checkbox" name="standalone" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Other Business
                    <input type="checkbox" name="standalone" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label class="form_label">Price Range</label>
                  <label class="check_container">
                    ₹1 cr - ₹2 cr
                    <input type="checkbox" checked="checked" name="1cr-10cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹2 cr - ₹4 cr
                    <input type="checkbox" name="2cr-4cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹4 cr - ₹6 cr
                    <input type="checkbox" name="4cr-6cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹6 cr - ₹8 cr
                    <input type="checkbox" name="6cr-8cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹8 cr - ₹10 cr
                    <input type="checkbox" name="8cr-10cr" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? ""
                      : "d-none"
                  }`}
                >
                  <label class="form_label">Rent Range</label>
                  <label class="check_container">
                    ₹5000 - ₹10000
                    <input type="checkbox" checked="checked" name="1cr-10cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹10000 - ₹20000
                    <input type="checkbox" name="2cr-4cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹20000 - ₹50000
                    <input type="checkbox" name="4cr-6cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹50000 - ₹75000
                    <input type="checkbox" name="6cr-8cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹75000 - ₹100000
                    <input type="checkbox" name="8cr-10cr" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    ₹100000+
                    <input type="checkbox" name="8cr-10cr" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? ""
                      : "d-none"
                  }`}
                >
                  <label class="form_label">Built Up Area(sq. ft.)</label>
                  <div className="price_slide">
                    <input
                      type="text"
                      value={area[0]}
                      className="price_min"
                      disabled
                    />
                    <Slider
                      getAriaLabel={() => "Price Range"}
                      value={area}
                      onChange={handleChangeArea}
                      valueLabelDisplay="auto"
                      getAriaValueText={areavaluetext}
                      min={10000}
                      max={400000}
                    />
                    <input
                      type="text"
                      value={area[1]}
                      className="price_max"
                      disabled
                    />
                  </div>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Property Status</label>
                  <label className="check_container">
                    Under Construction
                    <input type="checkbox" checked="checked" name="1rk" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    Ready
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>

                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Other Services</label>
                  <label className="check_container">
                    Permissions Verification
                    <input type="checkbox" checked="checked" name="1rk" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    Registration Paper Work
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    Property Title Verification
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? ""
                      : "d-none"
                  }`}
                >
                  <label class="form_label">Parking</label>
                  <label class="check_container">
                    Public
                    <input type="checkbox" checked="checked" name="1rk" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Reserved
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "commercial properties"
                      ? ""
                      : "d-none"
                  }`}
                >
                  <label class="form_label">Furnishing</label>
                  <label class="check_container">
                    Full
                    <input type="checkbox" checked="checked" name="1rk" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    Semi
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="check_container">
                    None
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div className="gorm-group__btn">
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

export default RentalServicesModal;
