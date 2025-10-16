
import { SwiperSlides } from "./web/slide/SwiperSlides";
import { ContentMain } from "./content/ContentMain";

import {  slide2 } from "../shared/images";


import NosotrosSection from "./secciones/SectionNosotros";
import CTASection from "./secciones/CTASeccion";
import ServiciosSection from "./secciones/ServiciosSeccion";
import ContactoSection from "./secciones/ContactoSeccion";


export const Home = () => {


  return (
    <>
      <section className="relative" id="inicio">
        <SwiperSlides />
      </section>
      <NosotrosSection />
      <section className="w-full bg-secondary-dark">
        <ContentMain className="grid gap-5 pb-20 md:grid-cols-2">
          <div className="">
            <h5 className="mb-5 text-2xl text-center md:text-3xl lg:text-4xl text-secondary-main font-futuroNormal">
              Misión
            </h5>
            <p className="text-gray-800">
              Llegar a la excelencia mediante el reconocimiento de nuestros
              clientes, como una empresa que aporte y contribuya con el
              desarrollo sostenible de la agricultura, y la calidad de vida de
              nuestros consumidores
            </p>
          </div>
          <div className="">
            <h5 className="mb-5 text-2xl text-center md:text-3xl lg:text-4xl text-secondary-main font-futuroNormal">
              Visión
            </h5>
            <p className="text-gray-800">
              Ser un referente nacional e internacional en el fortalecimiento
              del bienestar integral de las personas, destacándonos por la
              innovación y la calidad humana que impregna cada uno de nuestros
              servicios, transformando vidas y generando un impacto positivo y
              duradero
            </p>
          </div>
        </ContentMain>
      </section>
      <CTASection
        backgroundImage={slide2}
        title="Conecta con la frescura del campo peruano"
        buttonText="Contáctanos"
        description="Productos agrícolas de calidad que motivan tu bienestar"
      />
      <ServiciosSection />

      <CTASection
        backgroundImage={slide2}
        title="Conecta con la frescura del campo peruano"
        buttonText="Contáctanos"
        description="Productos agrícolas de calidad que motivan tu bienestar"
      />

      <ContactoSection/>
  
      
    </>
  );
};
