import { useState } from "react";
import Card from "../../UI/Card";
import PackersMoversModal from "../Modals/PackersMoversModal";

const PackersMoversServices = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const modalToggle = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };
  return (
    <div className="services_container col-md-5">
      <div className="main_heading text-center">
        <h2>Packers & Movers</h2>
      </div>
      <div className="container">
        <Card>
          <div className="row">
            {props.ServicesList &&
              props.ServicesList.map((service, i) => (
                <div className="col-md-6" key={i}>
                  <a
                    className="single_service"
                    href="javascript:void(0)"
                    data-toggle="modal"
                    data-target={`#packer${service.id}`}
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
                  <PackersMoversModal
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

export default PackersMoversServices;
