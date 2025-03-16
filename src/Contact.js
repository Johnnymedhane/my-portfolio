import { useState, useEffect } from "react";
import { MoreInfo } from "./MoreInfo";

export function Contact() {
  return (
    <article>
      <section id="contact">
        <div className="contact">
          <h2 className="section-title">Contact</h2>
          <div className="address">
            <MoreInfo />
            <Map />
          </div>
          <Form />
        </div>
      </section>
    </article>
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
  const [isFormValid, setIsFormValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const phoneRegex = /^(\+972-?|0)([23489]|5[012345689]|77)-?\d{7}$/;
  const [formData, setFormData] = useState({
    Fullname: '',
    phoneNumber: '',
    email: '',
    message: ''
  });
  const [responseMessage, setResponseMessage] = useState('');


  function handleInput(e) {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));

    if (name === "phoneNumber") {
      if (name === "phoneNumber") {
        setIsPhoneValid(value === '' || phoneRegex.test(value));
      }

    }

    const form = e.target.form;
    setIsFormValid(form.checkValidity());
  }
   async function  hadleSubmit(e) {
    e.preventDefault();
     console.log("form submited", formData);
     try {
       const response = await fetch('/.netlify/functions/submitForm', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },

         body: JSON.stringify(formData),
       });
       const data = await response.json();
       setResponseMessage(data.message);
        setFormData({
          Fullname: '',
          phoneNumber: '',
          email: '',
          message: ''
        });
     }
     catch (error) {
       console.error('Error:', error);
       setResponseMessage('Something went wrong. Please try again.');
     }
  };


  return (
    <div className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      <form action="#" className="form" onSubmit={hadleSubmit}>
        <div className="input-wrapper">
          <input type="text" value={formData.Fullname}
            onChange={handleInput}
            className="form-input"
            name="Fullname"
            placeholder="Full name" required />

          <input type="email" value={formData.email}
            onChange={handleInput}
            className="form-input"
            name="email"
            placeholder="Email address" required />

          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInput}
            className="form-input"
            name="phoneNumber"
            pattern={phoneRegex.source}
            placeholder="Phone"
            required />
          {!isPhoneValid && <p className="error-message">Please enter a valid phone number.</p>}
        </div>
        <textarea value={formData.message}
          onChange={handleInput}
          className="form-input"
          name="message"
          placeholder="Your Message"></textarea>

        <button className="form-btn" type="submit" disabled={!isFormValid} data-form-btn>
          <i className="fa-regular fa-paper-plane"></i>
          <span>Send Message</span>
        </button>
        {responseMessage &&
          <p className="response-message">{responseMessage}
          </p>}
      </form>
    </div>
  );
}

