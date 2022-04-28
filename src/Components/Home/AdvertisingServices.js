import Card from "../../UI/Card";
import Section from "../Section";

const AdvertisingServices = () => {
  return (
    <Section className="home_services">
      <div className="main_heading text-center">
        <h2>Online/Offline Advertising</h2>
      </div>
      <div className="container">
        <Card>
          <div className="row">
            <div className="col-md-3">
              <a className="single_service" href="#">
                <div className="service_icon">
                  <span className="service_ico">
                    <img src="images/campaign.png" alt="img" />
                  </span>
                </div>
                <div className="service_info">
                  <p>Auto Campaigns</p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a className="single_service" href="#">
                <div className="service_icon">
                  <span className="service_ico">
                    <img src="images/distribution.png" alt="img" />
                  </span>
                </div>
                <div className="service_info">
                  <p>Leaflets Distribution</p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a className="single_service" href="#">
                <div className="service_icon">
                  <span className="service_ico">
                    <img src="images/banner-pasting.png" alt="img" />
                  </span>
                </div>
                <div className="service_info">
                  <p>Banners Pasting</p>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a className="single_service" href="#">
                <div className="service_icon">
                  <span className="service_ico">
                    <img src="images/digital-marketing.png" alt="img" />
                  </span>
                </div>
                <div className="service_info">
                  <p>Digital Media</p>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default AdvertisingServices;
