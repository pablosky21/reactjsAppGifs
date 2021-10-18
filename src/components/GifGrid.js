import React, { useEffect, useState } from "react";
import GIfGridItem from "./GIfGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifts();
  }, []);
  const key = "1";
  const getGifts = async () => {
    try {
      const busqueda = category;
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${busqueda}&api_key=${key}&limit=10`
      );
      if (!resp.ok) {
        throw new Error("HTTP status " + resp.status);
      }
      const { data } = await resp.json();
      console.log(data);

      const gifs = data.map((img) => {
        return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url,
        };
      });
      setImages(gifs);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="card-grid">
        <span></span>
        {category}

        {images.map((img) => {
          return <GIfGridItem key={img.id} img={img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
