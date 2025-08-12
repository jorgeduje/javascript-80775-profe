// como acceder al DOM

// para traer nodos html a javascript
// getElementById
// querySelector
// querySelectorAll

let tituloHtml = document.getElementById("title");
console.log(tituloHtml);

let contenedorDeCategorias = document.querySelector(".container-categories");
console.log(contenedorDeCategorias);

let categoria = document.querySelectorAll(".category");
console.log(categoria);

// tituloHtml.style = "color:red";

// tituloHtml.classList.remove("dark")
tituloHtml.textContent = "este es un nuevo titulo";
tituloHtml.innerHTML = "<h2>este es un h2</h2>";

let contenedorProductos = document.getElementById("products");
console.log(contenedorProductos);

let productos = [{ title: "nike", price: 200 }];
contenedorProductos.innerHTML = `
    <div class="product">
        <h2>${productos[0].title}</h2>
        <h2>${productos[0].price}</h2>
    </div>
`;

let botonCambiar = document.getElementById("btn-cambiar-modo");
botonCambiar.addEventListener("click", () => {
  tituloHtml.classList.add("dark");
});
