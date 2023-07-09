// Eventos del DOM - inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', e =>{
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(e){
    console.log(e.target.value)
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 500);
}