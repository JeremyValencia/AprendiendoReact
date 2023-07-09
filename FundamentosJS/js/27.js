// Creando HTML con JS

const form = document.querySelector('#formulario')

form.addEventListener('submit', e =>{
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const pass = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')

    if(nombre === '' || pass === ''){
        alerta.textContent = 'Todos lo campos son obligatorios'
        alerta.classList.add('error')
    }else{
        alerta.textContent = 'Todo en orden'
        alerta.classList.add('exito')
    }
    form.appendChild(alerta)
})