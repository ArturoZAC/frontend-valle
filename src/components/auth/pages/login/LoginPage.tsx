import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { LeftSide } from "./components/LeftSide";
import { useContext } from "react";
import AuthContext from "../../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/images/logo/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

interface User {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Email invalido").required("Email Requerido"),
    password: Yup.string().required("Password Requerido"),
  });

  const handleLogin = async (values: User) => {
    await login(values.email, values.password);

    navigate("/admin");
  };

  return (
    <>
      <div className="bg-[#396739]  w-1/2 flex flex-col justify-center items-center min-h-screen">
        <div className="flex justify-center mb-6">
          <img
            src={logo}
            alt="Admin Panel Logo"
            className="w-[224px] h-auto object-contain"
          />
        </div>

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
                    <div className={`flex items-center gap-x-2 text-[#8BC34B]`}>
                      <FaRegUserCircle />
                      <label>Usuario</label>
                    </div>
                    <Field
                      name="email"
                      className="bg-[#304130] outline- border border-[#3A532D] rounded-md py-1.5 px-2 min-w-[350px] outline-none focus:outline focus:outline-2 focus:outline-[#80B546] focus:transition-all focus:duration-300"
                      type="text"
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <div className={`flex items-center gap-x-2 text-[#8BC34B]`}>
                      <RiLockPasswordFill />
                      <label>Password</label>
                    </div>
                    <Field
                      name="password"
                      className="bg-[#304130] outline- border border-[#3A532D] rounded-md py-1.5 px-2 min-w-[350px] outline-none focus:outline focus:outline-2 focus:outline-[#80B546] focus:transition-all focus:duration-300"
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
      <LeftSide />
    </>
  );
};
