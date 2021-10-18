import React from "react";

const GIfGridItem = ({ img }) => {
  return (
    <div className="card">
      <p>{img.title}</p>
      <img src={img.url} alt={img.title}></img>
    </div>
  );
};

export default GIfGridItem;
