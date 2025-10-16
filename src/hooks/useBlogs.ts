import axios from "axios";
import { Global } from "../helper/Global";
import { useEffect, useState } from "react";
import { Blog } from "../components/shared/Interfaces";

interface ReturnUseBlogs {
  blogs: Blog[];
  loadBlogs: boolean;
}

export const useBlogs = (): ReturnUseBlogs => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadBlogs, setLoadBlogs] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${Global.url}/allServicios`);
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadBlogs(false);
      }
    };

    getData();
  }, []);

  return { blogs, loadBlogs };
};
