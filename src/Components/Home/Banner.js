const Banner = () => {
  return (
    <section className="banner_section">
      <div className="banner_content">
        <div className="banner_breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.php">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Location
              </li>
            </ol>
          </nav>
        </div>
        <div className="banner_info">
          <h1>
            Your Online Service Partner
            <br /> On Demand.
          </h1>
          <div className="banner_inputs">
            <form className="banner_form">
              <div className="form-group location_input">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img src="../images/location_icon.png" alt="img" />
                    </span>
                  </div>
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
              </div>
              <div className="form-group service_input">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img src="images/search_icon.png" alt="img" />
                    </span>
                  </div>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search for services"
                  />
                </div>
                <ul className="recent_searches">
                  <li>
                    <a href="#">Rentals</a>
                  </li>
                  <li>
                    <a href="#">Packers & Movers</a>
                  </li>
                  <li>
                    <a href="#">Promotion Services</a>
                  </li>
                  <li>etc</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
