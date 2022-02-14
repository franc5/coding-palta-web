import React, { useRef, useState } from "react";
import { Link } from "gatsby";

import OneTopicSection from "../components/OneTopicSection";
import SectionWithImage from "../components/SectionWithImage";

// TODO: Load images using Gatsby images plugin
// @ts-ignore
import Contact_0 from "../images/Contact_0.jpg";

export default function ContactPage() {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState<{ fullName: boolean, email: boolean, message: boolean }>({
    fullName: false,
    email: false,
    message: false,
  });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = fullNameRef?.current.value;
    const email = emailRef?.current.value;
    const message = messageRef?.current.value;

    const isFullNameInvalid = !fullName?.length;
    const isEmailInvalid = true;
    const isMessageInvalid = !(message?.length > 20);

    if (isFullNameInvalid || isEmailInvalid || isMessageInvalid) {
      setErrors({
        fullName: isFullNameInvalid,
        email: isEmailInvalid,
        message: isMessageInvalid,
      });
      return;
    }

    // TODO: Send the message and show an successfull pane -consider a loading spinner while the message is being sent and catching potential errors while sending-
  }

  return (
    <OneTopicSection title="Contáctenos">
      <>
        <p>
          Si quiere recibir un presupuesto o simplemente quiere ponerse en contacto con nuestro equipo de trabajo para conocernos y saber cómo trabajamos y cómo podemos ayudarlo a que su empresa crezca, por favor, llene el siguiente formulario y le responderemos en el transcurso de las 48 horas hábiles,
        </p>

        <SectionWithImage image={Contact_0}>
          <form onSubmit={handleOnSubmit}>
            <div className="row">

              <div className="input-field col s12">
                <input id="full-name" type="text" ref={fullNameRef} />
                <label htmlFor="full-name">Nombre completo</label>
                {errors.fullName && <span className="helper-text red-text">Por favor, ingrese su nombre completo</span>}
              </div>

              <div className="input-field col s12">
                <input id="email" type="email" ref={emailRef} />
                <label htmlFor="email">e-mail</label>
                {errors.email && <span className="helper-text red-text">Por favor, ingrese un e-mail válido</span>}
              </div>

              <div className="input-field col s12">
                <textarea id="message" className="materialize-textarea" ref={messageRef} />
                <label htmlFor="message">Mensaje</label>
                {errors.message && <span className="helper-text red-text">Su mensaje es demasiado corto. Por favor, escriba al menos 20 caracteres para que podamos ayudarlo</span>}
              </div>

              <button className="btn right waves-effect waves-light" type="submit" name="action">
                Enviar
              </button>

            </div>
          </form>
        </SectionWithImage>

        <p>
          Al enviarnos el mensaje, acepta nuestros <Link to="/terminos">Términos y condiciones</Link> y nuestras <Link to="/privacidad">Pólitica de privacidad</Link>.
        </p>

      </>
    </OneTopicSection>
  );
}

