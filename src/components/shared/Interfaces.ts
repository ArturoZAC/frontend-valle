export interface configuracionValues {
  telefono: string;
  numeros: string;
  correos: string;
  horario: string;
  horario2: string;
  direccion1: string;
  direccion2: string;
  direccion3: string;
  facebook: string;
  instagram: string;
  twiter: string;
  linkedin: string;
  youtube: string;
  tiktok: string;
  whatsapp: string;
}

export interface paginacionValues {
  totalPosts: number;
  cantidadRegistros: number;
  paginaActual: number;
  setpaginaActual: (pagina: number) => void;
}

export interface slidesValues {
  id: string;
  imagen1: string;
  imagen2: string;
  titulo1: string;
  titulo2: string;
  text: string;
  enlace?: string;
  descripcion: string;
}

export interface Categoria {
  id: string;
  nombre: string;
}

export interface Curso {
  id: string;
  id_categoria: string;
  nombre: string;
  imagen1: string;
  descripcion: string;
  cantidad_clases: number;
  cantidad_alumnos: number;
  precio: number;
  destacado: boolean;
}

export interface Beneficios {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface Comunidad {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
}

export interface Blog {
  id: string;
  titulo: string;
  descripcion: string;
  imagen1: string;
}

export interface Servicio {
  id: string;
  titulo: string;
  descripcion: string;
  categoria: string;
}

export interface CorreosItem {
  correo: string;
  position: number;
  descripcion?: string
}

export interface NumerosItem {
  numero: string;
  position: number;
}
