
import { buscarpelicula } from "./controller.js";

 let posters = document.getElementById(`posters`)

buscarpelicula("cars").then(function(objresultado){
     let arreglo_peliculas = objresultado.Search;
     arreglo_peliculas.forEach(elemento => {

        posters.innerHTLM += `<img src="${elemento.poster}">`
        console.log(elemento.poster);
     });
})

