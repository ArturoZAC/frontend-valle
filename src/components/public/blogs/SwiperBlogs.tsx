import { Swiper, SwiperSlide } from "swiper/react";
// @ts-expect-error: Type 'any' has no properties in common with type 'PaginationOptions'
import { Autoplay } from "swiper";
import { Blog } from "../../shared/Interfaces";
import { CardBlog } from "./CardBlog";
export const SwiperBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <Swiper
      loop
      modules={[Autoplay]}
      spaceBetween={40}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }}
    >
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <SwiperSlide>
            <CardBlog blog={blog} key={blog.id} />
          </SwiperSlide>
        ))
      ) : (
        <SwiperSlide>
          <p className="w-full text-lg text-center">No hay blogs que mostrar</p>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
