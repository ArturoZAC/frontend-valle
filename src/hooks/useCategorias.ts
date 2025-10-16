import axios from "axios";
import { Global } from "../helper/Global";
import { useEffect, useState } from "react";
import { Categoria } from "../components/shared/Interfaces";

interface ReturnUseCategorias {
  categorias: Categoria[];
  loadCategorias: boolean;
}

export const useCategorias = (): ReturnUseCategorias => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loadCategorias, setLoadCategorias] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${Global.url}/allCategorias`);
        console.log(response.data)
        setCategorias(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadCategorias(false);
      }
    };

    getData();
  }, []);

  return { categorias, loadCategorias };
};
