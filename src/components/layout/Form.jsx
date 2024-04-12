function Form() {
  return (
    <form
      method="POST"
      action="/thanks.html"
      data-netlify="true"
      data-netlify-recaptcha="true"
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
      {/* Google ReCaptcha Error */}
      <div id="g-recaptcha-error" className="recaptcha-error"></div>
      <div className="recaptcha-box" data-netlify-recaptcha="true">
        <div className="robot_msg">Não sou um robot</div>
      </div>
    </form>
  );
}

export default Form;
