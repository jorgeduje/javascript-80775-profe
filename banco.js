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
    saldo: 100,
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

const funcionEncontrar = function (titular) {
  let clienteEncontrado = this.clientes.find((cliente) => {
    return cliente.nombre === titular;
  });

  if (clienteEncontrado !== undefined) {
    return clienteEncontrado;
  } else {
    return "Ese cliente no se encontro";
  }
};

const funcionDeposito = function (alias, cantidad) {
  let cliente = this.clientes.find((cliente) => cliente.alias === alias);
  if (cliente !== undefined) {
    // hacemos el deposito
    // {}.saldo --> aumentar
    // cliente.saldo = cliente.saldo + cantidad
    cliente.saldo += cantidad;
    return `Tu operación se realizo con exito, el nuevo saldo de ${cliente.nombre} es ${cliente.saldo}`;
  } else {
    return "lo siento el alias no existe";
  }
};

const funcionExtraccion = function (nombre, cantidad) {
  if (nombre === undefined) {
    return "debes pasarme un nombre";
  }
  if (cantidad === undefined) {
    return "debes pasarme una cantindad";
  }
  if (typeof cantidad !== "number") {
    return "Lo siento la cantidad debe ser un numero";
  }

  let cliente = this.consultarCliente(nombre);
  if (typeof cliente !== "string") {
    // hago la extracion
    if (cliente.saldo >= cantidad) {
      cliente.saldo -= cantidad;
      return `La extraccion se realizo con exito, el nuevo saldo de ${cliente.nombre} es de ${cliente.saldo}`;
    } else {
      return "el cliente si se encontro pero no tiene saldo suficiente";
    }
  } else {
    return "Lo siento ese usuario no pertenece a este banco";
  }
};

// crear un objeto banco
// clientes
// consultar cliente
// deposito
// extraccion

let banco = {
  clientes: clientesBanco,
  consultarCliente: funcionEncontrar,
  deposito: funcionDeposito,
  extraccion: funcionExtraccion,
};

console.log(banco.clientes);
console.log("aca");
let clienteDelBanco = banco.consultarCliente("pepe");
console.log(clienteDelBanco);

let clienteDelBanco2 = banco.consultarCliente("Ana Sofía González");
console.log(clienteDelBanco2);

let ticket = banco.deposito("joaquin.ahorro.casa", 500);
console.log(ticket);

let ticket2 = banco.extraccion("Joaquín Eduardo Vega", 12);
console.log(ticket2);
