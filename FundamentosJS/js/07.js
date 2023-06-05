// Objetos - unir

const producto ={
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

// const nuevoObjeto = Object.assign(producto, cliente); // NO

const nuevoObjeto2 = {
    producto: {...producto}, 
    cliente: {...cliente}
}; // SI

console.log(nuevoObjeto2);
console.log(producto);
console.log(cliente);



