// Eventos del DOM = submit

const form = document.querySelector('#formulario')

form.addEventListener('submit', e =>{
    e.preventDefault()

    const nombre = document.querySelector('#nombre').value
    const pass = document.querySelector('#password').value

    if(nombre === '' || pass === ''){
        console.log('Los campos están vacíos, rellena los datos')
    }else{
        console.log('Datos enviados correctamente')
    }
})