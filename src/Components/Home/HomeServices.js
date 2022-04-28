import { useState } from "react";
import Card from "../../UI/Card";
import PestControlModal from "../Modals/PestControlModal";
import HomeCleaningModal from "../Modals/HomeCleaningModal";
import Section from "../Section";
import CarpenterServiceModal from "../Modals/CarpenterServiceModal";
import ElectricianServiceModal from "../Modals/ElectricianServiceModal";
import PaintingServiceModal from "../Modals/PaintingServiceModal";
import PlumbingServiceModal from "../Modals/PlumbingServiceModal";

const HomeServices = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <Section className="home_services">
      <div className="main_heading text-center">
        <h2>Home Services</h2>
      </div>
      <div className="container">
        <Card>
          <div class="row">
            <div class="col-md-2">
              <a
                class="single_service"
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#pestControlModal"
              >
                <div class="service_icon">
                  <span class="service_ico">
                    <img src="images/pest-control.png" alt="img" />
                  </span>
                </div>
                <div class="service_info">
                  <p>Pest Control</p>
                </div>
              </a>
            </div>
            <div class="col-md-2">
              <a
                class="single_service"
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#homeCleaningModal"
              >
                <div class="service_icon">
                  <span class="service_ico">
                    <img src="images/housekeeping.png" alt="img" />
                  </span>
                </div>
                <div class="service_info">
                  <p>Home Cleaning</p>
                </div>
              </a>
            </div>
            <div class="col-md-2">
              <a
                class="single_service"
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#carpenterServiceModal"
              >
                <div class="service_icon">
                  <span class="service_ico">
                    <img src="images/carpenter.png" alt="img" />
                  </span>
                </div>
                <div class="service_info">
                  <p>Carpenters</p>
                </div>
              </a>
            </div>
            <div class="col-md-2">
              <a
                class="single_service"
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#electricianServiceModal"
              >
                <div class="service_icon">
                  <span class="service_ico">
                    <img src="images/electrician.png" alt="img" />
                  </span>
                </div>
                <div class="service_info">
                  <p>Electricians</p>
                </div>
              </a>
            </div>
            <div class="col-md-2">
              <a
                class="single_service"
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#paintingServiceModal"
              >
                <div class="service_icon">
                  <span class="service_ico">
                    <img src="images/home-painting.png" alt="img" />
                  </span>
                </div>
                <div class="service_info">
                  <p>Home Painting</p>
                </div>
              </a>
            </div>

            <div class="col-md-2">
              <a
                class="single_service"
                href="javascript:void(0)"
                data-toggle="modal"
                data-target="#plumbingServiceModal"
              >
                <div class="service_icon">
                  <span class="service_ico">
                    <img src="images/plumber.png" alt="img" />
                  </span>
                </div>
                <div class="service_info">
                  <p>Plumbers</p>
                </div>
              </a>
            </div>
          </div>
        </Card>
      </div>
      <PestControlModal />
      <HomeCleaningModal />
      <CarpenterServiceModal />
      <ElectricianServiceModal />
      <PaintingServiceModal />
      <PlumbingServiceModal />
    </Section>
  );
};

export default HomeServices;
