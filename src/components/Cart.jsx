function Cart({ items, onEliminar }) {
  const total = items.reduce(
    (suma, item) => suma + item.precio * item.cantidad,
    0,
  );

  return (
    <aside className="carrito" id="carrito">
      <h2>Carrito</h2>

      {items.length === 0 ? (
        <p className="carrito-vacio">El carrito está vacío</p>
      ) : (
        items.map((item) => (
          <div className="carrito-item" key={item.id}>
            <div>
              <h4>
                {item.icono} {item.nombre}
              </h4>
              <p>
                ${item.precio.toLocaleString("es-MX")} x {item.cantidad} = $
                {(item.precio * item.cantidad).toLocaleString("es-MX")}
              </p>
            </div>
            <button
              type="button"
              className="btn-eliminar"
              onClick={() => onEliminar(item.id)}>
              Eliminar
            </button>
          </div>
        ))
      )}

      <p className="carrito-total">Total: ${total.toLocaleString("es-MX")}</p>
    </aside>
  );
}

export default Cart;
