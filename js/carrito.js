
export function actualizarCarrito(producto, cantidad) {
    let carrito = obtenerCarrito();
    let productoExistente = carrito.find(item => item.id === producto.id)

    if(productoExistente){
        if (cantidad > 0){
            productoExistente.cantidad += cantidad;
        }else{
            let nuevaCantidad = productoExistente.cantidad + cantidad;
            if (nuevaCantidad > 0){
                productoExistente.cantidad += cantidad;
            }else{
                if(confirm("Eliminar producto del carrito?"))
                    eliminarProductoCarrito(productoExistente);
                return;
            }
        }
    }else{
        producto.cantidad = cantidad;
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Carrito Actualizado!',
        showConfirmButton: false,
        timer: 1500
      })
}

export function eliminarProductoCarrito(producto){
    let carrito = obtenerCarrito();
    let carritoActualizado = carrito.filter(c => c.id != producto.id);

    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto Eliminado!',
        showConfirmButton: false,
        timer: 1500
      })
}

export function obtenerCarrito(){
    let local = localStorage.getItem("carrito");

    if (local === null)
        return []
    
    return JSON.parse(local)
}

export function cantidadItemsCarrito(){
    let carrito = obtenerCarrito();
    let suma = 0;
    for(let item of carrito){
      suma = suma + item.cantidad
    }
    return suma
} 