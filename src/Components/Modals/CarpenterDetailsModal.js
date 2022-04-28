const CarpenterDetailsModal = () => {
  return (
    <div
      className="modal centered_Modal detailedModal selection_modal detailed_modal"
      id="carpenterdetailedModal"
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
                            <a className="nav-link" href="#balcony">
                              Balcony
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#bed">
                              Bed
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#door">
                              Door
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#tv">
                              TV
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
                            <img src="images/wall-decor.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Drill & hang (Wall decor)</h5>
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
                            <li>Installation of one wall decor item</li>
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
                      <div id="balcony" className="single_service_tab_scroll">
                        <h2>Balcony</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/ceiling-service.avif" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Ceiling-mounted hanger installation</h5>
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
                            <li>Installation of one clothes' hanger</li>
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
                      <div id="bed" className="single_service_tab_scroll">
                        <h2>Bed</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/bed-repair.avif" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Bed support repair</h5>
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
                              Repair of bed mattress support (any kind of bed)
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
                      <div id="door" className="single_service_tab_scroll">
                        <h2>Door</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/door-repair.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Accessory installation (any one)</h5>
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
                              Installation or replacement of one latch/ chain/
                              stopper/ magnet
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
                      <div id="tv" className="single_service_tab_scroll">
                        <h2>TV</h2>
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
                            <li>Installation of one TV set</li>
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

export default CarpenterDetailsModal;
