import { BannerInterna } from "./content/BannerInterna";
import { fondo_inicio, fondo_nosotros, mision, vision } from "../shared/images";
import { ContentMain } from "./content/ContentMain";
import ZoomAnimation from "./content/animation/ZoomAnimation";
import TranslateAnimation from "./content/animation/TranslateAnimation";

export const Nosotros = () => {
  return (
    <>
      <BannerInterna banner={fondo_inicio} title="Nosotros" />
      <section className="relative z-10 w-full">
        <img
          src={fondo_nosotros}
          alt=""
          className="absolute block object-cover object-center w-full h-full opacity-5 -z-10"
        />
        <ContentMain className="flex flex-col gap-10 py-20 overflow-hidden lg:flex-row">
          <div className="w-full">
            <ZoomAnimation delay={0.1} duration={0.3}>
              <p className="mb-3 font-bold text-center uppercase font-archivoExpanded">
                <span className="inline-block px-2 py-1 mr-1 rounded-md text-white bg-tercero-main">
                  Sobre{" "}
                </span>
                nosotros
              </p>
            </ZoomAnimation>
            <TranslateAnimation delay={0.2} direction="left" duration={0.3}>
              <h2 className="text-5xl font-extrabold text-center font-archivoExpanded text-primary-main">
                Conectando el Futuro
              </h2>
            </TranslateAnimation>
            <p className="mt-6 text-xl text-center text-black-900">
              En el mundo de las telecomunicaciones, la responsabilidad es un
              pilar fundamental que guía todas nuestras acciones. Nos
              comprometemos a ofrecer servicios de calidad, para que cada
              cliente reciba la atención y el soporte que merece. Nuestra
              responsabilidad implica anticipar las necesidades de nuestros
              usuarios y adaptarnos a los cambios del mercado. Creemos
              firmemente que una empresa responsable es aquella que actúa con
              ética y transparencia. Nuestro compromiso es ser un referente en
              el sector, promoviendo prácticas sostenibles y respetuosas con el
              medio ambiente. Juntos, construimos un futuro más conectado y
              responsable.
            </p>
            <p className="mt-3 text-xl text-center text-black-900">
              El compromiso con nuestros clientes es la esencia de nuestra
              filosofía empresarial. Nos esforzamos por crear relaciones
              duraderas basadas en la confianza y la comunicación efectiva. Al
              trabajar en telecomunicaciones, entendemos la importancia de
              disponibilidad y la accesibilidad para resolver cualquier
              inquietud. Cada miembro de nuestro equipo comparte esta visión de
              responsabilidad y compromiso. Estamos dedicados a innovar
              constantemente, mejorando nuestros servicios para brindar
              soluciones efectivas y adaptadas a las necesidades cambiantes del
              mercado. Juntos, logramos un impacto positivo en la vida de las
              personas y en la sociedad.
            </p>
          </div>
        </ContentMain>
        <ContentMain className="flex flex-col gap-8 pb-20 overflow-hidden lg:flex-row">
          <div className="w-full lg:w-1/2 ">
            <TranslateAnimation delay={0.2} direction="left" duration={0.3}>
              <div className="w-full h-full gap-3 px-10 py-5 rounded-main bg-primary-main">
                <div className="flex items-center w-full">
                  <img src={mision} alt="" className="block w-[70px]" />
                  <p className="text-3xl font-bold font-archivoExpanded text-white">
                    Misión
                  </p>
                </div>
                <p className="mt-3 text-white-100">
                  Nuestra misión es ofrecer soluciones de telecomunicaciones de
                  alta calidad, fundamentadas en la responsabilidad y el
                  compromiso con nuestros clientes. Nos dedicamos a crear
                  relaciones duraderas basadas en la confianza, proporcionando
                  un servicio excepcional y adaptándonos a las necesidades
                  cambiantes del mercado. A través de la innovación constante y
                  prácticas sostenibles, buscamos mejorar la vida de las
                  personas y contribuir al desarrollo de una sociedad más
                  conectada.
                </p>
              </div>
            </TranslateAnimation>
          </div>
          <div className="w-full lg:w-1/2 ">
            <TranslateAnimation delay={0.2} direction="right" duration={0.3}>
              <div className="w-full h-full gap-3 px-10 py-5 rounded-main bg-primary-main">
                <div className="flex items-center w-full">
                  <img src={vision} alt="" className="block w-[70px]" />
                  <p className="text-3xl font-bold font-archivoExpanded text-white">
                    Visión
                  </p>
                </div>
                <p className="mt-3 text-white-100">
                  Nuestra visión es ser un referente en el sector de las
                  telecomunicaciones, reconocidos por nuestra ética,
                  transparencia y responsabilidad social. Aspiramos a liderar el
                  mercado mediante el compromiso con la excelencia en el
                  servicio y la satisfacción del cliente. En un mundo en
                  constante evolución, nos proponemos ser pioneros en soluciones
                  tecnológicas que transformen la manera en que nos comunicamos,
                  promoviendo un futuro más accesible y sostenible para todos.
                </p>
              </div>
            </TranslateAnimation>
          </div>
        </ContentMain>
      </section>
    </>
  );
};
