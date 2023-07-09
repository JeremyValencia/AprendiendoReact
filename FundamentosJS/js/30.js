// Fetch API con async await
// Mi API a utilizar es jsonplaceholder https://jsonplaceholder.typicode.com/comments

const url = "https://jsonplaceholder.typicode.com/comments"
//Esto se usa con una funcion de consulta 
/**fetch(url).then((respuesta) => {
    return respuesta.json()
}).then((resultado) =>{
    resultado.forEach( comentarios =>{
        console.log(comentarios)
    })
})**/

/**const consultarAPI = () =>{
    fetch(url).then((respuesta) => {
        return respuesta.json()
    }).then((resultado) =>{
        resultado.forEach( comentarios =>{
            console.log(comentarios)
        })
    })
}**/

const consultarAPI = async() =>{
    const respuesta = await fetch(url)
    console.log('Despues de la respuesta')
    const resultado = await respuesta.json()
    console.log('Despues del resultado')
    resultado.forEach( comentarios =>{
        console.log(comentarios)
    })
}
consultarAPI();