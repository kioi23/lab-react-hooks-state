import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
  return <p>No products available</p>;
}

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;