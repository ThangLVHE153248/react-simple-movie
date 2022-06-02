import axios from "axios";
import { useEffect, useState } from "react";

export const useGetAxios = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadAsyncStuff = async (url) => {
    try {
      const { data: response } = await axios.get(url);
      setData(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAsyncStuff(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading };
};
