import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useResendContactForm } from "../hooks/resend/useResendContactForm";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const { submitForm, loading } = useResendContactForm({
    onSuccess: () => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    },
    onError: () => {},
    lang: isEnglish ? "en" : "fr",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <div className="card p-8">
      {loading ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle size={64} className="text-success mx-auto mb-6" />
          <h3 className="text-2xl font-next-art mb-4">
            {isEnglish ? "Message Sent!" : "Message Envoyé !"}
          </h3>
          <p className="text-neutral-600 mb-8">
            {isEnglish
              ? "Thank you for contacting us. We will get back to you as soon as possible."
              : "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais."}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                {isEnglish ? "Full Name" : "Nom Complet"}{" "}
                <span className="text-error">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={isEnglish ? "Your name" : "Votre nom"}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={isEnglish ? "Your email" : "Votre email"}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold mb-2"
              >
                {isEnglish ? "Phone Number" : "Numéro de Téléphone"}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={
                  isEnglish ? "Your phone number" : "Votre numéro de téléphone"
                }
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-semibold mb-2"
              >
                {isEnglish ? "Desired Service" : "Service Souhaité"}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">
                  {isEnglish ? "Select a service" : "Sélectionnez un service"}
                </option>
                <option value="teasers">
                  {isEnglish
                    ? "Teasers & Trailers"
                    : "Teasers & Bandes-annonces"}
                </option>
                <option value="aftermovies">
                  {isEnglish
                    ? "Aftermovies & Best-of"
                    : "Aftermovies & Best-of"}
                </option>
                <option value="retrospectives">
                  {isEnglish
                    ? "Retrospectives & Highlights"
                    : "Rétrospectives & Highlights"}
                </option>
                <option value="promotional">
                  {isEnglish ? "Promotional Videos" : "Vidéos Promotionnelles"}
                </option>
                <option value="corporate">
                  {isEnglish ? "Corporate Videos" : "Vidéos Corporate"}
                </option>
                <option value="Autre">{isEnglish ? "Other" : "Autre"}</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder={
                isEnglish
                  ? "Tell us about your project"
                  : "Parlez-nous de votre projet"
              }
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isEnglish ? "Sending..." : "Envoi en cours..."}
                </span>
              ) : (
                <span className="flex items-center">
                  <Send size={16} className="mr-2" />
                  {isEnglish ? "Send Message" : "Envoyer le Message"}
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
