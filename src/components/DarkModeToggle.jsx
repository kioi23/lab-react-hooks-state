function DarkModeToggle({ darkMode, setDarkMode }) {

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <button onClick={handleClick}>
      {darkMode
        ? "Toggle Light Mode"
        : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
