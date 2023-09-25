const API_KEY = "73428315"
const url_pelucula =  `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`

export async function buscarpelicula(nombre) {
    let resultado =await fetch(url_pelucula+`&s=${nombre}`)
    let objresultado =await resultado.json() 
   return objresultado
}