import { productApi } from "../api/products.api";
import { ProductsResponse } from "../interfaces/product.response";

export const getOneProductAction = async (id: string) => {
  const product = await productApi.get<ProductsResponse>(`/${id}`);
  return product.data;
};
