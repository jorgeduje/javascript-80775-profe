const productos = [
  {
    id: 1,
    nombre: "iPhone 15 Pro",
    descripcion:
      "El smartphone más avanzado con chip A17 Pro y sistema de cámaras profesional.",
    precio: 999.99,
    categoria: "Electrónica",
  },
  {
    id: 2,
    nombre: "MacBook Air M2",
    descripcion:
      "Laptop ultradelgada con chip M2, perfecta para trabajo y creatividad.",
    precio: 1199.99,
    categoria: "Electrónica",
  },
  {
    id: 3,
    nombre: "Nike Air Max",
    descripcion:
      "Zapatillas deportivas con tecnología Air Max para máximo confort.",
    precio: 129.99,
    categoria: "Deportes",
  },
  {
    id: 4,
    nombre: "Camiseta Premium",
    descripcion:
      "Camiseta de algodón orgánico, suave y duradera para uso diario.",
    precio: 29.99,
    categoria: "Ropa",
  },
  {
    id: 5,
    nombre: "Cafetera Espresso",
    descripcion: "Máquina de café espresso automática con molinillo integrado.",
    precio: 299.99,
    categoria: "Hogar",
  },
  {
    id: 6,
    nombre: "Auriculares Sony",
    descripcion: "Auriculares inalámbricos con cancelación de ruido activa.",
    precio: 199.99,
    categoria: "Electrónica",
  },
  {
    id: 7,
    nombre: "Bicicleta Trek",
    descripcion:
      "Bicicleta de montaña con suspensión completa y 24 velocidades.",
    precio: 899.99,
    categoria: "Deportes",
  },
  {
    id: 8,
    nombre: "Reloj Apple Watch",
    descripcion: "Smartwatch con GPS, monitor de salud y resistencia al agua.",
    precio: 349.99,
    categoria: "Electrónica",
  },
];

// pintar mis productos en el contenedor de products

//renderizar ---> mostrar - pintar
const renderizarProductos = () => {
  let container = document.getElementById("products");
  // tener una variable con un string gigante
  // con todas mis tarjetas

  let todasLasTarjetas = "";

  // con un cliclo ir agregando a ese string tantas tarjetas
  // como productos tengamos en el array

  productos.forEach((producto) => {
    todasLasTarjetas += `
    <div class="card">
      <h2>${producto.nombre}</h2>
      <h3>${producto.precio}</h3>
      <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    </div>
        `;
  });

  //   console.log(todasLasTarjetas);
  container.innerHTML = todasLasTarjetas;
};
renderizarProductos();

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
console.log(carrito);

const agregarAlCarrito = (id) => {
  let producto = productos.find((producto) => producto.id === id);
  let existe = carrito.some(
    (productoCarrito) => productoCarrito.id === producto.id
  );
  if (existe) {
    alert("este ya esta en el carrito");
  } else {
    carrito.push(producto);
  }
  console.log(carrito);

  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// let botonRender = document.getElementById("render");
// botonRender.addEventListener("click", renderizarProductos);
