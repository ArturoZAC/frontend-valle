import React from "react";
import { ArrowRight } from "lucide-react";
import { redirectToWhatsApp } from "../../../utils/Wsp";
import {
  servicio1,
  servicio2,
  servicio3,
  servicio4,
} from "../../shared/images";

const ServiciosSection: React.FC = () => {
  const servicios = [
    {
      image: `${servicio1}`,
      title: "Productos Frescos",
      description:
        "Frutas y verduras frescas de la más alta calidad, directamente del campo a tu mesa.",
    },
    {
      image: `${servicio2}`,
      title: "Productos para Proceso Industrial",
      description:
        "Frutas y verduras destinadas a conservas, congelados, mermeladas y más.",
    },
    {
      image: `${servicio3}`,
      title: "Insumos Agrícolas Orgánicos",
      description:
        "Fertilizantes y bioestimulantes que mantienen cultivos saludables y amigables con el ambiente.",
    },
    {
      image: `${servicio4}`,
      title: "Comercialización Nacional e Internacional",
      description:
        "Distribuimos productos a nivel nacional y extranjero con estándares de calidad internacional.",
    },
  ];

  return (
    <section className="py-20 " id="servicios">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-secondary-main">
              Lo que ofrecemos
            </span>
          </div>
          <h2 className="mb-4 text-4xl text-secondary-main font-futuroNormal md:text-5xl">
            Nuestros Servicios
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-0.5 bg-primary-main"></div>
            <div className="w-2 h-2 rounded-full bg-primary-main"></div>
            <div className="w-12 h-0.5 bg-primary-main"></div>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-800">
            Del valle a su mesa, productos agrícolas de calidad
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-500 bg-white shadow-lg group rounded-3xl hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={servicio.image}
                  alt={servicio.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Decorative leaf element */}
                <div className="absolute flex items-center justify-center w-16 h-16 transition-opacity duration-500 rounded-full opacity-0 top-6 right-6 bg-white/20 backdrop-blur-sm group-hover:opacity-100">
                  <span className="text-3xl">🌿</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-gray-800 transition-colors group-hover:text-primary-main">
                  {servicio.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {servicio.description}
                </p>

                {/* View More Link */}
                <button
                  type="button"
                  onClick={() => {
                    redirectToWhatsApp(
                      "+51997125302",
                      "Hola estoy interesado en sus servicios."
                    );
                  }}
                  className="inline-flex items-center gap-2 font-semibold transition-all text-secondary-main group-hover:gap-4"
                >
                  Solicitar ahora
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
