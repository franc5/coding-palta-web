import React, { useRef, useState } from "react";

import OneTopicSection from "../components/OneTopicSection";

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
    <div className="container">
      <div className="section">

        {/* TODO: Add a valid message */}
        <OneTopicSection
          title="Contact Us"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros."
        />

        <div className="row">
          <form className="col l6 s12" onSubmit={handleOnSubmit}>
            <div className="row">

              <div className="input-field col s12">
                <input id="full-name" type="text" ref={fullNameRef} />
                <label htmlFor="full-name">Full name</label>
                {errors.fullName && <span className="helper-text red-text">Please, enter your full name</span>}
              </div>

              <div className="input-field col s12">
                <input id="email" type="email" ref={emailRef} />
                <label htmlFor="email">e-mail</label>
                {errors.email && <span className="helper-text red-text">Please, enter a valid e-mail</span>}
              </div>

              <div className="input-field col s12">
                <textarea id="message" className="materialize-textarea" ref={messageRef} />
                <label htmlFor="message">Message</label>
                {errors.message && <span className="helper-text red-text">Your message is too short. Please, write at least 20 character so we can help you</span>}
              </div>

              <button className="btn right waves-effect waves-light" type="submit" name="action">
                Send
              </button>

            </div>
          </form>

          <div className="col l6 hide-on-med-and-down">
            <img className="responsive-img" src={Contact_0} alt="Contact us" style={{ opacity: .75 }}/>
          </div>

        </div>
      </div>
    </div>
  );
}

