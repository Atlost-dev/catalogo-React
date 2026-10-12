import SearchBar from "./SearchBar";
function Header({ onSearch }) {
  return (
    <header className="encabezado">
      <div>
        <h1>LamperShop</h1>
        <p>Tecnologías para creer que eres alguien que no eres.</p>
      </div>

      <SearchBar onSearch={onSearch} />

      <nav className="navegacion">
        <a href="#inicio">Inicio</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
        <a href="#nosotros">Nosotros</a>
      </nav>
    </header>
  );
}

export default Header;
