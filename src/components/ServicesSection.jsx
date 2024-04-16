import React from 'react';
import servicesDB from "../data/services";

function ServicesSection() {
  return (
    <section id="services">
      <h1 className="title">Serviços</h1>
      <img
        src="images/logos/esquadria_logo.png"
        className="img-title"
        alt="Esquadria Logo"
      />
      <div className="container">
        <div className="row">
          {servicesDB.map((service) => (
            <div className="col-md-4" key={service.id}>
              <div className="user-services">
                <img
                  src={service.serviceImg}
                  className="user-services-img"
                  alt={`Esquadria ${service.name}`}
                />
                <h5>{service.nome}</h5>
                <p>{service.content}</p>
                <img
                  src="images/icons/services/success-icon.png"
                  className="user-services-img success-icon"
                  alt={`Esquadria`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
