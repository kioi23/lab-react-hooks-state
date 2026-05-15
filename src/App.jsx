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

  // Add to cart function with quantity tracking
  function handleAddToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
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
        value={selectedCategory}
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