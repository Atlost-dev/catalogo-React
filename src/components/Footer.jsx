function Footer() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-pagina" id="contacto">
      <p>{anioActual} LarperShop</p>
    </footer>
  );
}

export default Footer;
