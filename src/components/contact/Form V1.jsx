import { useState } from "react";
import { Loading } from "../../ui/Loading";
import { getClient, submitForm } from "../../api/apiClient";
import toast from "react-hot-toast";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const phoneRegex = /^(\+972-?|0)([23489]|5[012345689]|77)-?\d{7}$/;

  c

  const handleSubmit = async (e) => {

    let timeoutRef 

    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = { clientName: name, email, phoneNumber: phone, message };

    const clientList = await getClient();

    // Check if email already exists
    const isDuplicate = clientList.some((client) => client.email === email);

    if (isDuplicate) {
      toast.error("You have already submitted a form with this email.");
      setIsSubmitting(false);
      return;
    }

    try {
      submitForm(formData);
      setResponseMessage(`thank you for contacting me ${name.split(' ')[0]}!`);
      toast.success("Form submitted successfully!");
      timeoutRef = setTimeout(() => setResponseMessage(""), 5000);

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong. Please try again.");
      toast.error("Failed to submit the form. Please try again.");
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
      {!isSubmitting && !responseMessage && (
        <form className="form" onSubmit={handleSubmit}>
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
                setIsPhoneValid(
                  e.target.value === "" || phoneRegex.test(e.target.value)
                );
              }}
              className="form-input"
              name="phone"
              placeholder="Phone"
              required
            />
            {!isPhoneValid && (
              <p className="error-message">
                Please enter a valid phone number.
              </p>
            )}
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
      )}
    </div>
  );
}
