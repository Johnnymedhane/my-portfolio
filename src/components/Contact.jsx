import { useState, useEffect, useRef } from "react";

import { Loading } from "./Loading";
import { MoreInfo } from "./MoreInfo";
export function Contact() {
  return (
   
      <section id="contact">
        <div className="contact">
          <h2 className="section-title">Contact</h2>
          <div className="address">
            <MoreInfo/>
            <Map />
          </div>
          <Form />
        </div>
      </section>
  );
}
export function Map() {
  const [isMapAvailable, setIsMapAvailable] = useState(true);

  useEffect(() => {
    if (!navigator.onLine) {
      setIsMapAvailable(false);
    }
  }, []);

  const handleMapError = () => {
    setIsMapAvailable(false);
  };

  return isMapAvailable ? (
    <div className="mapbox">
      <figure>
        <iframe title="map"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=petah%20tikva%20israel&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          onError={handleMapError}
        ></iframe>
      </figure>
    </div>
  ) : (
    <OfflineMap />
  );
}
export function OfflineMap() {
  return (
    <div className="offline-map">
      <p>Map is unavailable. Please check your internet connection.</p>
    </div>
  );
}
export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const timeoutRef = useRef(null);

  const phoneRegex = /^(\+972-?|0)([23489]|5[012345689]|77)-?\d{7}$/;

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = { name, email, phone, message };

    try {
      const response = await fetch("/.netlify/functions/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Something went wrong");

      setResponseMessage(data.message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      timeoutRef.current = setTimeout(() => setResponseMessage(""), 5000);
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong. Please try again.");
      timeoutRef.current = setTimeout(() => setResponseMessage(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = name && email && isPhoneValid;

  return (
    <div className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      {isSubmitting && <Loading />}
      {responseMessage && <p className="response-message">{responseMessage}</p>}
      {!isSubmitting && !responseMessage && <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            name="Fullname"
            placeholder="Full name"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            name="email"
            placeholder="Email address"
            required
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setIsPhoneValid(e.target.value === "" || phoneRegex.test(e.target.value));
            }}
            className="form-input"
            name="phone"
            placeholder="Phone"
            required
          />
          {!isPhoneValid && <p className="error-message">Please enter a valid phone number.</p>}
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="form-input"
          name="message"
          placeholder="Your Message"
        ></textarea>

        <button className="form-btn" type="submit" disabled={!isFormValid}>
          <i className="fa-regular fa-paper-plane"></i>
          <span>{isSubmitting ? "Submitting..." : "Send Message"}</span>
        </button>

      </form>
      }
    </div>
  );
}
