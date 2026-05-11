import React from "react";
function DarkModeToggle({ darkMode, setDarkMode }) {
  // TODO: Implement dark mode toggle logic

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <button onClick={handleClick}>
      {darkMode
        ? "Toggle Light Mode"
        : "Toggle Dark Mode"}
        Toggle Dark Mode {/* TODO: Update this text from Dark to Light dynamically */}
    </button>
  );
}

export default DarkModeToggle;
