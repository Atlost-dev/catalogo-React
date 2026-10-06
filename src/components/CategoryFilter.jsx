function CategoryFilter({ categorias, seleccionada, onSeleccionar }) {
  return (
    <div className="filtros">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          className={categoria === seleccionada ? "filtro activo" : "filtro"}
          onClick={() => onSeleccionar(categoria)}>
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
