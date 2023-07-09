// Manipulanco elemtos HTML con JS

const heading = document.querySelector('.heading')

heading.textContent = 'Nuevo Heading'
console.log(heading.textContent)


const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Jeremias'
console.log(inputNombre.value)


const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => enlace.textContent = 'Nuevo enlace')