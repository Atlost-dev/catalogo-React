import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./data/products";

const categorias = ["Todos", ...new Set(products.map((p) => p.categoria))];

function quitarAcentos(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase("es");
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [carrito, setCarrito] = useState([]);

  const filteredProducts = products.filter(
    (product) =>
      (categoria === "Todos" || product.categoria === categoria) &&
      quitarAcentos(`${product.nombre} ${product.categoria}`).includes(
        quitarAcentos(searchTerm),
      ),
  );

  function agregarAlCarrito(product) {
    const existe = carrito.find((item) => item.id === product.id);

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item,
        ),
      );
    } else {
      setCarrito([...carrito, { ...product, cantidad: 1 }]);
    }
  }

  function eliminarDelCarrito(id) {
    setCarrito(
      carrito.flatMap((item) => {
        if (item.id !== id) return [item];
        return item.cantidad > 1
          ? [{ ...item, cantidad: item.cantidad - 1 }]
          : [];
      }),
    );
  }

  return (
    <div className="app">
      <Header onSearch={setSearchTerm} />

      <main className="contenido-principal">
        <Hero />
        <section className="seccion-productos" id="productos">
          <div className="titulo-seccion">
            <p>Catalogo</p>
            <h2>Productos Destacados</h2>
          </div>

          <CategoryFilter
            categorias={categorias}
            seleccionada={categoria}
            onSeleccionar={setCategoria}
          />

          <div className="tienda">
            <ProductList
              productos={filteredProducts}
              onAgregar={agregarAlCarrito}
            />
            <Cart items={carrito} onEliminar={eliminarDelCarrito} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
