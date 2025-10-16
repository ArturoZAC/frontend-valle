import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 " id="contacto">
      <div className="max-w-5xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-100 text-secondary-main">
              CONTÁCTANOS
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-futuroNormal text-secondary-main md:text-5xl">
            ¿Necesitas de nuestros productos?
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-800">
            Estamos listos para brindarte productos agrícolas de calidad.
            Contáctanos y descubre cómo podemos ayudarte.
          </p>
        </div>

        {/* Main Container */}
        <div className="overflow-hidden transition transform bg-white shadow-xl rounded-3xl hover:shadow-2xl">
          <div className="grid gap-0 md:grid-cols-12">
            {/* Left Column: Contact Info */}
            <div className="p-8 text-white md:col-span-5 bg-secondary-main md:p-10">
              <h3 className="mb-6 text-2xl font-bold">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 text-green-700 bg-white rounded-full">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Teléfono</h4>
                    <p className="mt-1 text-green-100">(+51) 997 125 302 </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 text-green-700 bg-white rounded-full">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">
                      Correo Electrónico
                    </h4>
                    <p className="mt-1 text-green-100">consultas@dominio.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 text-green-700 bg-white rounded-full">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Ubicación</h4>
                    <p className="mt-1 text-green-100">La Libertad, Perú</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-10 border-t border-green-500">
                <h4 className="mb-4 text-lg font-semibold">
                  Nuestros Servicios
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-green-100">Productos frescos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-100">Proceso industrial</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-100">Insumos orgánicos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-100">Exportación</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-10 border-t border-green-500">
                <p className="mb-2 font-medium">Horario de Atención</p>
                <p className="text-green-100">
                  Lunes a Viernes: 8:00 AM - 6:00 PM
                </p>
                <p className="text-green-100">Sábados: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="p-8 bg-white md:col-span-7 md:p-10">
              <h3 className="mb-6 text-2xl font-bold text-gray-800">
                Envíanos un Mensaje
              </h3>

              <div className="space-y-5">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-700 transition border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-gray-700 transition border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-semibold text-gray-700">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-gray-700 transition border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
                      placeholder="+51 997 125 302 "
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-gray-700 transition border border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 text-gray-700 transition border border-gray-300 rounded-lg resize-none focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none"
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center w-full gap-2 px-6 py-4 font-semibold text-white transition-all bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>

                <p className="text-sm text-center text-gray-500">
                  * Campos obligatorios
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
