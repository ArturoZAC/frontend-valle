import { MdOutlineArrowForward } from "react-icons/md";
import { fondo_nosotros } from "../shared/images";
import { BannerInterna } from "./content/BannerInterna";
import { ContentMain } from "./content/ContentMain";
import { Link } from "react-router-dom";
import { serviciosData } from "../shared/DataTemporal";
import { Servicio } from "../shared/Interfaces";
import UpAnimation from "./content/animation/UpAnimation";

export const Servicios = () => {
  return (
    <>
      <BannerInterna banner={fondo_nosotros} title="Servicios" />
      <section className="bg-primary-main fondoServicios">
        <ContentMain className="py-20">
          <p className="mb-3 font-bold text-center uppercase text-white font-archivoExpanded">
            <span className="inline-block px-2 py-1 mr-1 rounded-md text-white bg-tercero-main">
              Nuestros{" "}
            </span>
            servicios
          </p>
          <h2 className="font-extrabold text-center md:text-3xl lg:text-4xl font-archivoExpanded text-white">
            Seguridad, Conectividad y Rendimiento para{" "}
            <span className="text-primary-500">
              Potenciar tu Infraestructura
            </span>
          </h2>
          <div className="grid w-full gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">
            {serviciosData.map((servicio: Servicio, index: number) => (
              <UpAnimation
                key={servicio.id}
                delay={Number(`0.${index}`)}
                duration={0.5}
              >
                <div
                  key={`SRV-00${index}`}
                  className="relative z-10 w-full h-full px-6 py-10 overflow-hidden bg-transparent cardServicios group rounded-main"
                >
                  <img
                    alt=""
                    className="absolute top-0 left-0 block object-cover w-full h-full -z-20"
                  />
                  <div className="p-4 mb-8 transition-all duration-500 ease-out border w-fit border-primary-main bg-white rounded-main group-hover:border-white-main">
                  </div>
                  <h5 className="text-xl font-bold transition-all duration-500 ease-out text-dark font-archivoExpanded group-hover:text-white">
                  </h5>
                  <p className="mt-5 transition-all duration-500 ease-out text-black-900 group-hover:text-white-100">
                    {servicio.descripcion}
                  </p>
                  <Link
                    to={`/servicio/${servicio.id}`}
                    className="flex items-center gap-2 mt-6 text-sm font-bold transition-all duration-500 ease-out text-secondary-main font-archivoExpanded group-hover:text-white-100"
                  >
                    Ver más <MdOutlineArrowForward />
                  </Link>
                </div>
              </UpAnimation>
            ))}
          </div>
        </ContentMain>
      </section>
    </>
  );
};
