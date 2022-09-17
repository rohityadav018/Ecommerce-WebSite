import React from "react";
import "./Category.css";
function Category({ title, image, See_more }) {
  return (
    <div className="category">
      <p>{title}</p>
      {/* <p className="category__one">
        <small>Accessories | Up to 60% off</small>
      </p> */}
      <img src={image} alt="" />
      <h5>{See_more}</h5>
    </div>
  );
}

export default Category;
