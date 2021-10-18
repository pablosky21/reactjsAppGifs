import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GIfGridItem from "./GIfGridItem";

const GifGrid = ({ category }) => {
 const {data:images,loading}= useFetchGifs(category);


  return (
    <>
      <div className="card-grid">
        <span></span>
        {category}
        {loading && <p>Cargando...</p>}

        {images.map((img) => {
          return <GIfGridItem key={img.id} img={img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
