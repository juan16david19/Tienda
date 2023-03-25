//Llamo a la memoria para acceder a los datos guardados
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let nombre=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

document.getElementById("btnagregarcarrito").innerHTML = subtotal;

let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")
if(infocarrito!=null){
    carrito=infocarrito
    pildora.textContent=carrito.length
}else{
    carrito=[]
}

let botonAgregarProducto=document.getElementById("btnagregarcarrito")


botonAgregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto)
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))

    let precio=infoProducto.precio.split("COP ")[1]
    console.log(precio)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    let subtotal=precio*cantidad
    console.log(subtotal)
})
