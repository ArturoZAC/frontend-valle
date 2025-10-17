import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getOneProductAction } from "../../../actions/getOneProduct.action";
import { ProductsResponse } from "../../../interfaces/product.response";
import { getEnvs } from "../../../../../helper/getEnvs";
import { UpdateProductAction } from "../../../actions/updateProduct.action";

export const UpdatePage = () => {
  const { VITE_API_DEFAULT } = getEnvs();

  const { id } = useParams();
  const [product, setProduct] = useState<ProductsResponse | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(
    "https://cdn-icons-png.flaticon.com/512/4211/4211803.png"
  );

  if (!id) {
    return <Navigate to={"/admin/services"} />;
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getOneProductAction(id);
      setProduct(data);
      setPreviewImage(`${VITE_API_DEFAULT}/images/${data.image}`);
    };
    fetchProduct();
  }, [id]);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().nullable(),
    description: Yup.string().nullable(),
    image: Yup.mixed().nullable(),
  });

  const handleUpdate = async (values: {
    name: string;
    description: string;
    image: File | null;
  }) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("description", values.description);

    if (values.image) {
      formData.append("image", values.image);
    }

    await UpdateProductAction(id, formData);
    navigate("/admin/products");
  };

  if (!product) {
    return (
      <div className="w-full h-[calc(100vh-10rem)] flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-[rgba(0,255,0,0.1)] border-t-[#80B546] rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#1E1F25] text-white p-10 rounded-xl shadow-lg border border-[#5F973E]">
      <Formik
        enableReinitialize
        initialValues={{
          name: product.name,
          description: product.description,
          image: null as File | null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="flex flex-col md:flex-row gap-10 w-full">
            {/* IZQUIERDA: Imagen */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2">
              <label
                htmlFor="image"
                className="text-gray-300 font-medium text-lg mb-4"
              >
                Imagen del servicio
              </label>

              <div className="relative w-full border-2 border-dashed border-[#5F973E]/40 rounded-xl bg-[#131517] flex flex-col items-center justify-center p-6 hover:border-[#5F973E] transition">
                <div className="w-full aspect-video border border-[#5F973E]/30 rounded-lg flex items-center justify-center bg-[#1E1F25] overflow-hidden mb-4">
                  <img
                    src={previewImage || ""}
                    alt="Vista previa"
                    className="object-contain w-full h-full transition-all duration-300"
                  />
                </div>

                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.currentTarget.files?.[0] || null;
                    setFieldValue("image", file);
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = () =>
                        setPreviewImage(reader.result as string);
                      reader.readAsDataURL(file);
                    } else {
                      setPreviewImage(
                        "https://cdn-icons-png.flaticon.com/512/4211/4211803.png"
                      );
                    }
                  }}
                  className="hidden"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer bg-[#5F973E] hover:bg-[#6fa84d] text-white px-6 py-2 rounded-lg transition font-medium"
                >
                  Subir imagen
                </label>
              </div>
            </div>

            {/* DERECHA: Campos + botones */}
            <div className="flex flex-col w-full md:w-1/2 gap-y-8 justify-center">
              {/* Nombre */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-gray-300 mb-2 font-medium"
                >
                  Nombre
                </label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Ingrese el nombre del servicio"
                  className="bg-[#131517] border border-[#5F973E]/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5F973E] transition"
                />
              </div>

              {/* Descripción */}
              <div className="flex flex-col">
                <label
                  htmlFor="description"
                  className="text-gray-300 mb-2 font-medium"
                >
                  Descripción
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  placeholder="Ingrese la descripción del servicio"
                  rows={5}
                  className="bg-[#131517] border border-[#5F973E]/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#5F973E] transition resize-none"
                />
              </div>

              <div className="flex gap-6 mt-4">
                <button
                  type="submit"
                  className="bg-[#5F973E] hover:bg-[#6fa84d] text-white py-3 px-5 rounded-lg font-semibold transition"
                >
                  Actualizar Servicio
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/admin/products")}
                  className="bg-red-700 hover:bg-red-600 text-white py-3 px-5 rounded-lg font-semibold transition"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
