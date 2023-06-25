// Compracion operador estricto

const numero1 = 20
const numero2 = "20"
/**
 * == Compara los valores pero no es estricto
 * === Compara los valores pero es estricto - compara el tipo de dato
 */
if ( numero1 === numero2 ){
    console.log("Son iguales")
}else{
    console.log("No son iguales")
}