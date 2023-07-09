//fetch API - async await multiple requests

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultarAPI = async() =>{

    const inicio = performance.now()

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    //console.log(resultado)

    //console.log('Iniciando 2da consulta')

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    //console.log(resultado2)

    const fin = performance.now()
    console.log("Primer fetch " + (fin - inicio))
}
consultarAPI();

const consultarAPI2 = async() =>{

    const inicio = performance.now()

    const [respuesta1, respuesta2] = await Promise.all([fetch(url), fetch(url2)])

    const resultado = await respuesta1.json()
    const resultado2 = await respuesta2.json()

    //console.log(resultado)
    //console.log(resultado2)

    const fin = performance.now()
    console.log("Segundo fetch " + (fin - inicio))
}
consultarAPI2();