const clientesBanco = [
  {
    id: 1,
    nombre: "María Elena Rodríguez",
    alias: "maria.trabajo.2024",
    cbu: "0170001420000012345678",
    tipoCuenta: "Cuenta Corriente",
    saldo: 850000.5,
  },
  {
    id: 2,
    nombre: "Carlos Alberto Méndez",
    alias: "carlos.ahorro.personal",
    cbu: "0170002330000098765432",
    tipoCuenta: "Caja de Ahorro",
    saldo: 1250000.0,
  },
  {
    id: 3,
    nombre: "Ana Sofía González",
    alias: "ana.sofia.cuentas",
    cbu: "0170001420000056789012",
    tipoCuenta: "Cuenta Corriente",
    saldo: 2750000.75,
  },
  {
    id: 4,
    nombre: "Roberto Daniel Fernández",
    alias: "roberto.ahorros.casa",
    cbu: "0170002330000034567890",
    tipoCuenta: "Caja de Ahorro",
    saldo: 456789.2,
  },
  {
    id: 5,
    nombre: "Lucía Beatriz Silva",
    alias: "lucia.empresa.2024",
    cbu: "0170001420000078901234",
    tipoCuenta: "Cuenta Corriente",
    saldo: 5420000.0,
  },
  {
    id: 6,
    nombre: "Diego Alejandro Torres",
    alias: "diego.personal.ahorro",
    cbu: "0170002330000012309876",
    tipoCuenta: "Caja de Ahorro",
    saldo: 789123.45,
  },
  {
    id: 7,
    nombre: "Valentina López Vargas",
    alias: "vale.lopez.cuentas",
    cbu: "0170001420000045678901",
    tipoCuenta: "Cuenta Corriente",
    saldo: 1890000.3,
  },
  {
    id: 8,
    nombre: "Sebastián Martín Castro",
    alias: "seba.ahorro.futuro",
    cbu: "0170002330000067890123",
    tipoCuenta: "Caja de Ahorro",
    saldo: 100,
  },
  {
    id: 9,
    nombre: "Camila Fernanda Ruiz",
    alias: "camila.trabajo.banco",
    cbu: "0170001420000023456789",
    tipoCuenta: "Cuenta Corriente",
    saldo: 3200000.0,
  },
  {
    id: 10,
    nombre: "Matías Nicolás Herrera",
    alias: "mati.ahorros.personal",
    cbu: "0170002330000089012345",
    tipoCuenta: "Caja de Ahorro",
    saldo: 920000.65,
  },
  {
    id: 11,
    nombre: "Florencia Soledad Morales",
    alias: "flor.empresa.corriente",
    cbu: "0170001420000090123456",
    tipoCuenta: "Cuenta Corriente",
    saldo: 7800000.0,
  },
  {
    id: 12,
    nombre: "Joaquín Eduardo Vega",
    alias: "joaquin.ahorro.casa",
    cbu: "0170002330000001234567",
    tipoCuenta: "Caja de Ahorro",
    saldo: 234567.9,
  },
  {
    id: 13,
    nombre: "Antonella Guadalupe Sosa",
    alias: "anto.personal.banco",
    cbu: "0170001420000067891234",
    tipoCuenta: "Cuenta Corriente",
    saldo: 1560000.25,
  },
  {
    id: 14,
    nombre: "Nicolás Emiliano Paz",
    alias: "nico.ahorro.estudios",
    cbu: "0170002330000045678912",
    tipoCuenta: "Caja de Ahorro",
    saldo: 89000.0,
  },
  {
    id: 15,
    nombre: "Gabriela Patricia Ramos",
    alias: "gaby.trabajo.corriente",
    cbu: "0170001420000078912345",
    tipoCuenta: "Cuenta Corriente",
    saldo: 4250000.5,
  },
  {
    id: 16,
    nombre: "Federico Ariel Domínguez",
    alias: "fede.ahorro.personal",
    cbu: "0170002330000023456781",
    tipoCuenta: "Caja de Ahorro",
    saldo: 678900.15,
  },
  {
    id: 17,
    nombre: "Martina Isabel Rojas",
    alias: "martina.empresa.banco",
    cbu: "0170001420000034567812",
    tipoCuenta: "Cuenta Corriente",
    saldo: 6750000.0,
  },
  {
    id: 18,
    nombre: "Tomás Benjamín Acosta",
    alias: "tomas.ahorro.futuro",
    cbu: "0170002330000056781234",
    tipoCuenta: "Caja de Ahorro",
    saldo: 345000.75,
  },
  {
    id: 19,
    nombre: "Sofía Valentina Núñez",
    alias: "sofia.personal.corriente",
    cbu: "0170001420000012347890",
    tipoCuenta: "Cuenta Corriente",
    saldo: 2100000.4,
  },
  {
    id: 20,
    nombre: "Agustín Maximiliano Flores",
    alias: "agus.ahorro.casa",
    cbu: "0170002330000078901256",
    tipoCuenta: "Caja de Ahorro",
    saldo: 512000.3,
  },
];
// METODOS AVANZADOS DE ARRAYS ( recorren el array )

// programacion imperativa
// FIND
const encontrarCliente = (array, cbu) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].cbu === cbu) {
      return array[i];
    }
  }
};
let x = encontrarCliente(clientesBanco, "01700023300000567812334");
console.log(x);

// FILTER
const filtrarPorTipoDeCuenta = (array, tipo) => {
  let filtradoPorTipo = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].tipoCuenta === tipo) {
      filtradoPorTipo.push(array[i]);
    }
  }

  return filtradoPorTipo;
};
let y = filtrarPorTipoDeCuenta(clientesBanco, "Caja de Ahorro");
console.log(y);

// generar un nuevo array con info que me sirve
// MAP
const devolverInfoMasLimpia = (array) => {
  let arrayLimpio = [];
  for (let i = 0; i < array.length; i++) {
    arrayLimpio.push({ nombre: array[i].nombre, saldo: array[i].saldo });
  }

  return arrayLimpio;
};
let z = devolverInfoMasLimpia(clientesBanco);
console.log(z);

// un callback es una funcion que se pasa como argumento a otra funcion
let clienteEncontrado = clientesBanco.find((elemento) => {
  return elemento.cbu === "0170002330000056781234";
});
console.log(clienteEncontrado);

let arrayCajasDeAhorro = clientesBanco.filter((cliente) => {
  return cliente.tipoCuenta === "Cuenta Corriente";
});
console.log(arrayCajasDeAhorro);

let arraySoloConCbu = clientesBanco.map((cliente) => {
  // [ , , , , , ,]
  return { cbu: cliente.cbu };
});

console.log(arraySoloConCbu);

// si algo se encuentra o no en un array --> SOME ( alguno )
// siempre siempre siempre devuelve un booleano
let hayAlgunSaldoEnNegativo = clientesBanco.some((cliente) => {
  return cliente.saldo < 0;
});

console.log(hayAlgunSaldoEnNegativo);
let TodoslosClientesEstanAlDia = clientesBanco.every((cliente) => {
  return cliente.saldo >= 0;
});

console.log(TodoslosClientesEstanAlDia);
