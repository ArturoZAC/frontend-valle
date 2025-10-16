import { productApi } from "../api/products.api";
import { ProductsResponse } from "../interfaces/product.response";

export const UpdateProductAction = async (id: string, object: FormData) => {
  const response = await productApi.put<ProductsResponse>(`/${id}`, object);

  return response.data;
};
