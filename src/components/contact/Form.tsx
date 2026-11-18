"use client";

import { useState } from "react";
import { Loading } from "../../ui/Loading";
import { submitContactForm } from "../../api/apiClient";
import toast from "react-hot-toast";
import { useForm, type FieldErrors } from "react-hook-form";
import type { ContactFormFields } from "../../types/contact";

export function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  const phoneRegex = /^(\+972-?|0)([23489]|5[012345689]|77)-?\d{7}$/;

  const { register, handleSubmit, reset, formState } =
    useForm<ContactFormFields>();

  const { errors, isSubmitting } = formState;

  async function onSubmit(data: ContactFormFields) {
    setResponseMessage("");
    if (isSubmitting) return;

    const result = await submitContactForm(data);

    if (result.ok) {
      setResponseMessage(
        `thank you for contacting me ${result.name.split(" ")[0]}!`,
      );
      toast.success("Form submitted successfully!");
      setTimeout(() => setResponseMessage(""), 5000);
      reset();
      return;
    }

    if (result.reason === "duplicate") {
      toast.error("You have already submitted a form with this email.");
    } else {
      console.error("Contact form submission failed");
      toast.error("Something went wrong. Please try again.");
    }
  }

  function onError(errors: FieldErrors<ContactFormFields>) {
    console.log("Form errors:", errors);
  }

  return (
    <div className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>
      {isSubmitting && <Loading className="form-loader" />}
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
