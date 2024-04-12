import React from "react";
import Form from "./layout/Form";
import companySchedule from "../js/company_shedule";

function ContactSection() {
  // Call the companySchedule function to get the schedule information
  const schedule = companySchedule();

  return (
    <section className="contact-us">
      <h1 className="title">Contacto</h1>
      <img
        src="images/esquadria_logos_restaurados/esquadria_logo.png"
        className="img-title"
        alt="Esquadria Logo"
      />
      <div className="row">
        <div className="contact-col">
          <p>
            Na <span className="esquadria">esquadria</span> estamos sempre
            felizes de receber uma mensagem sua. Envie-nos uma mensagem e
            entraremos em contacto o mais breve possível.
          </p>
          <div>
            <i className="fas fa-home"></i>
            <span>
              Rua da Industria, 34 - 34A <br /> Mucifal - 2710-414 Sintra
            </span>
          </div>
          <div>
            <i className="fas fa-phone"></i>
            <span>
              +351 219 288 190 <br />
              (Chamada para a rede fixa nacional)
            </span>
          </div>
          <div>
            <i className="fas fa-calendar"></i>
            <span>De segunda-feira a sábado</span>
          </div>
          <div>
            <i className="fas fa-clock"></i>
            {/* Render the schedule message */}
            <span>Das 9.30H às 18.30H</span><br /> 
            <span style={{ color: schedule.color }}>
                {schedule.message}</span><br />
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            <span>info@esquadria-sa.pt</span>
          </div>
        </div>
        <div className="contact-col" id="contact">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

