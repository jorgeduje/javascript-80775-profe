// ASINCRONIA
// PROMESAS ( clase que viene )
// ASYNC / AWAIT
//   fetch("https://jsonplaceholder.typicode.com/users" , {
//     method: "GET",
//     body: "Donde yo mando la info relacionada con el registro",
//     headers: "Donde yo mando informacion mas relacionada con la peticion en si"
//   }) // GET

const obtenerUsuarios = async () => {
  let usuarios = await fetch("https://jsonplaceholder.typicode.com/users"); // GET
  let usuariosArray = await usuarios.json();

  let htmlUsuarios = "";
  usuariosArray.forEach((usuario) => {
    htmlUsuarios += `
        <div class="card">
            <h2>${usuario.name}</h2>
            <h2>${usuario.phone}</h2>
            <h2>${usuario.email}</h2>
        </div>
    `;
  });

  let contenedor = document.getElementById("contenedor-usuarios");

  contenedor.innerHTML = htmlUsuarios;
};

obtenerUsuarios();

let boton = document.getElementById("crear");
console.log(boton);

boton.addEventListener("click", () => {
  // CREAR UN USUARIO
  let usuario = {
    nombre: "pepe",
    edad: 22,
    email: "pepe@gmail.com",
  };

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(usuario),
  });
});
