import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import { ClipLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.min.css";
import "./Contact.scss";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formValues.name) {
      errors.name = "Required";
    }
    if (!formValues.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid email address";
    }
    // if (!formValues.subject) {
    //   errors.subject = "Required";
    // }
    if (!formValues.message) {
      errors.message = "Required";
    }
    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
    }
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      emailjs
        .sendForm(
          "service_whma3zs",
          "template_5mschr7",
          e.target,
          "yQ5Ja0JdXa9_jK_Mx"
        )
        .then(
          (result) => {
            setIsLoading(false);
            setFormValues({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            toastifySuccess();
          },
          (error) => {
            setIsLoading(false);
            toastifyError();
            console.error("Failed to send form", error);
          }
        );
    }
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const toastifyError = () => {
    toast("Form failed to send", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback error",
      toastId: "notifyToast",
    });
  };

  return (
    <section className="contact background">
      <div>
      <h1 className="contact__heading">Get in Touch!</h1>
         <h3 className="contact__sub-heading">
          Let's Build Something Great Together!
        </h3>
      </div>
      <div className="contact__form-container">
        <form className="contact__form" onSubmit={handleSubmit}>
            {/* <div> */}
              <input
              className="contact__input"
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleInputChange}
                value={formValues.name}
              />
              <span className="contact__error">{formErrors.name}</span>
            {/* </div>
            <div> */}
              <input
              className="contact__input"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={formValues.email}
              />

              <span className="contact__error">{formErrors.email}</span>
            {/* </div>
            <div> */}
              {/* <input
              className="contact__input"
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={handleInputChange}
                value={formValues.subject}
              />

              <span className="contact__error">{formErrors.subject}</span> */}
            {/* </div>
            <div> */}
              <textarea
               className="contact__textarea"
                placeholder="Your Message"
                name="message"
                onChange={handleInputChange}
                value={formValues.message}
              ></textarea>

              <span className="contact__error">{formErrors.message}</span>
            {/* </div> */}
         
          <button className="contact__button" type="submit">{isLoading ? <ClipLoader /> : "Send"}</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;

