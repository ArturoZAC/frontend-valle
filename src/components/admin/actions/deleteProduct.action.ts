import { productApi } from "../api/products.api";

export const deleteProductAction = async (id: string) => {
  const response = await productApi.delete(`/${id}`);

  return response.data;
};
