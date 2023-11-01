
import { buscarpelicula } from "./controller.js";

 let posters = document.getElementById("posters")
 
 let boton = document.getElementById("buscar");
 boton.addEventListener("click" , clickBuscar);

 function clickBuscar (){
     posters.innerHTML = ""
     let nombre = document.getElementById("nombre").value;
     buscarpelicula(nombre).then(function(objresultado){
     let arreglo_peliculas = objresultado.Search
     let html = ""
     arreglo_peliculas.forEach(elemento => {
          html += 
           `
           <div class ="contenedor">
           <div class = "year"> ${elemento.Title}<br><br>${elemento.Year}</div>
           <img src="${elemento.Poster}">
           </div>
           `
           
      console.log(elemento.Poster);
     });
     posters.innerHTML += html
})
.catch((error => {
     alert ("No se encontro la busqueda")
})) 
 }

 



