let productos = JSON.parse(localStorage.getItem("carrito"));
if (!productos) {
  productos = [];
}
const container = document.getElementById("container");

container.innerHTML = productos
  .map(
    (p) => `
  <div class="producto">
    <h3>${p.nombre}</h3>
    <p><strong>ID:</strong> ${p.id}</p>
    <p><strong>Precio:</strong> $${p.precio}</p>
    <p><strong>Stock:</strong> ${p.stock}</p>
    <button>Eliminar</button>
  </div>
`
  )
  .join("");

localStorage.setItem("a", "pepe");
localStorage.setItem("b", "juan");
localStorage.setItem("c", "maria");

localStorage.removeItem("b");
// localStorage.removeItem("carrito");

localStorage.setItem("a", "pepe x2");
localStorage.setItem("a", "pepe x3");

// const eliminar = (cual) => {
//   let arrayGuardado = [{}, {}, {}];
// };
let nuevoArray = [{}];
localStorage.setItem("carrito", JSON.stringify(nuevoArray));

// localStorage.clear();
