import SearchBar from "./SearchBar";
function Header({ onSearch }) {
  return (
    <header className="encabezado">
      <div>
        <h1>TechStore</h1>
        <p>Tecnologias para estudiar, trabajar y crear</p>
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
