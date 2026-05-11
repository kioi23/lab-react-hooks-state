import React from 'react';
function ProductCard({ product, handleAddToCart }) {

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.category}</p>

      <button
  data-testid={`product-${product.id}`}
  onClick={() => handleAddToCart(product)}
>
  Add to Cart
</button>
    </div>
  );
}

export default ProductCard;