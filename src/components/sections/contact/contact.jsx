import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contact1 from "../../../assets/img/contact1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Contact = () => {
  const formRef = useRef();
  const serviceID = "service_dq7b6ew";
  const publicKey = "rLxIrDmuroIev_ym7";
  const templateID = "template_ki60x4j";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <AnimationOnScroll
        offset={100}
        duration={1}
        animateIn="animate__backInLeft"
      >
        <h2 className="heading">
          <i className="fas fa-headset"></i> Get in <span>Touch</span>
        </h2>
      </AnimationOnScroll>
      <div className="container">
        <div className="content">
          <div className="image-box">
            <AnimationOnScroll
              offset={100}
              duration={1}
              animateIn="animate__fadeInRightBig"
            >
              <img draggable="false" src={contact1} alt="" />
            </AnimationOnScroll>
          </div>
          <form ref={formRef} id="contact-form" onSubmit={sendEmail}>
            <AnimationOnScroll
              offset={300}
              duration={1}
              animateIn="animate__fadeInLeftBig"
            >
              <div className="form-group">
                <div className="field">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="field">
                  <input type="text" name="subject" placeholder="Subject" />
                  <i className="fas fa-info"></i>
                </div>
                <div className="message">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                  <i className="fas fa-comment-dots"></i>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  Submit <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </AnimationOnScroll>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
