export function pintarProductos(productos){

    //recorriendo el arreglo
    productos.forEach(function(producto){
        /*console.log(producto)*/
    
        //Creando columnas para alojar los productos
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //crear tarjeta para almacenar la info del producto
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        //crear una imagen
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]
    
        //crear un titulo
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
        //crear un precio
        let precio=document.createElement("h5")
        precio.classList.add("text-center","text-success","fw-bold")
        precio.textContent="COP "+producto.precio

        //crear descripción
        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center","text-success","fw-bold","d-none")
        descripcion.textContent=producto.descripcion
        
        //crear subtotal
        let subtotal=document.createElement("h2")
        subtotal.classList.add("text-center","text-success","fw-bold")
        subtotal.textContent=producto.subtotal

        //Detectando evento
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]

        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
            
        })

        
        //padres e hijos
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}