import { Link } from "react-router-dom";
import { Blog } from "../../shared/Interfaces";
import { Global } from "../../../helper/Global";

export const CardBlog = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      key={blog.id}
      className="w-full overflow-hidden shadow-xl rounded-main"
    >
      <img
        src={`${Global.urlImages}/blogs/${blog.imagen1}`}
        alt=""
        className="w-full h-[260px]  object-cover"
      />
      <div className="w-full px-6 py-5 bg-white ">
        <h6 className="text-lg text-primary-main font-archivoExpanded">
          {blog.titulo}
        </h6>
        <p
          className="mt-4 text-black-900 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: blog.descripcion }}
        ></p>
      </div>
    </Link>
  );
};
