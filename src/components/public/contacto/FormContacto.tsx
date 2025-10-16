import { useEffect, useRef, useState } from "react";
import { SchemaContacto } from "../../shared/Schemas";
import axios from "axios";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { Global } from "../../../helper/Global";
import { InputForm } from "./InputForm";
import { Errors } from "../../shared/Errors";
import ReCAPTCHA from "react-google-recaptcha";
export const FormContacto = () => {
  const [loadingCorreo, setLoadingCorreo] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null | Blob>(
    ""
  );
  const enviarCorreo = async (): Promise<void> => {
    setLoadingCorreo(true);

    const data = new FormData();
    data.append("nombres", values.nombres);
    data.append("servicio", values.servicio);
    data.append("mensaje", values.mensaje);
    data.append("email", values.email);

    try {
      if (!recaptchaToken) {
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
      servicio: "",
      email: "",
      mensaje: "",
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
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-white">
            Nombre
          </label>
          <InputForm
            placeholder="Tu nombre"
            type="text"
            name="nombres"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.nombres}
          />
          <Errors errors={errors.nombres} touched={touched.nombres} />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-white"
          >
            Email
          </label>
          <InputForm
            placeholder="Tu email@gmail.com"
            type="email"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
          />
          <Errors errors={errors.email} touched={touched.email} />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="subject"
          className="text-sm font-medium text-white"
        >
          Servicio
        </label>
        <select
          name="servicio"
          onChange={handleChange}
          onBlur={handleBlur}
          className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-secondary-main focus:border-secondary-main"
          value={values.servicio}
        >
          <option value="">Selecciona una opción</option>
          <option value="Servicios para ti y tu familia">
            Servicios para ti y tu familia
          </option>
          <option value="Servicios para tu empresa">
            Servicios para tu empresa
          </option>
          <option value="Ambos servicios">Ambos servicios</option>
          <option value="Otros">Otros</option>
        </select>
        <Errors errors={errors.servicio} touched={touched.servicio} />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-white"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="mensaje"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.mensaje}
          placeholder="¿Cómo podemos ayudarte?"
          className="min-h-[120px] flex  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          required
        />
        <Errors errors={errors.mensaje} touched={touched.mensaje} />
      </div>
      <div className="w-full">
        <ReCAPTCHA
          sitekey="6Lf34jUqAAAAAL1wqO9CZYMWgyFAoZ9A13cdJSBX"
          ref={recaptchaRef}
          onChange={(token) => {
            setRecaptchaToken(token);
          }}
        />
      </div>
      <button
        type={loadingCorreo ? "button" : "submit"}
        className="w-full py-3 rounded-full bg-verde text-white hover:bg-primary-700"
      >
        {loadingCorreo ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
};
