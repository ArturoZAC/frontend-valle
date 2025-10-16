import { useEffect, useRef, useState } from "react";
import { InputForm } from "./InputForm";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { SchemaCV } from "../../shared/Schemas";
import axios from "axios";
import { Global } from "../../../helper/Global";
import { Errors } from "../../shared/Errors";
import ReCAPTCHA from "react-google-recaptcha";

export const FormCV = () => {
  const [loadingCorreo, setLoadingCorreo] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null | Blob>(
    ""
  );
  const enviarCorreo = async (): Promise<void> => {
    setLoadingCorreo(true);

    const data = new FormData();
    data.append("nombres", values.nombreCompleto);
    data.append("celular", values.telefono);
    data.append("mensaje", values.motivacion);
    data.append("email", values.correo);
    // Adjuntar el archivo PDF
    if (values.cv) {
      data.append("cv", values.cv); // <-- nombre "cv" debe coincidir con el esperado en backend
    }

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
      const respuesta = await axios.post(`${Global.url}/enviarCV`, data);

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
    setFieldValue,
    errors,
    values,
    touched,
    handleBlur,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      nombreCompleto: "",
      correo: "",
      telefono: "",
      motivacion: "",
      cv: null, // muy importante: iniciar con null
    },
    validationSchema: SchemaCV,
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
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Nombre completo
        </label>
        <InputForm
          placeholder="Tu nombre completo"
          type="text"
          name="nombreCompleto"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.nombreCompleto}
        />
        <Errors
          errors={errors.nombreCompleto}
          touched={touched.nombreCompleto}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Correo electrónico
        </label>
        <InputForm
          placeholder="Tu correo"
          type="email"
          name="correo"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.correo}
        />
        <Errors errors={errors.correo} touched={touched.correo} />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Teléfono
        </label>
        <InputForm
          placeholder="987 654 321"
          type="tel"
          name="telefono"
          value={values.telefono}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <Errors errors={errors.telefono} touched={touched.telefono} />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          ¿Por qué quieres unirte a nuestro equipo?
        </label>
        <textarea
          name="motivacion"
          rows={3}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.motivacion}
          className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-secondary-main focus:border-secondary-main"
          placeholder="Cuéntanos brevemente sobre tu motivación y experiencia..."
        />
        <Errors errors={errors.motivacion} touched={touched.motivacion} />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Adjuntar CV (PDF)
        </label>
        <div className="relative p-4 transition-all border-2 border-gray-300 border-dashed rounded-lg hover:border-secondary-main">
          <input
            type="file"
            accept=".pdf"
            required
            className="w-full"
            onChange={(event) => {
              const file = event.currentTarget.files?.[0];

              if (file) {
                const maxSizeInBytes = 3 * 1024 * 1024; // 3MB

                if (file.size > maxSizeInBytes) {
                  alert("El archivo excede el tamaño máximo de 3MB.");
                  event.target.value = ""; // limpia el input
                  setFieldValue("cv", null);
                  return;
                }

                setFieldValue("cv", file);
              } else {
                setFieldValue("cv", null);
              }
            }}
          />
          <p className="mt-1 text-sm text-gray-500">Formato PDF, máximo 3MB</p>
        </div>
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
      <div className="pt-3">
        <button
          type={loadingCorreo ? "button" : "submit"}
          className="w-full px-6 py-3 font-semibold transition-all rounded-lg shadow-md text-white bg-gradient-to-r from-secondary-800 to-secondary-900 hover:from-secondary-900 hover:to-secondary-main focus:outline-none focus:ring-2 focus:ring-secondary-main focus:ring-offset-2"
        >
          {loadingCorreo ? "Enviando..." : "Enviar mi solicitud"}
        </button>
        <p className="mt-3 text-sm text-center text-gray-500">
          Te contactaremos dentro de las próximas 48 horas
        </p>
      </div>
    </form>
  );
};
