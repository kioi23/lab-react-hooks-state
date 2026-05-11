import ProductCard from "./ProductCard";

function ProductList({ products, handleAddToCart }) {

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