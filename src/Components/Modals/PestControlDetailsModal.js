const PestControlDetailsModal = () => {
  return (
    <div
      className="modal centered_Modal detailedModal selection_modal detailed_modal"
      id="detailed_modal"
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
                      <nav className="sservice_tabs_ul" id="service_scrollspy">
                        <ul className="nav">
                          <li className="nav-item">
                            <a className="nav-link active" href="#section1">
                              Home Pest Control
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#section2">
                              Offices & Shops Pest Control
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="service_tab_scroll">
                      <div id="section1" className="single_service_tab_scroll">
                        <h2>Home pest Control</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/apartment.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Apartment</h5>
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
                              <b>Apartment</b> - 1 BHK-Cockroaches & Ants
                              Control
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

                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/apartment.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Bunglow</h5>
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
                              <b>Bunglow</b> - 2000-3000 sq.ft-Cockroaches &
                              Ants Control
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
                      <div id="section2" className="single_service_tab_scroll">
                        <h2>Offices & Shops Pest Control</h2>
                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/apartment.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Apartment</h5>
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
                              <b>Offices</b> - Less than 3000 sq. ft.
                              -Cockroaches & Ants Control
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

                        <div className="one_service_div">
                          <div className="one_service_img">
                            <img src="images/apartment.jpg" alt="img" />
                          </div>
                          <div className="one_service_info">
                            <div className="d-flex align-items-center service_flex">
                              <div className="one_service_det">
                                <h5>Retail Shops</h5>
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
                              <b>Retail Shops</b> - Less than 3000 sq. ft.
                              -Cockroaches & Ants Control
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

export default PestControlDetailsModal;
