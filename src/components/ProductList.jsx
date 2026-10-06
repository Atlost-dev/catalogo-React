import ProductCard from "./ProductCard";

function ProductList({ productos, onAgregar }) {
  return (
    <div className="catalogo">
      {productos.length > 0 ? (
        productos.map((product) => (
          <ProductCard
            key={product.id}
            icono={product.icono}
            nombre={product.nombre}
            categoria={product.categoria}
            precio={product.precio}
            onAgregar={() => onAgregar(product)}
          />
        ))
      ) : (
        <p className="sin-resultados" role="status">
          No se encontraron productos.
        </p>
      )}
    </div>
  );
}

export default ProductList;
