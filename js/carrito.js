
export function actualizarCarrito(carrito, producto, cantidad) {

    let productoExistente = carrito.find(item => item.id === producto.id)
    if(productoExistente){
        productoExistente.cantidad += cantidad;        
    }else{
        producto.cantidad = cantidad;
        carrito.push(producto);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado!',
        showConfirmButton: false,
        timer: 1500
      })
}