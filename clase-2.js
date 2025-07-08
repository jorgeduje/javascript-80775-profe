// CONDICIONALES --> estructuras de control
// if/else - ternario - switch

let nombre = "pepe";
console.log(nombre);

// rol admin - empleado - cliente
let rol = "avion";

if (rol === "admin") {
  console.log("tenes acceso a todo ");
} else if (rol === "empleado") {
  console.log("tenes acceso a una parte ");
} else if (rol === "pepe") {
  console.log("tenes acceso a una parte ");
} else {
  console.log("no tenes acceso ");
}

console.log("sigue el camino");

let edad = 17;
// condicion / lo verdadero  / lo falso
console.log(edad >= 18 ? "si podes entrar" : "no podes entrar");

// impuesto de autos
// base 200 pesos
// hay que sumar dependiendo la marca tanto dinero
// audi ---> 100
// vw ---> 50
// ford ---> 150
// bmw ---> 300
// volvo ---> 200
// mercedes ---> 250

let marca = "ferrari";
let impuesto = 200;

switch (marca) {
  case "audi":
    impuesto += 50;
    break;
  case "ford":
    impuesto += 30;
    break;
  case "mercedes":
    impuesto += 20;
    break;
  case "bmw":
    impuesto += 33;
    break;
  default:
    impuesto = "Tu auto esta libre de impuestos";
}
console.log(impuesto);

let edadUsuario = 32;
edadUsuario++;
edadUsuario++;
edadUsuario++;
edadUsuario++;
edadUsuario++;
edadUsuario--;
edadUsuario--;
edadUsuario--;

// edadUsuario = edadUsuario + 10;
edadUsuario -= 10;
console.log(edadUsuario);

// estructuras de repeticion
// CICLOS --> bucles --> loop
// for / while / do while

// X LOOP INFINITO ---> NO ESTA BUENO
// iniciador; la condicion ; y el modificador
for (let i = 1; i <= 10; i++) {
  // bloque
  console.log("hola");
  console.log(i);
}

console.log("siga el camino");

// condicion para girar

let i = 22;
while (i <= 10) {
  console.log("hola");
  console.log(i);
  i++;
}

console.log("sigue");

let y = 22;
do {
  console.log("hola");
  console.log(y);
  y++;
} while (y <= 10);

console.log("sigueeeee");

// CICLOS

// TABLA DEL 7

// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
let numero = prompt("decime que tabla queres");
let numeroConvertido = Number(numero);

while (isNaN(numeroConvertido)) {
  numero = prompt("no, ingresa un  numero");
  numeroConvertido = Number(numero);
}

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
