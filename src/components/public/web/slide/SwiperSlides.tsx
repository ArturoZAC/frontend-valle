import { Swiper, SwiperSlide } from "swiper/react";

// @ts-expect-error: Type 'any' has no properties in common with type 'PaginationOptions'
import { EffectFade, Autoplay, Navigation } from "swiper";
import "swiper/css";
import { motion } from "framer-motion";

import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ContentMain } from "../../content/ContentMain";
import { slidesValues } from "../../../shared/Interfaces";
import useAuth from "../../../../hooks/useAuth";
import { nosotros1, nosotros2, slide1, slide2 } from "../../../shared/images";
import { scrollToSection } from "../../../../utils/ScrollToSection";
import { redirectToWhatsApp } from "../../../../utils/Wsp";

export const SwiperSlides = (): JSX.Element => {
  //   const [slides, setSlides] = useState([])
  const [loadSlides] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const { topFixed } = useAuth();

  const slides: slidesValues[] = [
    {
      imagen1: slide2,
      imagen2: nosotros1,
      titulo1: "Del campo peruano",
      titulo2: "a tu mesa con calidad",
      descripcion:
        "En Valle Agrícola producimos y comercializamos frutas, verduras e insumos agrícolas con los más altos estándares de calidad, garantizando productos frescos y saludables.",
      id: "1",
      text: "",
      enlace: "#nosotros",
    },
    {
      imagen1: slide1,
      imagen2: nosotros2,
      titulo1: "Comprometidos con una",
      titulo2: "agricultura sostenible",
      descripcion:
        "Promovemos una producción responsable que apoya a los agricultores, protege el ambiente y fomenta el desarrollo sostenible del sector agrícola peruano.",
      id: "2",
      text: "",
      enlace: "#servicios",
    },
  ];

  const handleSlideChange = (swiper: any): void => {
    setCurrentSlide(swiper.activeIndex);
  };

  //   useEffect(() => {
  //     Promise.all([getData('allBanners', setSlides)]).then(() => {
  //       setLoadSlides(false)
  //     })
  //   }, [])

  return (
    <Swiper
      modules={[Autoplay, EffectFade, Navigation]}
      className={`relative swp-slide--main ${topFixed ? "mt-[111px]" : ""}`}
      allowTouchMove={false}
      id="home"
      navigation={{
        nextEl: ".parriba",
        prevEl: ".pabajo",
      }}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      onSlideChange={handleSlideChange}
    >
      {loadSlides ? (
        <SwiperSlide
          className="bg-left bg-cover lg:bg-top animate-pulse blur-3xl"
          style={{ backgroundImage: `url(${slide1})` }}
        ></SwiperSlide>
      ) : (
        <>
          {slides.map((slide: slidesValues, index: number) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  backgroundImage: `url(${slide.imagen1})`,
                }}
                className="relative z-10 flex w-full h-full bg-left bg-cover lg:bg-center before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black before:opacity-30 before:-z-10"
              >
                <ContentMain className="flex flex-col items-center justify-center w-full gap-16 py-20 md:py-0 sm:gap-0 lg:flex-row xl:justify-start">
                  <motion.div
                    className="w-full max-w-3xl mx-auto"
                    initial="hidden"
                    animate={currentSlide === index ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1 },
                      },
                    }}
                    transition={{ duration: 1 }}
                  >
                    {/* <span className="text-[23px] font-charmander text-white mx-auto block  text-center font-futuroItalic rounded-full bg-verde w-fit px-6 py-1 text-lg">
                      PsicoBien
                    </span> */}

                    <h1 className="mt-6 text-3xl text-center text-white font-futuroNormal text-shadow md:text-4xl lg:text-5xl xl:text-7xl">
                      {slide.titulo1}{" "}
                      <motion.span
                        initial="hidden"
                        animate={currentSlide === index ? "visible" : "hidden"}
                        variants={{
                          hidden: { opacity: 0, y: 50 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 1 },
                          },
                        }}
                        transition={{ duration: 1 }}
                        className={
                          " inline-block text-primary-main font-alderaRegular "
                        }
                      >
                        {slide.titulo2}
                      </motion.span>
                    </h1>
                    <motion.div
                      initial="hidden"
                      animate={currentSlide === index ? "visible" : "hidden"}
                      variants={slideVariants}
                      dangerouslySetInnerHTML={{
                        __html: slide.descripcion,
                      }}
                      className="w-full mt-5 text-sm text-center text-white md:text-lg lg:text-xl "
                    ></motion.div>
                    <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
                      <a
                        href={slide.enlace}
                        onClick={(e) => {
                          scrollToSection(e, `${slide.enlace}`);
                          redirectToWhatsApp(
                            "+51997125302",
                            "Hola estoy interesado en sus servicios."
                          );
                        }}
                        className="bg-secondary-main text-white group  flex justify-center items-center gap-1 w-fit rounded-main px-8 font-semibold text-sm md:text-base lg:text-lg py-2  transition-all hover:bg-primary-main hover:border-primary-main hover:text-white hover:scale-[1.02]"
                      >
                        Comencemos
                      </a>
                    </div>
                  </motion.div>
                </ContentMain>
              </div>
            </SwiperSlide>
          ))}
        </>
      )}

      <div className="absolute inset-0 flex items-center justify-between my-auto px-4 h-[200px] z-50 pointer-events-none">
        <button className="p-2 transition-all duration-200 rounded-full shadow-lg pointer-events-auto parriba text-primary-main bg-white/80 hover:bg-primary-main hover:text-white">
          <IoChevronBack className="text-4xl " />
        </button>
        <button className="p-2 transition-all duration-200 rounded-full shadow-lg pointer-events-auto pabajo text-primary-main bg-white/80 hover:bg-primary-main hover:text-white">
          <IoChevronForward className="text-4xl " />
        </button>
      </div>
    </Swiper>
  );
};
