import React, { useState } from "react";
import Slider from "@mui/material/Slider";

const AssetValidationModal = (props) => {
  const { clickedService, setModalOption } = props;

  const [value, setValue] = useState([25, 100]);
  const [area, setArea] = useState([0, 4000]);

  function valuetext(value) {
    return `${value}L`;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function areavaluetext(value) {
    return `${area}L`;
  }

  const handleChangeArea = (event, newValue) => {
    setArea(newValue);
  };

  return (
    <div
      className={`modal centered_Modal selection_modal ${
        setModalOption === true ? "show" : ""
      }`}
      id={`asset${clickedService.id}`}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div class="modal-header">
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
                  className={`form-group property_type ${
                    clickedService.serviceName === "open Plots" ||
                    clickedService.serviceName === "Flats And Apartments"
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
                  className={`form-group property_type ${
                    clickedService.serviceName === "open Plots" ||
                    clickedService.serviceName === "Farm Lands"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Select Below</label>
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
                    clickedService.serviceName === "Flats And Apartments" ||
                    clickedService.serviceName === "Individual homes"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Price Range (in Lakhs)</label>
                  <div className="price_slide">
                    <input
                      type="text"
                      value={value[0]}
                      className="price_min"
                      disabled
                    />
                    <Slider
                      getAriaLabel={() => "Price Range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      min={25}
                      max={100}
                    />
                    <input
                      type="text"
                      value={value[1]}
                      className="price_max"
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group">
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
                    clickedService.serviceName == "open Plots" ||
                    clickedService.serviceName == "Farm Lands"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Price Range</label>
                  <label className="check_container">
                    ₹25L - ₹50L
                    <input type="checkbox" checked="checked" name="1cr-10cr" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    ₹50L - ₹1CR
                    <input type="checkbox" name="1cr-10cr" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    ₹1CR - ₹2CR
                    <input type="checkbox" name="1cr-10cr" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    ₹2CR - ₹4CR
                    <input type="checkbox" name="2cr-4cr" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="check_container">
                    ₹4CR - ₹6CR
                    <input type="checkbox" name="4cr-6cr" />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div
                  className={`form-group ${
                    clickedService.serviceName === "Flats And Apartments" ||
                    clickedService.serviceName === "Individual homes"
                      ? "d-none"
                      : ""
                  }`}
                >
                  <label className="form_label">Area (in SQ.ft)</label>
                  <div className="price_slide">
                    <input
                      type="text"
                      value={area[0]}
                      className="price_min"
                      disabled
                    />
                    <Slider
                      getAriaLabel={() => "Area"}
                      value={area}
                      onChange={handleChangeArea}
                      valueLabelDisplay="auto"
                      getAriaValueText={areavaluetext}
                      min={0}
                      max={4000}
                    />
                    <input
                      type="text"
                      value={area[1]}
                      className="price_max"
                      disabled
                    />
                  </div>
                </div>

                <div className="form-group">
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

export default AssetValidationModal;
