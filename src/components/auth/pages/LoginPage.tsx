import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface User {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Email Requerido"),
    password: Yup.string().required("Password Requerido"),
  });

  const handleLogin = (values: User) => {
    console.log({ values });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-[#172617] purple-600 w-1/2 flex flex-col justify-center items-center min-h-screen">
        <div className="bg-[#253725] p-10 rounded-md border-[#3A532D] border flex flex-col gap-y-5">
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-[#8BC34B]">Iniciar Sesion</p>
            <p className="text-white-300">
              Ingresa tus credenciales para continuar
            </p>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {
              (/* { errors, touched } */) => (
                <Form className="text-white flex flex-col gap-y-6">
                  <div className="flex flex-col gap-y-3">
                    <label>Usuario</label>
                    <Field
                      name="email"
                      className="bg-[#304130] outline- border border-[#3A532D] rounded-md py-1.5 px-2 min-w-[400px] outline-none focus:outline focus:outline-2 focus:outline-[#80B546] focus:transition-all focus:duration-300"
                      type="text"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label>Password</label>
                    <Field
                      name="password"
                      className="bg-[#304130] outline- border border-[#3A532D] rounded-md py-1.5 px-2 min-w-[400px] outline-none focus:outline focus:outline-2 focus:outline-[#80B546] focus:transition-all focus:duration-300"
                      type="password"
                    />

                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#DDF224] to-[#8BC34A] hover:from-[#E4F85A] hover:to-[#B2E672] py-2 rounded-md text-[#304130] font-extrabold transition-all duration-300 hover:shadow-lg hover:shadow-[#8BC34A]/40"
                  >
                    INGRESAR
                  </button>
                </Form>
              )
            }
          </Formik>
        </div>
      </div>
      <div className="bg-black w-1/2 flex flex-col justify-center items-center min-h-screen"></div>
    </div>
  );
};
