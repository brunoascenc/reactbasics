import React from "react";
import { Formik } from 'formik'
import * as Yup from 'yup'

const Contact = () => {
  return (
    <div className="contact-container">


      <h1>Contato</h1>
      <span>Entre em contato conosco</span>
      <form>
        <input type="text" name="name" placeholder="Seu nome..." />
        <input type="text" name="email" placeholder="Seu email..." />
        <textarea
          id="story"
          name="message"
          rows="10"
          cols="33"
          placeholder="Escreva uma mensagem"
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
