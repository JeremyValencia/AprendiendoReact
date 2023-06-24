const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

/* const nuevoArray = tecnologias.map(tech =>{
    if(tech === 'NodeJS'){
        return 'Node'
    }else{
        return tech
    }
}) */

// AL ser una sola linea se puede hacer de esta manera, puesto que no recibe mas parametros
const nuevoArray2 = tecnologias.filter(tech => tech === 'NodeJS')

console.log(nuevoArray2)
// console.log(nuevoArray)