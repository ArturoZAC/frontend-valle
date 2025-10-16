import axios from "axios";
import { Global } from "../../helper/Global";
import type React from "react";
import { Blog,  configuracionValues,  Servicio } from "./Interfaces";

export const getData = async (
  ruta: string,
  setDatos: React.Dispatch<React.SetStateAction<never[]>>
): Promise<void> => {
  try {
    const request = await axios.get(`${Global.url}/${ruta}`);
    setDatos(request.data);
  } catch (error) {
    console.log(error);
  }
};

export const getServicios = async (
  ruta: string,
  setDatos: React.Dispatch<React.SetStateAction<Servicio[]>>
): Promise<void> => {
  try {
    const request = await axios.get(`${Global.url}/${ruta}`);
    setDatos(request.data);
  } catch (error) {
    console.log(error);
  }
};

export const getOneArticulo = async (
  ruta: string,
  setDatos: React.Dispatch<React.SetStateAction<Blog>>
): Promise<void> => {
  try {
    const request = await axios.get(`${Global.url}/${ruta}`);
    setDatos(request.data[0]);
  } catch (error) {
    console.log(error);
  }
};

export const getInfoDatos = async (
  ruta: string,
  setDatos: React.Dispatch<React.SetStateAction<configuracionValues>>
): Promise<void> => {
  const request = await axios.get(`${Global.url}/${ruta}`);
  setDatos(request.data);
};
