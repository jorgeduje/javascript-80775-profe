// recuperar lo del local storage
// renderizar esos productos
// y dar la opcion de limpiar el carrito
// o borrar uno a uno los elementos

let productosDelCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderizarProductos = () => {
  let container = document.getElementById("products");

  let todasLasTarjetas = "";

  productosDelCarrito.forEach((producto) => {
    todasLasTarjetas += `
    <div class="card">
      <h2>${producto.nombre}</h2>
      <h3>${producto.precio}</h3>
      <button onclick="remover(${producto.id})">Eliminar</button>
    </div>
        `;
  });

  container.innerHTML = todasLasTarjetas;
};
renderizarProductos();

const remover = (id) => {
  let productosFiltrados = productosDelCarrito.filter(
    (productos) => productos.id !== id
  );

  productosDelCarrito = productosFiltrados;
  localStorage.setItem("carrito", JSON.stringify(productosDelCarrito));
  renderizarProductos();
};

let botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", () => {
  productosDelCarrito = [];
  localStorage.removeItem("carrito");
  renderizarProductos();
});
