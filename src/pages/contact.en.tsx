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
    const isEmailInvalid = !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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
    <OneTopicSection title="Contact Us">
      <>
        <p>
          If you want to get a quote or simply get in touch with our team to meet us and know how we work and how we can help your startup grow, please fill the form below and we will reply to your message within 48 working hours.
        </p>

        <SectionWithImage image={Contact_0}>
          <form onSubmit={handleOnSubmit}>
            <div className="row">

              <div className="input-field col s12">
                <input id="full-name" type="text" ref={fullNameRef} />
                <label htmlFor="full-name">Full name</label>
                {errors.fullName && <span className="helper-text red-text left-align">Please, enter your full name</span>}
              </div>

              <div className="input-field col s12">
                <input id="email" type="email" ref={emailRef} />
                <label htmlFor="email">e-mail</label>
                {errors.email && <span className="helper-text red-text left-align">Please, enter a valid e-mail</span>}
              </div>

              <div className="input-field col s12">
                <textarea id="message" className="materialize-textarea" ref={messageRef} />
                <label htmlFor="message">Message</label>
                {errors.message && <span className="helper-text red-text left-align">Your message is too short. Please, write at least 20 character so we can help you</span>}
              </div>

              <div className="col s12">
                <button className="btn right waves-effect waves-light" type="submit" name="action">
                  Send
                </button>
              </div>

            </div>
          </form>
        </SectionWithImage>

        <p>
          By sending a message to us, you accept our <Link to="/terms">Terms and conditions</Link> and <Link to="/privacy">Privacy policies</Link>.
        </p>

      </>
    </OneTopicSection>
  );
}

