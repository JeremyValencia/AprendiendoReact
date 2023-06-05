// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

// añadir elementos al array
 // YA NO SE USAN ESTOS DOS METODOS en REACT
//tecnologias.push('Angular') // añade al final
//tecnologias.unshift('Express') // añade al inicio 

//Este es el metodo correcto
//const nuevoArreglo = [...tecnologias,'Angular']
// const nuevoArreglo = ['Angular', ...tecnologias]
// Eliminar elementos del array

//tecnologias.pop() // elimina el ultimo elemento
//tecnologias.shift() // elimina el primer elemento
//tecnologias.splice(2,1) // El primer valor indica a partir de que posicion eliminar, 
//el segundo valor indica cuantos elementos eliminar

/* const nuevoArray = tecnologias.filter(function(tech){
    return tech === 'NodeJS'
}) */

// Reemplazar elementos del array

// tecnologias[0] = 'Express'

/*
const nuevoArray = tecnologias.map(function(tech){
    if(tech === 'NodeJS'){
        return 'Node'
    }else{
        return tech
    }
}) */


console.log(tecnologias)
console.log(nuevoArray)