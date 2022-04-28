import { useState } from "react";
import Card from "../../UI/Card";
import LoanServicesModal from "../Modals/LoanServicesModal";

const LoanServices = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <div className="services_container col-md-7">
      <div className="main_heading text-center">
        <h2>Bank Loans</h2>
      </div>
      <div className="container">
        <Card>
          <div className="row">
            {props.ServicesList &&
              props.ServicesList.map((service, i) => (
                <div className="col-md-4" key={i}>
                  <a
                    className="single_service"
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target={`#loanModal${service.id}`}
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
                  <LoanServicesModal
                    setModalOption={modalShow}
                    clickedService={service}
                    onModalClose={closeModal}
                  />
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoanServices;
