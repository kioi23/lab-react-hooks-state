import React from 'react';
function ProductCard({ product, handleAddToCart }) {

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>

      <button onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;