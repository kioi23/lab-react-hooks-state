import { useState } from "react";
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

  // Product data
  const sampleProducts = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Cheese", category: "Dairy" },
  { id: 4, name: "Apple", category: "Fruits" }
];

  // Add to cart function
  function handleAddToCart(product) {
    setCartItems([...cartItems, product]);
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

      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>

      <ProductList
  products={filteredProducts}
  onAddToCart={handleAddToCart}
/>

      <Cart cartItems={cartItems} />

    </div>
  );
}

export default App;