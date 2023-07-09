//Template Strings

const producto = 'Monitor 20 pulgadas'
const precio = '30 USD'
const marca = 'Samsung'

function texto() {
    return 'Este es un texto de ejemplo'
}

console.log(`El producto es ${producto} tiene un precio de ${precio} y es de la marca ${marca}, ${texto()}`)