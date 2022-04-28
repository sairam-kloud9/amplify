import { useState } from "react";
import Card from "../../UI/Card";
import Section from "../Section";
import RentalServicesModal from "../Modals/RentalServicesModal";

const RentalServices = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const modalToggle = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <Section className="home_services">
      <div className="main_heading text-center">
        <h2>Rental Services</h2>
      </div>
      <div className="container">
        <Card>
          <div className="row">
            {props.ServicesList &&
              props.ServicesList.map((service, i) => (
                <div className="col-md-3" key={i}>
                  <a
                    className="single_service"
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target={`#rental${service.id}`}
                  >
                    <div className="service_icon">
                      <span className="service_ico">
                        <img src={`images/${service.serviceIcon}`} alt="img" />
                      </span>
                    </div>
                    <div className="service_info">
                      <p>{service.serviceName}</p>
                    </div>
                  </a>
                  <RentalServicesModal
                    setModalOption={modalShow}
                    clickedService={service}
                    onModalClose={closeModal}
                  />
                </div>
              ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default RentalServices;
