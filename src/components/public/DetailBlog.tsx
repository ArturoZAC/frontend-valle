import { ContentMain } from "./content/ContentMain";
import { BannerInterna } from "./content/BannerInterna";
import { SwiperBlogs } from "./blogs/SwiperBlogs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Global } from "../../helper/Global";
import { Blog } from "../shared/Interfaces";

export const DetailBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loadBlog, setLoadBlog] = useState<boolean>(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBlog = async () => {
      try {
        const response = await axios.get(`${Global.url}/oneServicio/${id}`);
        setBlog(response.data);
        const response2 = await axios.get(
          `${Global.url}/allServicios/${response.data.id_categoria}`
        );
        setBlogs(
          response2.data.filter((blog: Blog) => Number(blog.id) !== Number(id))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoadBlog(false);
      }
    };
    getBlog();
  }, [id]);
  return (
    <>
      <BannerInterna
        banner={`${Global.urlImages}/blogs/${blog?.imagen1}`}
        title={loadBlog ? "Cargando..." : `${blog?.titulo}`}
      />
      <section className="w-full">
        <ContentMain className="py-12">
          <div className="flex flex-col gap-6 bg-gray-100 md:flex-row">
            <div className="w-full p-6 bg-white rounded-lg shadow-md ">
              {loadBlog ? (
                <div className="w-full flex h-[552px] mb-4 bg-gray-300 animate-pulse rounded-main"></div>
              ) : (
                <picture className="min-h-[552px]">
                  <img
                    src={`${Global.urlImages}/blogs/${blog?.imagen1}`}
                    alt="Service"
                    className="w-full h-auto mb-4 rounded-md"
                  />
                </picture>
              )}

              {loadBlog ? (
                <div className="w-full space-y-4">
                  <p className="w-full bg-gray-300 rounded-md animate-pulse"></p>
                  <p className="w-full bg-gray-300 rounded-md animate-pulse"></p>
                </div>
              ) : (
                <h2 className="mb-4 text-3xl font-bold font-blaak">
                  {blog?.titulo}
                </h2>
              )}

              <p
                className="mb-4 text-lg text-black-900"
                dangerouslySetInnerHTML={{
                  __html: blog ? blog.descripcion : "",
                }}
              ></p>
            </div>
          </div>
          <div className="w-full my-8">
            <h2 className="text-3xl text-center md:text-4xl font-archivoExpanded">
              Otros blogs
            </h2>
          </div>
          <SwiperBlogs blogs={blogs} />
        </ContentMain>
      </section>
    </>
  );
};
