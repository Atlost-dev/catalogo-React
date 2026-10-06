function ProductCard({ icono, nombre, categoria, precio, onAgregar }) {
  return (
    <article className="producto">
      <div className="producto_icono">{icono}</div>

      <p className="producto_categoria">{categoria}</p>

      <h3>{nombre}</h3>

      <p className="producto_precio">${precio.toLocaleString("es-MX")}</p>

      <button type="button" onClick={onAgregar}>
        Agregar al Carrito
      </button>
    </article>
  );
}

export default ProductCard;
