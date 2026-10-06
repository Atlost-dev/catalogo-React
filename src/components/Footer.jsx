function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-pagina" id="contacto">
      <p>{anioActual} TechStore</p>
    </footer>
  );
}

export default Footer;
