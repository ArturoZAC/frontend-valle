import { BannerInterna } from "./content/BannerInterna";
import { fondo_nosotros } from "../shared/images";
import { ContentMain } from "./content/ContentMain";
import { Blog, Categoria } from "../shared/Interfaces";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Global } from "../../helper/Global";
import { CardBlog } from "./blogs/CardBlog";

export const Blogs = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loadCategorias, setLoadCategorias] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadBlogs, setLoadBlogs] = useState<boolean>(true);

  const [categoriaSelected, setCategoriaSelected] = useState<number>(0);

  const getCategorias = useCallback(async () => {
    try {
      const response = await axios.get(`${Global.url}/allCategorias`);
      setCategorias(response.data);
      setCategoriaSelected(response.data[0].id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadCategorias(false);
    }
  }, []);

  useEffect(() => {
    getCategorias();
  }, []);

  const getBlogs = useCallback(async () => {
    try {
      setLoadBlogs(true);
      const response = await axios.get(
        `${Global.url}/allServicios/${categoriaSelected}`
      );
      console.log(response.data);
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadBlogs(false);
    }
  }, [categoriaSelected]);

  useEffect(() => {
    getBlogs();
  }, [categoriaSelected]);
  return (
    <>
      <BannerInterna banner={fondo_nosotros} title="Nuestros blogs" />
      <section className="w-full">
        <ContentMain className="pt-20">
          <div className="flex items-center justify-center w-full gap-5">
            {loadCategorias ? (
              <>
                <div className=" px-5 py-3 bg-gray-300 w-fit min-w-[250px] h-[57.2px] rounded-main animation-pulse"></div>
                <div className=" px-5 py-3 bg-gray-300 w-fit min-w-[250px] h-[57.2px] rounded-main animation-pulse"></div>
              </>
            ) : (
              categorias.map((categoria: Categoria) => (
                <button
                  type="button"
                  key={categoria.id}
                  disabled={loadBlogs}
                  onClick={() => {
                    setCategoriaSelected(Number(categoria.id));
                  }}
                  className={`${
                    categoriaSelected === Number(categoria.id)
                      ? "bg-primary-main text-white"
                      : "bg-white text-primary-main"
                  } px-5 py-3 border-2 active:scale-75 rounded-main border-primary-main  font-archivoExpanded transition-all duration-200 ease-out`}
                >
                  {categoria.nombre}
                </button>
              ))
            )}
          </div>
        </ContentMain>
        <ContentMain className="grid gap-6 pt-12 pb-20 md:grid-cols-2 lg:grid-cols-3">
          {loadBlogs ? (
            <>
              <div className="w-full rounded-main h-[498px] bg-gray-300 animate-pulse"></div>
              <div className="w-full rounded-main h-[498px] bg-gray-300 animate-pulse"></div>
              <div className="w-full rounded-main h-[498px] bg-gray-300 animate-pulse"></div>
              <div className="w-full rounded-main h-[498px] bg-gray-300 animate-pulse"></div>
              <div className="w-full rounded-main h-[498px] bg-gray-300 animate-pulse"></div>
              <div className="w-full rounded-main h-[498px] bg-gray-300 animate-pulse"></div>
            </>
          ) : (
            blogs.map((blog: Blog) => <CardBlog blog={blog} key={blog.id} />)
          )}
        </ContentMain>
      </section>
    </>
  );
};
