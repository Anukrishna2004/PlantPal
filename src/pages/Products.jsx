import React from "react";
import plants from "../data/plantsData";
import "../styles/Products.css";

function Products() {
  return (
    <div className="products">
      <h2>Explore Our Greenery</h2>
      <div className="plant-list">
        {plants.map((p, i) => (
          <div key={i} className="plant-card">
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button>Rent Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
