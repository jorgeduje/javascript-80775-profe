// Variables
// caja que guarda algo

// palabras reservadas

// let o const

// let pepe = "dsadsad asd sad"
let nombre = "pepe";
let password = 1111;

let nombredosdelusuario = "juan";
// camelCase
let nombreDosDelUsuario = "juan";

// console.log(nombre);
// prompt("Por favor ingresa un numero ");

console.log(password);
password = 5555;
console.log(password);

const apellido = "perez";

console.log(apellido);

// apellido = "del canto";

// tipos de datos

// string --> cadena de texto

let palabra = "casa";
let frase = "esta es una frase";
let fraseDos = 'El perro se "durmio"';
console.log(fraseDos);

// number --> numeros
// enteros, o decimales
let edad = 32;
let precio = 100.5;

let telefono = "424424";
let celular = 424424;

// booleanos ---> los que responden preguntas de si o no
// true - false

let estaAutenticado = false;
let esMayor = true;

// operadores

// operadores matematicos
let a = 12;
let b = 4;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b); // operador de modulo o resto
// console.log(12 / 5);
// console.log(12 % 5);

// 12 % 5 --> devuelve el resto de la division

// CONCATENACION

let nombreUsuario = "juan";
let saludo = "hola " + nombreUsuario + " como estas?";
console.log(saludo);

// template literals
// backsticks

let saludoMasFacil = `Hola ${nombreUsuario} como estas? tu edad es ${edad}`;
console.log(saludoMasFacil);

console.log("----------------- ");
// operadores de comparacion
// SIEMPRE SIEMPRE SIEMPRE DEVUELVE UN BOOLEANO
let n1 = "7";
let n2 = 7;

// let resultado = n1 == n2;
// console.log(resultado);

console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log("------------");
// comparacion simple --> solo evalua el DATO no el TIPO DE DATO
console.log(n1 == n2);
console.log(n1 != n2);

// comparacion estricta compara el dato y TAMBIEN el tipo de dato
console.log(n1 === n2);
console.log(n1 !== n2);
