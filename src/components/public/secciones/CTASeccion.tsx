import React from "react";
import { ArrowRight } from "lucide-react";
import { redirectToWhatsApp } from "../../../utils/Wsp";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  backgroundImage = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80",
}) => {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>

        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-fixed"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center">
        {/* Main Heading */}
        <h2 className="mb-6 text-4xl text-white md:text-5xl font-futuroNormal">
          {title}
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mb-10 text-xl text-gray-200">
          {description}
        </p>

        {/* CTA Button */}
        <button
          onClick={() => {
            redirectToWhatsApp(
              "+51997125302",
              "Hola estoy interesado en sus servicios."
            );
          }}
          type="button"
          className="inline-flex items-center gap-3 px-10 py-3 text-lg font-semibold text-white transition-all bg-primary-main rounded-main group hover:bg-primary-600 hover:scale-105 hover:shadow-2xl"
        >
          {buttonText}
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Decorative Elements */}
    </section>
  );
};

// Ejemplo de uso:
// <CTASection
//   title="¿Listo para una vida más saludable?"
//   description="Descubre nuestra amplia selección de productos orgánicos y naturales. Calidad garantizada desde el campo hasta tu mesa."
//   buttonText="Solicitar Cotización"
//   buttonLink="/contacto"
//   backgroundImage="https://tu-imagen.jpg"
// />

export default CTASection;
