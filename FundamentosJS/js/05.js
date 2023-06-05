// Objetos - manipulacion

const producto ={
    nombre: "Tablet",
    precio: 500,
    disponible: true
}

// Object.freeze(producto); // congelar un objeto para que no se pueda modificar

// Object.seal(producto); // sellar un objeto para que no se pueda agregar ni eliminar propiedades, 
// pero si se puede modificar

// reescribir el valor de una propiedad
producto.nombre = "Monitor";

// agregar una propiedad
producto.imagen = "imagen.jpg";

// eliminar una propiedad
delete producto.disponible;

console.log(producto)