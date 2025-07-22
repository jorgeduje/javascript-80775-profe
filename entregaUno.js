let numero = Number(prompt("cuantos pesos queres cambiar"));
let precioDivisa = Number(prompt("decime a cuanto esta el dolar"));
const convertir = (cantidad, precioDolar) => {
  return cantidad / precioDolar;
};

let resultado = convertir(numero, precioDivisa);
alert(`Por ${numero} pesos vas a obtener ${resultado} dolares`);
