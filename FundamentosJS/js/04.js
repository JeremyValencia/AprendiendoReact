// Definir objetos


// Un objeto puede almacenar muchos valores

/* const nombre = "Tablet"
const precio = 300
const disponible = true */

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destrcuturing

const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object literal enhancement

const autenticado = true
const usuario = "Jeremy"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)