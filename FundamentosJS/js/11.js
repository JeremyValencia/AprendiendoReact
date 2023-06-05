// Iteradores JS

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

// for each - permite acceder a cada elemento del array

//Te permete listar los elementos del array
const arrayForech =  tecnologias.forEach(function(tech){
    return tech
})

// map - permite crear un nuevo array con los resultados
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayForech)
console.log(arrayMap)
