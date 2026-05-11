import { useState } from "react";
import { sampleProducts } from "./data";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Category state
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add to cart function
  function handleAddToCart(product) {
    setCartItems((prevItems) => [...prevItems, product]);
  }

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={darkMode ? "dark" : "light"}>
      {/* Dark mode toggle */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Category filter dropdown */}
      <select
        role="combobox"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>

      {/* Product list */}
      <ProductList
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      {/* Cart */}
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;