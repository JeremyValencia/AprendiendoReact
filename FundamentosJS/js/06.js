// Objetos - Destructuring

const producto ={
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

const {nombre, precio, disponible} = producto
const {nombre:nombreCliente, premium} = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)