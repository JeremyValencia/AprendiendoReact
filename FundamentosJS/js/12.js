// Funciones

// Function declarations

/*
function sumar(numero, numero2){
    console.log(numero);
    console.log(numero2);
    console.log(numero + numero2);
}

sumar(10, 20);
sumar(100, 200);
sumar(2,3) */

function sumar(numero = 0, numero2 = 0){
    return {
        resultado: numero + numero2, 
        mensaje: 'Hola mundo'};
}

const {resultado, mensaje} = sumar(10, 20);

console.log(resultado);
console.log(mensaje);