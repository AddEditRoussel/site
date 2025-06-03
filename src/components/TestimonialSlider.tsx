import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

const TestimonialSlider: React.FC = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-tertiary/30">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="section-title">{t("testimonials.title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden p-8"
          >
            <Quote size={48} className="text-primary/20 mb-4" />
            <p className="text-lg italic mb-6 text-neutral-700">
              "{testimonials[currentIndex].quote}"
            </p>
            <div>
              <h4 className="font-next-art text-xl">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-neutral-600">
                {testimonials[currentIndex].position},{" "}
                {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label={t("testimonials.navigation.previous")}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-primary hover:text-white transition-colors"
              aria-label={t("testimonials.navigation.next")}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentIndex === index ? "bg-primary" : "bg-neutral-300"
                }`}
                aria-label={`${t("testimonials.navigation.goto")} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
