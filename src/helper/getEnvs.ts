type Envs = {
  VITE_API_URL: string;
  VITE_API_DEFAULT: string;
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;
};

export const getEnvs = () => {
  const envs = import.meta.env as Envs;

  return {
    ...envs,
  };
};
