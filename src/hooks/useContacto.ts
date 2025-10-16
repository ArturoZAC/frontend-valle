import { useEffect, useState } from "react";
import axios from "axios";
import { Global } from "../helper/Global";
import { configuracionValues } from "../components/shared/Interfaces";

interface UseContactoReturn {
  contacto: configuracionValues | null;
  loadContacto: boolean;
}

export function useContacto(): UseContactoReturn {
  const [contacto, setContacto] = useState<configuracionValues | null>(null);
  const [loadContacto, setLoadContacto] = useState<boolean>(false);

  useEffect(() => {
    const fetchContacto = async (): Promise<any> => {
      setLoadContacto(true);

      try {
        const response = await axios.get(`${Global.url}/oneConfi/1`);
        setContacto(response.data);
      } catch (err) {
        setLoadContacto(false);
      } finally {
        setLoadContacto(false);
      }
    };

    fetchContacto();
  }, []);

  return { contacto, loadContacto };
}
