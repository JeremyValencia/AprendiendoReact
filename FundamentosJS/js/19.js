const saldo = 600
const pagar = 500
const tarjeta = true
/**
 * || - al menos uno debe cumplirse
 * && - todos deben cumplirse
 */
if(saldo > pagar && tarjeta){
    console.log('Puedes pagar, saldo disponible')
}else{
    console.log('No puedes pagar, saldo insuficiente')
}