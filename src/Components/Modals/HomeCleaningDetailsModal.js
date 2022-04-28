const HomeCleaningDetailsModal = () => {
  return (
    <div
      className="modal centered_Modal detailedModal selection_modal detailed_modal"
      id="cleaningdetailedModal"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            Pest Control
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
                      <nav
                        className="sservice_tabs_ul"
                        id="cleaning_service_scrollspy"
                      >
                        <ul className="nav">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#bathroom_cleaning"
                            >
                              Bathroom Cleaning
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#kitchen_cleaning">
                              Kitchen Cleaning
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#mini_services">
                              Mini Services
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="service_tab_scroll">
                      <div
                        id="bathroom_cleaning"
                        className="single_service_tab_scroll"
                      >
                        <h2>Bathroom Cleaning</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/bathroom-cleaning.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Classic Bathroom Cleaning</h5>
                                <p className="service_duration">
                                  <span>
                                    <img src="images/duration.png" alt="img" />
                                  </span>
                                  60 mins
                                </p>
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
                              Paint, rust & dirt strain removal. Rigorous
                              cleaning done. Ideal for relocating
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
                      <div
                        id="kitchen_cleaning"
                        className="single_service_tab_scroll"
                      >
                        <h2>Kitchen Cleaning</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/kitchen-cleaninf.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Move-in Kitchen Cleaning</h5>
                                <p className="service_duration">
                                  <span>
                                    <img src="images/duration.png" alt="img" />
                                  </span>
                                  180 mins
                                </p>
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
                            <li>Empty Kitchen Cleaning</li>
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
                      <div
                        id="mini_services"
                        className="single_service_tab_scroll"
                      >
                        <h2>Mini Services</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/kitchen-cleaninf.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>mirror-cleaning.jpg</h5>
                                <p className="service_duration">
                                  <span>
                                    <img src="images/duration.png" alt="img" />
                                  </span>
                                  30 mins
                                </p>
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
                              Removal of soap, oil dirt & hard water stains
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

export default HomeCleaningDetailsModal;
