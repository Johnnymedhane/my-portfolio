import { useState } from "react";
import { Loading } from "../../ui/Loading";
import { getClient, submitForm } from "../../api/apiClient";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

export function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  const phoneRegex = /^(\+972-?|0)([23489]|5[012345689]|77)-?\d{7}$/;

  const { register, handleSubmit, reset,  formState } = useForm();

  const { errors, isSubmitting } = formState;
  
  async function onSubmit(data) {
    setResponseMessage("");
    if (isSubmitting) return;
    try {
      const clientList = await getClient();

      // Check if email already exists
      const isDuplicate = clientList.some((client) => client.email === data.email);

      if (isDuplicate) {
        toast.error("You have already submitted a form with this email.");
        return;
      }

      // Map form data to API format
      const formData = {
        clientName: data.name,
        email: data.email,
        phoneNumber: data.phone,
        message: data.message || ""
      };

      await submitForm(formData);
      setResponseMessage(`thank you for contacting me ${data.name.split(' ')[0]}!`);
      toast.success("Form submitted successfully!");
      setTimeout(() => setResponseMessage(""), 5000);
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to submit the form. Please try again.");
    } 
  }

  function onError(errors) {
    console.log("Form errors:", errors);
  }

  // const isFormValid = name && email && isPhoneValid;

  return (
    <div className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      {isSubmitting && <Loading />}
      {responseMessage && (
        <span className="response-message">{responseMessage}</span>
      )}
      <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="input-wrapper">
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="form-input"
            placeholder="Full name"
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="form-input"
            placeholder="Email address"
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: phoneRegex,
                message: "Please enter a valid phone number.",
              },
            })}
            className="form-input"
            placeholder="Phone"
            disabled={isSubmitting}
          />
          {errors.phone && (
            <span className="error-message">{errors.phone.message}</span>
          )}
        </div>

        <textarea
          {...register("message")}
          className="form-input"
          placeholder="Your Message"
          disabled={isSubmitting}
        ></textarea>

        <button className="form-btn" type="submit" disabled={isSubmitting}>
          <i className="fa-regular fa-paper-plane"></i>
          <span>{isSubmitting ? "Submitting..." : "send message"}</span>
        </button>
      </form>
    </div>
  );
}
