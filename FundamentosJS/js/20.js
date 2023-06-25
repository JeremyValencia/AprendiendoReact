
const autenticado = true

// Operadores ternarios
autenticado 
? console.log('Usuario autenticado')
: console.log('Usuario no uatenticado')

// Doble operaradores ternarios

const saldo = 1000
const pagar = 5000
const tarjeta = false

saldo > pagar 
? console.log('Puedes pagar con tu saldo')
: tarjeta 
    ? console.log('Puedes pagar con tu tarjeta')
    : console.log('No puedes pagar con tarjeta')