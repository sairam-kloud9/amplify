const ElectricianDetailModal = () => {
  return (
    <div
      className="modal centered_Modal detailedModal selection_modal detailed_modal"
      id="electriciandetailedModal"
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

          <div
            className="modal-body"
            data-spy="scroll"
            data-target="#myScrollspy"
            data-offset="1"
          >
            <div className="service_details_s">
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="single_service_tabs">
                      <nav className="sservice_tabs_ul" id="service_scrollspy">
                        <ul className="nav">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#frequentlybooked"
                            >
                              Frequently Booked
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#Switch">
                              Switch & socket
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#Fan">
                              Fan
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#Light">
                              Light
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#Appliance">
                              Appliance
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="service_tab_scroll">
                      <div
                        id="frequentlybooked"
                        className="single_service_tab_scroll"
                      >
                        <h2>Frequently Booked</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img
                              src="images/switch-replacement.avif"
                              alt="img"
                            />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Switch Replacement</h5>
                              </div>
                              <div className="one_service_btn">
                                <button
                                  type="button"
                                  className="btn btn-black btn-sm"
                                >
                                  request A quote
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul className="one_service_listing">
                            <li>Replacement of single switch</li>
                            <li>Spare parts' cost not included</li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="view_details_btn"
                              >
                                View Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="Switch" className="single_service_tab_scroll">
                        <h2>Switch & socket</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/ceiling-service.avif" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>AC switchbox installation</h5>
                              </div>
                              <div className="one_service_btn">
                                <button
                                  type="button"
                                  className="btn btn-black btn-sm"
                                >
                                  request A quote
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul className="one_service_listing">
                            <li>Installation of one AC switchbox</li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="view_details_btn"
                              >
                                View Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="Fan" className="single_service_tab_scroll">
                        <h2>Fan</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/bed-repair.avif" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Ceiling fan regulator replacement</h5>
                              </div>
                              <div className="one_service_btn">
                                <button
                                  type="button"
                                  className="btn btn-black btn-sm"
                                >
                                  request A quote
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul className="one_service_listing">
                            <li>Replacement of one ceiling fan regulator</li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="view_details_btn"
                              >
                                View Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="Light" className="single_service_tab_scroll">
                        <h2>Light</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/door-repair.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Bulbs installation (upto 5 bulbs)</h5>
                              </div>
                              <div className="one_service_btn">
                                <button
                                  type="button"
                                  className="btn btn-black btn-sm"
                                >
                                  request A quote
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul className="one_service_listing">
                            <li>Installation of up to five bulbs</li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="view_details_btn"
                              >
                                View Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="Appliance" className="single_service_tab_scroll">
                        <h2>Appliance</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/tv-repair.avif" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>TV installation (up to 48 inches)</h5>
                              </div>
                              <div className="one_service_btn">
                                <button
                                  type="button"
                                  className="btn btn-black btn-sm"
                                >
                                  request A quote
                                </button>
                              </div>
                            </div>
                          </div>
                          <ul className="one_service_listing">
                            <li>
                              Installation or uninstallation of one TV set
                            </li>
                            <li>
                              <a
                                href="javascript:void(0)"
                                className="view_details_btn"
                              >
                                View Details
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="one_service_full_info">
                      <div className="os_img">
                        <img src="images/apartment.jpg" alt="img" />
                      </div>
                      <div className="one_serv_full_details">
                        <p>
                          Lorem ipsum dolor sit amet. Aut sint deserunt ad
                          praesentium omnis et nihil excepturi? Id eligendi
                          cumque ut deserunt beatae sit earum quam ut rerum
                          repudiandae et porro.
                        </p>
                        <div className="included_serv">
                          <h4>Included</h4>
                          <ul>
                            <li className="single_included_serv">
                              <h6>Detailed Inspection</h6>
                              <p>
                                Professionals identity all kinds of pests in
                                hidden and tricky areas
                              </p>
                            </li>
                            <li className="single_included_serv">
                              <h6>First Visit</h6>
                              <p>Spray treatment to target adult pests</p>
                            </li>
                            <li className="single_included_serv">
                              <h6>Second Visit</h6>
                              <p>
                                Get treatment after two weeks to target nymphs
                                and newly-hatched eggs
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricianDetailModal;
