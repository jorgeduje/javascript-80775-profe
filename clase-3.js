// let isLogged = false;
// let rol = "pepe";
// let permisos = true;

// if (isLogged || rol === "admin" || permisos) {
//   console.log("entra en el if");
// }
// if (isLogged && rol === "admin" && permisos) {
//   console.log("entra en el if");
// }

// FUNCIONES
// declarada

// CREANDO LA FUNCION O DECLARANDOLA
// function sumar() {
//   // BLOQUE DE CODIGO
//   console.log("esto esta dentro de la funcion");
//   if (true) {
//     console.log("estoy en el if dentro de la funcion");
//   }
//   console.log("-----------");
// }

// let botonSumar = document.getElementById("btn");
// botonSumar.addEventListener("click", sumar)

// let userName = prompt("ingresa tu nombre");

// function saludar() {
//   alert(`Hola ${userName} bienvenido a nuestra app`);
// }

// saludar();

// parametros

function sumar(numeroUno = 0, numeroDos = 0, nombre = "sin nombre") {
  console.log(numeroUno + numeroDos);
  console.log("hola " + nombre);
}

// argumentos
sumar(5, 7, "pepe");
sumar(1, 2, "maria");
// sumar(2, 4, "marta");

console.log("sigue el camino");

function restar(a, b) {
  // salida explicita
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "uno de los dos parametros no es un numero";
  }
  // salida implicita
}

let resultado = restar(10, "pepe"); // ---> 5
// siempre siempre la ejecucion de una funcion, se transforma
// en lo que la funcion retorna, si yo no retorno nada, javascript retorna undefined

console.log(resultado);

// SCOPE --> Alcance de una variable

// LOCALES
let user = "juan";
if (true) {
  let user = "pepe";
  console.log(user);
}

// if (true) {
//     // BLOQUE DE CODIGO
//   let user = "juan";
//   console.log(user);
// }

// FUNCIONES EXPRESADAS o ANONIMAS

let funcionNumero = function (numero) {
  return 10 * numero;
};
let resultadoFuncion = funcionNumero(5);
// let resultadoFuncion = funcionNumero(5);
// function funcionNumero(numero) {
//   return 10 * numero;
// }

console.log(resultadoFuncion);

// FUNCION EXPRESADA DE TIPO FLECHA
// ARROW FUNCTION

const funcionFlecha = (unNumero) => unNumero * 3;

let resultadoFlecha = funcionFlecha(10);
console.log(resultadoFlecha);

const sumarFlecha = (n1, n2, n3) => n1 + n2 + n3;

let resultadoSuma = sumarFlecha(1, 3, 5);
console.log(resultadoSuma);

sumarFlecha();
sumarFlecha();
sumarFlecha();
sumarFlecha();
sumarFlecha();
sumarFlecha();

// Quiero una funcion que reciba 2 numeros por parametros y una opcion para saber
// si quiero sumarlos o restarlos
// funcion( 2, 5, "suma")
// funcion( 2, 5, "resta")

// retornar el resultado
// los numeros deben ser pedidos por PROMPT

const operacion = (n1, n2, tipo) => {
  // flag o bandera

  if (n1 === undefined || n2 === undefined) {
    return "uno de los numeros no esta correcto";
  }

  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "alguno de los numeros no es un numero";
  }

  if (tipo === "suma") {
    return n1 + n2;
  } else if (tipo === "resta") {
    return n1 - n2;
  } else {
    return "el tipo de operacion no es correcto";
  }
};

let primerNumero = Number(prompt("ingresa el primer numero"));
let segundoNumero = Number(prompt("ingresa el segundo numero"));
let tipoOperacion = prompt("tipo de operacion");

let a = operacion(primerNumero, segundoNumero, tipoOperacion); // ---> 18

// let texto = document.getElementById("resultado");
// texto.innerText = a;
// let b = operacion(primerNumero, segundoNumero, ); // ---> 12
// console.log(b);
// let c = operacion(primerNumero, segundoNumero, ); // ---> undefined
// console.log(c);
