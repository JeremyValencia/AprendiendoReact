// scope 

const precio = 300

function unaFuncion(){
    // Es una variable local
    const precio = 600
    console.log(precio)
}

if(true){
    console.log(precio)
}
console.log(precio)
unaFuncion()