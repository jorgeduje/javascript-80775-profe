// let productos = [{}, {}];
// FUNCIONES CONSTRUCTORAS o CLASS

// clase - sirve para construir objetos
class Producto {
  constructor(titulo, precio, imagen, descripcion, stock) {
    this.titulo = titulo;
    this.precio = precio;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.stock = stock;
  }

  descontarStock(cantidad) {
    this.stock = this.stock - cantidad;
  }
}

// instanciar
let productoUno = new Producto("televisor", 200, "https", "bla bla bla", 10);
let productoDos = new Producto(
  "notebook",
  100,
  "https://",
  "una buena compu",
  10
);

let productos = [productoUno, productoDos];

console.log(productos);

productos[0].descontarStock(6);

console.log(productos);

// JSON

let objeto = { edad: 22, esMayor: true, nombre: "pepe" };
console.log(objeto);

let objetoJSON = JSON.stringify(objeto);

// mandar al backend
console.log(objetoJSON);

// quiero obtener info del backend
let objetoQuePediAlBackend = objetoJSON;
let objetoConvertido = JSON.parse(objetoQuePediAlBackend);

objetoConvertido.apellido = "pepe";

console.log(objetoConvertido);

let array = [2, 5];
console.log(array);
let arrayString = JSON.stringify(array);
console.log(arrayString);

let desconvertir = JSON.parse(arrayString);
console.log(desconvertir);

let x = true;
let xNueva = JSON.stringify(x);
console.log(xNueva);

// let xConvertida = JSON.parse("dsadas");
// console.log(xConvertida);

// OBTENER - GUARDAR - ELIMINAR
// local como en el session

// GUARDAR
let preferenciasUsuario = { modoOscuro: true, letra: "pequeña" };

localStorage.setItem("preferencias", JSON.stringify(preferenciasUsuario));

// let preferencias = localStorage.getItem("preferencias") // convertir con JSON.parse
let preferencias = JSON.parse(localStorage.getItem("preferencias")); // convertir con JSON.parse
console.log(preferencias);
