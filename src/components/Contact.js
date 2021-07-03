import React from "react";

function Contact() {
  var links = {
    joinEmail: "mailto:join@snr.solutions",
    helloEmail: "mailto:hello@snr.solutions",
  };

  return (
    <div className="contact">
      <div className="contact-wrapper wrapper-2">
        <div className="contact-header">
          <p>Contact</p>
        </div>
        <div className="contact-form"></div>
        <div className="contact-details">
          <h1 className="header">
            Let's <span> get in</span> touch
          </h1>
          <div className="content">
            <div className="box box-1">
              <h1>
                <a href={links.helloEmail}></a>
                hello@snr.solutions
              </h1>
              <p>
                Do you have a dope project in mind? Need an expect advise? say
                Hi and we are excited to chat to you
              </p>
            </div>
            <div className="box box-2">
              <h1>
                <a href={links.joinEmail}></a>
                join@snr.solutions
              </h1>
              <p>
                Do you want to join our team and work on mind blowing projects?
                send us your story
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
