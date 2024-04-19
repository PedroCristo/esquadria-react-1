import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Form() {
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleRecaptchaChange = () => {
    setIsRecaptchaChecked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRecaptchaChecked) {
      e.target.submit();
    } else {
      setAlertMessage("Por favor, complete o Recaptcha!");
    }
  };
  return (
    <form
      method="POST"
      action="/pagina-agradecimiento"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="name" placeholder="Nome" required />
      <input type="email" name="email" placeholder="E-mail" required />
      <input type="tel" name="phone" placeholder="Telefone" />
      <input type="text" name="subject" placeholder="Assunto" />
      <textarea
        rows="8"
        name="message"
        placeholder="Mensagem"
        required
      ></textarea>
      <button type="submit" className="btn form-btn">
        Enviar
      </button>
      {/* Google ReCaptcha */}
      <ReCAPTCHA
        sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
        onChange={handleRecaptchaChange}
        hl={"pt"}
      />
      <h6 className={alertMessage ? "alert" : null}>{alertMessage}</h6>
    </form>
  );
}

export default Form;
