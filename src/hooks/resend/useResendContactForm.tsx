import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const useResendContactForm = ({ onSuccess, onError, lang }) => {
  const [loading, setLoading] = useState(false);

  const successMsg =
    lang === "fr"
      ? "Formulaire soumis avec succès ✅"
      : "Form submitted successfully ✅";

  const errorMsg =
    lang === "fr"
      ? "Échec de l'envoi du formulaire ❌"
      : "Failed to send the form ❌";

  const submitForm = async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/send-email", formData);

      if (
        response.status === 200 ||
        response.status === 201 ||
        response.status === 204
      ) {
        toast.success(successMsg);
        onSuccess();
      } else {
        toast.error(errorMsg);
        onError("Failed to send the form.");
      }
    } catch (error) {
      toast.error(errorMsg);
      onError("An error occurred while sending the form.");
    } finally {
      setLoading(false);
    }
  };

  return { submitForm, loading };
};
