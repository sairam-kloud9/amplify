import { useState } from "react";

const PackersMoversModal = (props) => {
  const { clickedService, setModalOption } = props;
  const [itemCheckedValue, SetItemCheckedValue] = useState("");
  const [movingItemsCheck, SetMovingItemsCheck] = useState("");

  const detailCheckHandler = (e) => {
    SetMovingItemsCheck("checked");
    SetItemCheckedValue(e.target.value);
    console.log(itemCheckedValue);
    console.log(movingItemsCheck);
  };

  return (
    <div
      className="modal centered_Modal selection_modal"
      id={`packer${clickedService.id}`}
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
              <form className="selecton_form loan_form">
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">Select City</label>
                    <select className="form-control">
                      <option>Location</option>
                      <option value="Adilabad">Adilabad</option>
                      <option value="BhadradriKothagudem">
                        Bhadradri Kothagudem
                      </option>
                      <option value="Hanamkonda">Hanamkonda</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Jagitial">Jagitial</option>
                      <option value="Jangaon">Jangaon</option>
                      <option value="JayashankarBhupalpally">
                        Jayashankar Bhupalpally
                      </option>
                      <option value="Gadwal">Gadwal</option>
                      <option value="Kamareddy">Kamareddy</option>
                      <option value="Karimnagar">Karimnagar</option>
                      <option value="Khammam">Khammam</option>
                      <option value="Kumuram Bheem">Kumuram Bheem</option>
                      <option value="Mahabubabad">Mahabubabad</option>
                      <option value="Mahabubnagar">Mahabubnagar</option>
                      <option value="Mancherial">Mancherial</option>
                      <option value="Medak">Medak</option>
                      <option value="Medchal">Medchal</option>
                      <option value="Mulugu">Mulugu</option>
                      <option value="Nagarkurnool">Nagarkurnool</option>
                      <option value="Narayanpet">Narayanpet</option>
                      <option value="Nalgonda">Nalgonda</option>
                      <option value="Nirmal">Nirmal</option>
                      <option value="Nizamabad">Nizamabad</option>
                      <option value="Peddapalli">Peddapalli</option>

                      <option value="Sircilla">Rajanna Sircilla</option>
                      <option value="RangaReddy">Ranga Reddy</option>
                      <option value="Sangareddy">Sangareddy</option>
                      <option value="Siddipet">Siddipet</option>
                      <option value="Suryapet">Suryapet</option>
                      <option value="Vikarabad">Vikarabad</option>
                      <option value="Wanaparthy">Wanaparthy</option>
                      <option value="Warangal">Warangal</option>
                      <option value="Yadadri">Yadadri Bhuvanagiri</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label label-md">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label label-md">Moving From</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Moving From"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label className="form-label label-md">Moving To</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Moving To"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label label-md">Shifting Date</label>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Shifting Date"
                    />
                  </div>
                </div>
                <div className="row moving_items" id="moving_items">
                  <div className="form-group">
                    <label className="form-label label-md">Details</label>
                    <div class="form-group">
                      <div class="form-check">
                        <label class="select_container">
                          1RK
                          <input
                            type="radio"
                            name="mov_details"
                            value="1rk"
                            onChange={detailCheckHandler}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>

                      <div
                        class={`shifting_items_info ${
                          itemCheckedValue === "1rk" ? "" : "d-none"
                        }`}
                      >
                        <h6>10 Items Approx</h6>
                        <ul>
                          <li>1 Cot with Matress</li>
                          <li>2 Chairs</li>
                          <li>1 Fridge</li>
                          <li>1 Washing Machine</li>
                          <li>1 Gas Stove</li>
                          <li>1 Cylinder</li>
                          <li>1 Water Purifier</li>
                          <li>1 TV</li>
                        </ul>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <label class="select_container">
                          1BHK
                          <input
                            type="radio"
                            name="mov_details"
                            value="1bhk"
                            onChange={detailCheckHandler}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div
                        class={`shifting_items_info ${
                          itemCheckedValue === "1bhk" ? "" : "d-none"
                        }`}
                      >
                        <h6>16 Items Approx</h6>
                        <ul>
                          <li>2 Cot with Matress</li>
                          <li>2 Almaraih</li>
                          <li>4 Chairs</li>
                          <li>1 Fridge</li>
                          <li>1 Washing Machine</li>
                          <li>1 Gas Stove</li>
                          <li>1 Cylinder</li>
                          <li>1 Water Purifier</li>
                          <li>1 TV</li>
                          <li>1 Tv Stand/Study table</li>
                        </ul>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <label class="select_container">
                          2BHK
                          <input
                            type="radio"
                            name="mov_details"
                            value="2bhk"
                            onChange={detailCheckHandler}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div
                        class={`shifting_items_info ${
                          itemCheckedValue === "2bhk" ? "" : "d-none"
                        }`}
                      >
                        <h6>25 Items Approx</h6>
                        <ul>
                          <li>2 Cot with Matress</li>
                          <li>1 Almaraih</li>
                          <li>4 Chairs</li>
                          <li>1 Sofa</li>
                          <li>1 Center Table</li>
                          <li>1 Dining Table(4 Seater)</li>
                          <li>1 Shoe Rack</li>
                          <li>1 Fridge</li>
                          <li>1 Washing Machine</li>
                          <li>1 Gas Stove</li>
                          <li>2 Cylinders</li>
                          <li>1 Water Purifier</li>
                          <li>1 TV</li>
                          <li>1 Tv Stand/Study table</li>
                        </ul>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <label class="select_container">
                          3BHK
                          <input
                            type="radio"
                            name="mov_details"
                            value="3bhk"
                            onChange={detailCheckHandler}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div
                        class={`shifting_items_info ${
                          itemCheckedValue === "3bhk" ? "" : "d-none"
                        }`}
                      >
                        <h6>25 Items Approx</h6>
                        <ul>
                          <li>2 Cot with Matress</li>
                          <li>1 Almaraih</li>
                          <li>4 Chairs</li>
                          <li>1 Sofa</li>
                          <li>1 Center Table</li>
                          <li>1 Dining Table(4 Seater)</li>
                          <li>1 Shoe Rack</li>
                          <li>1 Fridge</li>
                          <li>1 Washing Machine</li>
                          <li>1 Gas Stove</li>
                          <li>2 Cylinders</li>
                          <li>1 Water Purifier</li>
                          <li>1 TV</li>
                          <li>1 Tv Stand/Study table</li>
                        </ul>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <label class="select_container">
                          4BHK
                          <input
                            type="radio"
                            name="mov_details"
                            value="4bhk"
                            onChange={detailCheckHandler}
                          />
                          <span class="checkmark"></span>
                        </label>
                      </div>
                      <div
                        class={`shifting_items_info ${
                          itemCheckedValue === "4bhk" ? "" : "d-none"
                        }`}
                      >
                        <h6>25 Items Approx</h6>
                        <ul>
                          <li>2 Cot with Matress</li>
                          <li>1 Almaraih</li>
                          <li>4 Chairs</li>
                          <li>1 Sofa</li>
                          <li>1 Center Table</li>
                          <li>1 Dining Table(4 Seater)</li>
                          <li>1 Shoe Rack</li>
                          <li>1 Fridge</li>
                          <li>1 Washing Machine</li>
                          <li>1 Gas Stove</li>
                          <li>2 Cylinders</li>
                          <li>1 Water Purifier</li>
                          <li>1 TV</li>
                          <li>1 Tv Stand/Study table</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group__btn">
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

export default PackersMoversModal;
