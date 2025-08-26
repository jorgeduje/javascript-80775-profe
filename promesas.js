//https://jsonplaceholder.typicode.com/

// const x = async () => {
//   try {
//     const getUsers = await fetch("https://fakestoreapi.com/products");
//     const response = await getUsers.json();
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// x();

// const getUsersFetch = () => {
// const getUsers = fetch("https://fakestoreapi.com/products");
//   getUsers
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((x) => console.error(x));
// };
// getUsersFetch();

let miAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
  //   headers: {tokenAcceso}
});
document.addEventListener("DOMContentLoaded", () => {
  const getProducts = miAxios.get("/products");
  getProducts
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
});

let boton = document.getElementById("btn-crear");
boton.addEventListener("click", () => {
  let producto = {
    title: "producto nuevo",
    price: 200,
  };

  const createProducto = miAxios.post("/products", producto);
  createProducto
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
});

const botonUno = document.getElementById("alerta-uno");
botonUno.addEventListener("click", () => {
  Swal.fire({
    title: "Seguro quieres limpair el carrito?",
    // text: "Queres confirmar",
    icon: "warning",
    showConfirmButton: true,
    showCancelButton: false,
    showDenyButton: true,
    cancelButtonText: "Cancelarrrr",
    denyButtonText: "No,me arrepenti",
    confirmButtonText: "si, limpiar",
  }).then((res) => {
    console.log(res);
    if (res.isConfirmed) {
      Swal.fire({
        title: "Se limpio exitosamente",
        icon: "success",
      });
    } else if (res.isDenied) {
      Swal.fire({ title: "el carrito queda como estaba", icon: "info" });
    }
  });
});

const dispararAlerta = (texto = "soy un texto por defecto") => {
  const x = Toastify({
    text: texto,
    duration: 3000,
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    // gravity: "top", // `top` or `bottom`
    // position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "steelblue",
    },
    onClick: function () {
      console.log("di click en la notiicacion");
    },
  });

  x.showToast();
};

const botonToast = document.getElementById("toast");
botonToast.addEventListener("click", () => {
  dispararAlerta();
});

console.log(new Date());
