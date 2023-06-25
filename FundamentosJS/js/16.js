const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let nuevoArray
//Filter
nuevoArray = tecnologias.filter(tech => tech === 'NodeJS')

//Comprobar si un elemento existe en un arreglo
// const resultado = tecnologias.filter('HTML')

// Some - devuelve si al menos cuimple la condicion
// const resultado = numeros.some(numero => numero > 8)

// Find - Devuelve el primero que cumple la condicion

// const resultado = numeros.find(numero => numero > 8)

// Every - Devuelve true o false si todos los elementos cumplen la condicion
// const resultado = numeros.every(numero => numero > 0)

//Reduce - Devuelve un valor con la operacion que se le indique
// el total correspoonde al valor inicial y numero es la suma de los elementos
// el cero que se encuentra al final es el valor inicial puede ser 0 como puede ser 100, 1000, 10000
//const resultado = numeros.reduce((total, numero) => numero + total, 0 )

//Filter - crea un array en base a una condicion
//const resultado = tecnologias.filter(tech => tech !== 'NodeJS')
//const resultado = numeros.filter(numeros => numeros !== 1)
//console.log(resultado)

tecnologias.forEach((tech, index) => console.log(index))

const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap)