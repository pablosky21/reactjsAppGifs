import React, { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";
import GIfGridItem from "./GIfGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifts(category).then(imgs => setImages(imgs))
  }, [category]);
 


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
