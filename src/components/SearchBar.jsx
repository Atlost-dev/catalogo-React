import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="text"
        className="search-input"
        placeholder="Buscar Producto"
        aria-label="Buscar productos"
        value={searchTerm}
        onChange={(event) => {
          const value = event.target.value;
          setSearchTerm(value);
          onSearch(value);
        }}
      />
    </form>
  );
}

export default SearchBar;
