
import { actualizarCarrito, cantidadItemsCarrito, eliminarProductoCarrito, obtenerCarrito } from "./carrito.js"

const lblCantidadCarrito = document.getElementById("lblCartCount");

const listarCarrito = () => {
    const tablaBody = document.getElementById("tablaBody")
    const carrito = obtenerCarrito()
    console.log(carrito)
    tablaBody.innerHTML = "";

    for (let item of carrito){
        tablaBody.innerHTML+=`<tr>
            <td>${item.id}</td>
            <td>${item.descripcion}</td>
            <td class="d-flex flex-row">
                <input type="number" class="form-control form-control-sm w-25" id="cantidad${item.id}" value="${item.cantidad}" disabled/>
                <input type="button" class="btn btn-info ms-2 addOneClass" value="+" productid="${item.id}" />
                <input type="button" class="btn btn-info ms-2 delOneClass" value="-" productid="${item.id}" />
            </td>
            <td>${item.precio}</td>
            <td>${item.precio*item.cantidad}</td>
            <td>
                <a href="#" class="deleteItemClass" value="${item.id}">
                <i class="fa-solid fa-trash deleteItemClass" value="${item.id}" style="color: #2a549d;"></i>
                </a>
            </td>
        </tr>`
    }
    lblCantidadCarrito.innerText = cantidadItemsCarrito();
}

document.addEventListener("click", (event) => {
    let elemento = event.target
    
    if (elemento.classList.contains("deleteItemClass")){
        let id = elemento.getAttribute("value");
        const carrito = obtenerCarrito()
        let producto = carrito.find(c => c.id == id);
       
        Swal.fire({
            title: `Quitar del carrito el producto "${producto.descripcion}"?`,
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!', 
            cancelButtonText: 'Cancelar',

          }).then((result) => {
            if (result.isConfirmed) {
                eliminarProductoCarrito(producto);
                listarCarrito();
            }
          })
    }

    if (elemento.classList.contains("addOneClass")){
        
        let id = elemento.getAttribute("productid");
        
        const carrito = obtenerCarrito()
        let producto = carrito.find(c => c.id == id);
        
        actualizarCarrito(producto, 1)
        listarCarrito();
    }

    if (elemento.classList.contains("delOneClass")){
        let id = elemento.getAttribute("productid");
        
        const carrito = obtenerCarrito()
        let producto = carrito.find(c => c.id == id);
        
        actualizarCarrito(producto, -1)
        listarCarrito();
    }

})


listarCarrito();
