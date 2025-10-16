import { BannerInterna } from "./content/BannerInterna";
import { ContentMain } from "./content/ContentMain";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Global } from "../../helper/Global";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import axios from "axios";
import { Errors } from "../shared/Errors";
import { Servicio } from "../shared/Interfaces";
import { SchemaContacto } from "../shared/Schemas";
import { serviciosData } from "../shared/DataTemporal";
import { slide1 } from "../shared/images";
import ReCAPTCHA from "react-google-recaptcha";

export const DetailServicioPage = () => {
  const { id } = useParams();
  const [captchaToken, setCaptchaToken] = useState<
    string | undefined | null | Blob
  >("");

  const refCAPTCHA = React.createRef<ReCAPTCHA>();
  // FUNCION CHANGE DE CAPTCHA
  const Change = () => {
    setCaptchaToken(refCAPTCHA.current?.getValue());
  };

  const [loadServicio, setLoadServicio] = useState<boolean>(true);
  const [, setServicio] = useState<Servicio>({
    descripcion: "",
    id: "",
    categoria: "",
    titulo: "",
  });
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoadServicio(true);

    const servicioSelected = serviciosData.find(
      (servicio: Servicio) => servicio.id === id
    );

    setServicio(
      servicioSelected ?? {
        descripcion: "",
        id: "",
        categoria: "",
        titulo: "",
      }
    );
    setLoadServicio(false);
  }, [id]);

  const [loadingCorreo, setLoadingCorreo] = useState(false);

  const enviarCorreo = async (values: any): Promise<void> => {
    setLoadingCorreo(true);

    const data = new FormData();
    data.append("nombres", values.nombres);
    data.append("celular", values.celular);
    data.append("mensaje", values.mensaje);
    data.append("email", values.email);

    try {
      if (!captchaToken) {
        Swal.fire(
          "Error al enviar el correo",
          "Debes completar el campo de captcha",
          "error"
        );
        setLoadingCorreo(false);
        return;
      }
      const respuesta = await axios.post(`${Global.url}/enviarCorreo`, data);

      if (respuesta.data.status === "success") {
        Swal.fire("Correo enviado", "", "success");
        resetForm();
      } else {
        Swal.fire("Error al enviar el correo", "", "error");
        resetForm();
      }
    } catch (error) {
      console.log(error);
      Swal.fire("Error al enviar el correo", "", "error");
    }
    setLoadingCorreo(false);
  };
  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      nombres: "",
      celular: "",
      email: "",
      mensaje: "",
      servicio: "",
    },
    validationSchema: SchemaContacto,
    onSubmit: enviarCorreo,
  });

  useEffect(() => {
    if (errors && isSubmitting) {
      const firstErrorKey = Object.keys(errors)[0];
      const firstErrorElement = document.getElementsByName(firstErrorKey)[0];
      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    }
  }, [touched, errors, isSubmitting]);
  return (
    <>
      <BannerInterna banner={slide1} title={""} />
      <section className="w-full">
        <ContentMain className="flex flex-col gap-5 py-16 lg:flex-row">
          <div className="w-full lg:w-[70%] rounded-xl bg-gray-100 p-3 md:p-5">
            {loadServicio ? (
              <div className="w-full max-h-[350px] lg:max-h-[510px] lg:h-[510px] bg-gray-300 rounded-xl animate-pulse"></div>
            ) : (
              <picture className="max-h-[350px] lg:max-h-[510px] lg:h-[510px]">
                <img
                  src={``}
                  alt=""
                  className="block w-full object-cover rounded-xl h-fit max-h-[350px] lg:max-h-[510px] lg:h-[510px]"
                />
              </picture>
            )}
            {loadServicio ? (
              <div className="w-[320px] mt-8 mb-2 h-[28px] bg-gray-300 animate-pulse"></div>
            ) : (
              <h5 className="mt-8 mb-2 text-xl font-black font-archivoExpanded text-primary-main">
              </h5>
            )}

            {loadServicio ? (
              <>
                <div className="w-full h-[18px] bg-gray-300 animate-pulse mb-2"></div>
                <div className="w-full h-[18px] bg-gray-300 animate-pulse mb-2"></div>
                <div className="w-full h-[18px] bg-gray-300 animate-pulse mb-2"></div>
                <div className="w-full h-[18px] bg-gray-300 animate-pulse mb-2"></div>
              </>
            ) : (
              <div
                className="mb-4 text-black-900"
              ></div>
            )}
          </div>
          <div className="w-full lg:w-[30%] p-4">
            <form
              className="px-6 py-8 rounded-md bg-darkcolor-main"
              onSubmit={handleSubmit}
            >
              <div className="mb-2">
                <label className="text-sm text-white">
                  Nombre o Empresa:
                </label>
                <input
                  type="text"
                  name="nombres"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md outline-none"
                  placeholder="Nompre o empresa"
                />
                <Errors errors={errors.nombres} touched={touched.nombres} />
              </div>

              <div className="mb-2">
                <label className="text-sm text-white">
                  Número de Teléfono:
                </label>
                <input
                  type="tel"
                  id="numeroTelefono"
                  name="celular"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md outline-none"
                  placeholder="Número de teléfono"
                />
                <Errors errors={errors.celular} touched={touched.celular} />
              </div>

              <div className="mb-2">
                <label className="text-sm text-white">
                  Correo Electrónico:
                </label>
                <input
                  type="email"
                  id="correoElectronico"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md outline-none"
                  placeholder="email"
                />
                <Errors errors={errors.email} touched={touched.email} />
              </div>

              <div className="mb-2">
                <label className="text-sm text-white">
                  Mensaje Adicional:
                </label>
                <textarea
                  id="mensajeAdicional"
                  name="mensaje"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mensaje}
                  className="w-full px-3 py-2 text-sm border border-gray-400 rounded-md outline-none"
                  placeholder="Comentario o consulta adicional"
                ></textarea>
                <Errors errors={errors.mensaje} touched={touched.mensaje} />
              </div>
              <div className="flex justify-center w-full mb-5 bg-black">
                <ReCAPTCHA
                  ref={refCAPTCHA}
                  onChange={Change}
                  sitekey="6LdptTUqAAAAAEN7szwumM1ksjY_WBlDGfSv6PPq"
                />
              </div>
              <div>
                <button
                  type={loadingCorreo ? "button" : "submit"}
                  className="flex justify-center w-full py-3 text-sm text-center text-white rounded-main bg-primary-main text-darkcolor-main"
                >
                  {loadingCorreo ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </ContentMain>
      </section>
    </>
  );
};
