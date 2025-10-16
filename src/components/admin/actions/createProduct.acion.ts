import { productApi } from "../api/products.api";
import { ProductsResponse } from "../interfaces/product.response";

export const CreateProductAction = async (object: FormData) => {
  const response = await productApi.post<ProductsResponse>("/", object);

  return response.data;
};
