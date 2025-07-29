const productos = [
  { id: 1, nombre: "Notebook Lenovo", precio: 450000, stock: 12 },
  { id: 2, nombre: "Smartphone Samsung Galaxy", precio: 320000, stock: 8 },
  { id: 3, nombre: "Mouse inalámbrico Logitech", precio: 15000, stock: 25 },
  { id: 4, nombre: "Teclado mecánico Redragon", precio: 28000, stock: 10 },
  { id: 5, nombre: "Monitor 24'' LG", precio: 90000, stock: 6 },
  { id: 6, nombre: "Auriculares Bluetooth Sony", precio: 52000, stock: 15 },
  { id: 7, nombre: "Tablet Xiaomi Pad", precio: 210000, stock: 7 },
  { id: 8, nombre: "Disco externo 1TB WD", precio: 48000, stock: 14 },
  { id: 9, nombre: "Impresora HP Multifunción", precio: 87000, stock: 5 },
  { id: 10, nombre: "Webcam Full HD Logitech", precio: 32000, stock: 11 },
];

const container = document.getElementById("container");

container.innerHTML = productos
  .map(
    (p) => `
  <div class="producto">
    <h3>${p.nombre}</h3>
    <p><strong>ID:</strong> ${p.id}</p>
    <p><strong>Precio:</strong> $${p.precio.toLocaleString("es-AR")}</p>
    <p><strong>Stock:</strong> ${p.stock}</p>
    <button>Agregar al carrito</button>
  </div>
`
  )
  .join("");

let paraAgregar = [
  { id: 1, nombre: "Notebook Lenovo", precio: 450000, stock: 12 },
  { id: 5, nombre: "Monitor 24'' LG", precio: 90000, stock: 6 },
];

localStorage.setItem("carrito", JSON.stringify(paraAgregar));

// const agregarAlcarrito = (eseAlgo )=>{
//     let carritoExistente = [{}, {}]
//     if( eseAlgo ya existe ){
//         // encontrarlo , cambiarle las cantidades
//     }else{
//         carritoExistente.push( eseAlgo )
//         localStorage.setItem( "carrito", JSON.stringify(carritoExistente))
//     }
// }
