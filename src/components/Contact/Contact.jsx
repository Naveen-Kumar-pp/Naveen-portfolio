import { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  const [errors, setErrors] =
    useState({});

  const [formMessage, setFormMessage] =
    useState("");

  function handleChange(event) {

    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));

    setFormMessage("");
  }

  function handleSubmit(event) {

    event.preventDefault();

    const newErrors = {};

    if (
      formData.name.trim().length < 2
    ) {
      newErrors.name =
        "Please enter your name.";
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(
        formData.email.trim()
      )
    ) {
      newErrors.email =
        "Please enter a valid email.";
    }

    if (!formData.subject) {
      newErrors.subject =
        "Please select a subject.";
    }

    if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Message must contain at least 10 characters.";
    }

    setErrors(newErrors);

    if (
      Object.keys(newErrors).length === 0
    ) {

      setFormMessage(
        "Thank you! Your message has been received. 😊"
      );

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setFormMessage("");
      }, 5000);
    }
  }

  return (
    <section
      id="contact"
      className="contact-section"
    >

      <h2>Get In Touch</h2>

      <p className="contact-intro">
        Have a project in mind?
      </p>

      <form
        id="contactForm"
        onSubmit={handleSubmit}
        noValidate
      >

        <div className="form-group">

          <label htmlFor="name">
            Name:
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <small className="error-message">
            {errors.name}
          </small>

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Email:
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <small className="error-message">
            {errors.email}
          </small>

        </div>

        <div className="form-group">

          <label htmlFor="subject">
            Subject:
          </label>

          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >

            <option value="">
              Select a subject
            </option>

            <option value="hire">
              I want to hire you
            </option>

            <option value="collaboration">
              I want to collaborate
            </option>

            <option value="other">
              Other
            </option>

          </select>

          <small className="error-message">
            {errors.subject}
          </small>

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message:
          </label>

          <textarea
            id="message"
            name="message"
            rows="7"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
          />

          <small className="error-message">
            {errors.message}
          </small>

        </div>

        <button
          type="submit"
          className="contact-submit-btn"
        >
          Send Message
        </button>

        <p
          className="form-message"
          aria-live="polite"
        >
          {formMessage}
        </p>

      </form>

      <p className="email-contact">

        Email:{" "}

        <a href="mailto:naveengouda802@gmail.com">
          naveengouda802@gmail.com
        </a>

      </p>

    </section>
  );
}

export default Contact;