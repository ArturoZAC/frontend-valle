import * as Yup from "yup";

export const SchemaCompras = Yup.object().shape({
  nombre: Yup.string()
    .required("Este campo es requerido")
    .min(3, "Debe tener como minimo 3 digitos"),
  apellido: Yup.string()
    .required("Este campo es requerido")
    .min(3, "Debe tener como minimo 3 digitos"),
  celular1: Yup.string()
    .required("Este campo es requerido")
    .min(9, "El numero debe tener 9 digitos")
    .max(9, "El numero debe tener 9 digitos"),
  email: Yup.string()
    .email("Email invalido")
    .required("Este campo es requerido"),
  comentario: Yup.string(),
  despacho: Yup.string().required("Este campo es requerido"),
  direccion: Yup.string().min(20, "Sea mas especifico").nullable(),
  departamento: Yup.string().nullable(),
  distrito: Yup.string().nullable(),
});

export const SchemaContacto = Yup.object().shape({
  nombres: Yup.string()
    .required("Este campo es requerido")
    .min(3, "Debe tener como minimo 3 digitos"),
  servicio: Yup.string()
    .required("Este campo es requerido")
    .min(3, "Debe tener como minimo 3 digitos"),
  email: Yup.string()
    .required("Este campo es requerido")
    .email("Ingrese un email valido"),
  mensaje: Yup.string().required("Este campo es requerido"),
});

export const SchemaPayment = Yup.object().shape({
  nombres: Yup.string()
    .required("Este campo es requerido")
    .min(3, "Debe tener como minimo 3 digitos"),
  apellidos: Yup.string()
    .required("Este campo es requerido")
    .min(3, "Debe tener como minimo 3 digitos"),
  email: Yup.string()
    .required("Este campo es requerido")
    .email("Introduce un email válido"),
  ruc: Yup.string()
    .required("Este campo es requerido")
    .min(8, "Debe tener como minimo 8 digitos"),
  direccion: Yup.string()
    .required("Este campo es requerido")
    .min(3, "Debe tener como minimo 3 digitos"),
  celular: Yup.string()
    .required("Este campo es requerido")
    .min(7, "Debe tener como minimo 7 digitos")
    .max(9, "Debe tener como maximo 9 digitos"),
});

export const SchemaCV = Yup.object().shape({
  nombreCompleto: Yup.string()
    .required("El nombre completo es obligatorio")
    .min(3, "Debe tener al menos 3 caracteres"),

  correo: Yup.string()
    .email("Ingresa un correo válido")
    .required("El correo electrónico es obligatorio"),

  telefono: Yup.string()
  .required("El teléfono es obligatorio"),

  motivacion: Yup.string()
    .required("Este campo es obligatorio")
    .min(10, "Cuéntanos un poco más sobre tu motivación y experiencia"),

  cv: Yup.mixed()
    .required("Adjunta tu CV en formato PDF")
    .test(
      "fileFormat",
      "Solo se acepta archivo PDF",
      (value: any) => value && value.type === "application/pdf"
    )
    .test(
      "fileSize",
      "El archivo no debe superar los 5MB",
      (value: any) => value && value.size <= 5 * 1024 * 1024
    ),
});
