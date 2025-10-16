import {
  BsEnvelopeCheckFill,
  BsFacebook,
  BsFillTelephoneFill,
  BsLinkedin,
} from "react-icons/bs";
import { fondo_inicio } from "../shared/images";
import { FormContacto } from "./contacto/FormContacto";
import { BannerInterna } from "./content/BannerInterna";
import { ContentMain } from "./content/ContentMain";

export const Contacto = () => {

  return (
    <>
      <BannerInterna banner={fondo_inicio} title="Contacto" />
      <section>
        <ContentMain className="py-20">
          <h2 className="mb-12 text-4xl font-bold text-center font-archivoExpanded text-primary-main">
            ¡Solicita una{" "}
            <span className="text-secondary">cotización ahora!</span>
          </h2>
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <p className="mb-4 text-lg text-black">
                Estamos aquí para ayudarte a encontrar la solución tecnológica
                ideal para tu negocio. Si tienes alguna consulta o deseas
                conocer más sobre nuestros servicios en telecomunicaciones, TI o
                seguridad electrónica, no dudes en contactarnos.
              </p>
              <ul className="flex flex-col gap-4 text-xl font-medium">
                <li className="flex items-center gap-3 text-primary-900">
                  <BsFillTelephoneFill className="text-primary-950" /> (+51) 930
                  600 019
                </li>
                <li className="flex items-center gap-3 text-primary-900">
                  <BsEnvelopeCheckFill className="text-primary-950" />{" "}
                  ventas@fz-telecom.com
                </li>
              </ul>
              <div className="flex gap-4 mt-12 text-3xl text-primary-950">
                <a href="">
                  <BsFacebook />
                </a>
                <a href="">
                  <BsLinkedin />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <FormContacto
              />
            </div>
          </div>
        </ContentMain>
      </section>
    </>
  );
};
