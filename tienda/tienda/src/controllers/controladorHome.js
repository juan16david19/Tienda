import {productos} from "../helpers/baseDatos.js"
import { pintarProductos } from "../helpers/pintarProductos.js"


//definiendo datos
/*let nombre="James Rodriguez"
if(5>2){
    let nombre="Lucho Diaz"
}
console.log("hola "+nombre)*/

/*console.log(productos)*/

//llamando a la fila
let fila=document.getElementById("fila")

//Pintar los productos de la tienda
pintarProductos(productos)

//Escuchando click en la fila contenedora de productos
fila.addEventListener("click",function(evento){

    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement

    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h5").textContent
    datosProductoSeleccionado.descripcion=tarjeta.querySelector("p").textContent

    //usaremos la memoria del pc para guardar esta info
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))

    window.location.href="./src/views/ampliarinfo.html"
})

