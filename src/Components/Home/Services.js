import Card from "../../UI/Card";

const Services = (props) => {
  return (
    <section className="services_section">
      <div className="container">
        <Card>
          <div className="row">
            {props.ServicesList &&
              props.ServicesList.map((service, i) => (
                <div className="col-md-2" key={i}>
                  <a className="single_service" href="#">
                    <div className="service_icon">
                      <span className="service_ico">
                        <img src={`images/${service.serviceIcon}`} alt="img" />
                      </span>
                    </div>
                    <div className="service_info">
                      <p>{service.serviceName}</p>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;
