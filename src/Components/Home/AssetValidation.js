import { useState } from "react";
import Card from "../../UI/Card";
import Section from "../Section";
import AssetValidationModal from "../Modals/AssetValidationModal";

const AssetValidation = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const modalToggle = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <Section className="services_section assetvalidation">
      <div className="container">
        <div class="main_heading text-center">
          <h2>Asset Search &amp; Validation Services</h2>
        </div>
        <Card>
          <div className="row">
            {props.ServicesList &&
              props.ServicesList.map((service, i) => (
                <div className="col-md-3" key={i}>
                  <a
                    className="single_service"
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target={`#asset${service.id}`}
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
                  <AssetValidationModal
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

export default AssetValidation;
