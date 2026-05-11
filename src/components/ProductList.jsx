import ProductCard from "./ProductCard";

function ProductList({ products, handleAddToCart }) {

  if (products.length === 0) {
    return <p>No products available</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;