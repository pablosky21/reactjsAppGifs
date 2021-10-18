import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifts(category).then((imgs) =>
    setTimeout(() => {
        setstate({
            data: imgs,
            loading: false,
          });
      }, 3000)
      
    );
  }, [category]);
  

  return state;
};

export default useFetchGifs;
