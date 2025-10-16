import { BsArrowUp } from "react-icons/bs";
import { ico, logo_white, lp } from "../../shared/images";
import { scrollToSection } from "../../../utils/ScrollToSection";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export const Footer = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="py-8 text-white bg-secondary-main">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">
                <img
                  src={logo_white}
                  alt=""
                  className="block w-32 mx-auto md:mx-0"
                />
              </div>
              <p className="mt-2 text-gray-300">
              En Valle Agrícola L.A. producimos y comercializamos frutas, verduras e insumos agrícolas, abasteciendo el mercado nacional y extranjero con productos frescos y de alta calidad.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8">
              <a
                href="#inicio"
                onClick={(e) => {
                  scrollToSection(e, "#inicio");
                }}
                className="text-gray-300 transition-colors hover:text-white"
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                onClick={(e) => {
                  scrollToSection(e, "#nosotros");
                }}
                className="text-gray-300 transition-colors hover:text-white"
              >
               Nosotros
              </a>
              <a
                href="#servicios"
                onClick={(e) => {
                  scrollToSection(e, "#servicios");
                }}
                className="text-gray-300 transition-colors hover:text-white"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                onClick={(e) => {
                  scrollToSection(e, "#contacto");
                }}
                className="text-gray-300 transition-colors hover:text-white"
              >
                Contacto
              </a>
        
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 pt-6 mt-6 text-sm text-center border-t border-gray-700 md:flex-row text-white-100">
            <p>
              &copy; {new Date().getFullYear()} Valle Agrícola. Todos los derechos
              reservados{" "}
            </p>{" "}
            <p className="flex items-center gap-1">
              - Design by:{" "}
              <a href="https://logosperu.com.pe/" target="_blank">
                <img src={lp} alt="" className="block w-[18px]" />
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="fixed p-3 transition-all transform rounded-full shadow-lg bottom-6 right-6 bg-verde hover:bg-opacity-90 hover:scale-110 focus:outline-none"
            aria-label="Volver arriba"
          >
            <BsArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </footer>

      <FloatingWhatsApp
        phoneNumber={`+51`}
        accountName="Valle agrícola"
        statusMessage="En linea"
        placeholder="Envianos un mensaje"
        chatMessage="Hola un gusto! 🤝, Como podemos ayudarte?"
        avatar={ico}
        allowEsc
        allowClickAway
        notification
        notificationSound
        darkMode
        className="primer_wsp"
      />
    </>
  );
};
