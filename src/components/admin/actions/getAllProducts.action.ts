import { getEnvs } from "../../../helper/getEnvs";
import { productApi } from "../api/products.api";
import { ProductsResponse } from "../interfaces/product.response";

const { VITE_API_DEFAULT } = getEnvs();

export const getAllProductsAction = async () => {
  const response = await productApi.get<ProductsResponse[]>("/");

  return response.data.map((product) => ({
    ...product,
    image: `${VITE_API_DEFAULT}/images/${product.image}`,
  }));
};
