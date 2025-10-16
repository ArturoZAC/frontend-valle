import React from "react";
import { nosotros2, nosotros3, nosotros4 } from "../../shared/images";

const NosotrosSection: React.FC = () => {
  return (
    <section className="py-20 " id="nosotros">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-secondary-main font-futuroNormal">
            Sobre <span className="text-primary-main">Nosotros</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-primary-main"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-800">
            Promovemos cultivos eficientes e innovadores en la producción de
            frutas y verduras orgánicas y convencionales.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 mb-20 lg:grid-cols-2">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl text-secondary-main md:text-4xl font-futuroNormal">
              Llevamos lo mejor del valle a tu mesa
            </h3>
            <p className="leading-relaxed text-gray-800">
              En <span className="font-semibold">Valle Agrícola L.A.</span>{" "}
              producimos y comercializamos frutas, verduras e insumos agrícolas,
              abasteciendo el mercado nacional y extranjero con productos
              frescos y de alta calidad. Trabajamos bajo estrictos estándares de
              cosecha y post-cosecha para asegurar lo mejor del campo peruano.
            </p>
            <p className="leading-relaxed text-gray-800">
              Promovemos cultivos eficientes e innovadores en la producción de
              frutas y verduras orgánicas y convencionales, contribuyendo al
              desarrollo de una agricultura consciente, saludable y respetuosa
              con el medio ambiente.
            </p>
          </div>

          {/* Right - Modern Image Grid */}
          <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[500px]">
            {/* Large image - top left */}
            <div className="col-span-4 row-span-4 overflow-hidden shadow-lg rounded-2xl group">
              <img
                src={nosotros2}
                alt="Campo agrícola"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Medium image - top right */}
            <div className="col-span-2 row-span-3 overflow-hidden shadow-lg rounded-2xl group">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
                alt="Vegetales frescos"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Small image - middle right */}
            <div className="col-span-2 row-span-3 overflow-hidden shadow-lg rounded-2xl group">
              <img
                src={nosotros3}
                alt="Agricultura orgánica"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom left small */}
            <div className="col-span-2 row-span-2 overflow-hidden shadow-lg rounded-2xl group">
              <img
                src="https://img.freepik.com/foto-gratis/comunidad-personas-que-trabajan-juntas-agricultura-cultivar-alimentos_23-2151205703.jpg?t=st=1759874964~exp=1759878564~hmac=a031485a4afe18b580f93cbf16328b8a467b8fb4205160a7d863c54290d01e50&w=1480"
                alt="Frutas orgánicas"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom middle */}
            <div className="col-span-2 row-span-2 overflow-hidden shadow-lg rounded-2xl group">
              <img
                src={nosotros4}
                alt="Cosecha"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;
