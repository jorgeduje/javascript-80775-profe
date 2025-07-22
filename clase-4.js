// tipos de datos primitivos
// strings - numbers - booleanos -undefined - null - NaN

// estructuras de datos

let nombreUsuario = "pepe";
let edadUsuario = 32;
let password = "pepe123";
let numeroFavorito = 12;
let cumpleaños = "12/05/12";

let nombreProducto = "telefono";
let precioProducto = 200;
let descripcionProducto = "este es un telefono";

// OBJETOS --> diccionarios
// propiedades ( caracteristicas ) y metodos ( funciones )
let usuario = {
  // clave : valor
  nombre: "pepe",
  edad: 32,
  password: "pepe123",
  numeroFavorito: 12,
  cumpleaños: "12/05/12",
  esMayor: true,
  direccion: { calle: "italia", numero: 222 },
};

// console.log(nombreUsuario);
// console.log(password);
// dot notation --> la notacion del punto ( . )

console.log(usuario.cumpleaños);

usuario.cumpleaños = "11/11/11";

console.log(usuario.cumpleaños);
usuario.direccion.calle = "españa";
console.log(usuario.direccion.calle);

usuario.apellido = "perez";
console.log(usuario);

// bracket notation

console.log(usuario.numeroFavorito);
console.log(usuario["numeroFavorito"]);
const funcionStock = function (cantidad) {
  if (cantidad !== undefined) {
    this.stock -= cantidad;
  } else {
    console.log("debes pasar la cantidad a descontar");
  }
};

let producto = {
  titulo: "telefono",
  precio: 200,
  estaHabilitado: true,
  categoria: "telefonia",
  stock: 20,
  descontarStock: funcionStock,
};

let productoDos = {
  titulo: "adsada",
  precio: 321321,
  estaHabilitado: true,
  categoria: "dsadasd",
  stock: 12,
  descontarStock: funcionStock,
};
let productoTres = {
  titulo: "adsdsadsaada",
  precio: 12312,
  estaHabilitado: true,
  categoria: "dsadasd",
  stock: 122,
  descontarStock: funcionStock,
};

producto.descontarStock(2);
productoDos.descontarStock(5);

console.log(producto.stock);
console.log(productoDos.stock);

// ARRAY --> colecciones
// agrupar elementos de un mismo tipo
// compuestos por elementos
// trabajan por posiciones y siempre siempre siempre se empieza contar desde cero
// let numeroSuerteUno = 12;
// let numeroSuerteDos = 33;
// let numeroSuerteTres = 21;

let numeroDeLaSuerte = [12, 33, 21];

console.log(numeroDeLaSuerte[2]); // ---> 21

let productos = [
  {
    titulo: "telefono",
    precio: 200,
    estaHabilitado: true,
    categoria: "telefonia",
    stock: 20,
    descontarStock: funcionStock,
  },
  {
    titulo: "zapatilla",
    precio: 321321,
    estaHabilitado: true,
    categoria: "dsadasd",
    stock: 12,
    descontarStock: funcionStock,
  },
  {
    titulo: "compu",
    precio: 12312,
    estaHabilitado: true,
    categoria: "dsadasd",
    stock: 122,
    descontarStock: funcionStock,
  },
];

// 3
const mostrarStockDeTodoslosProductos = () => {
  for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].stock);
  }
};

mostrarStockDeTodoslosProductos();

// Crearles un ID a cada elemento del array
// y ese id, debera ser incremental y empezar en 1

const generarIds = () => {
  for (let i = 0; i < productos.length; i++) {
    productos[i].id = i + 1;
  }
};

generarIds();

console.log(productos);

productos.push({ titulo: "pepe", precio: 100 });
console.log(productos);
