
import { eliminarProductoCarrito, obtenerCarrito } from "./carrito.js"

const listarCarrito = () => {
    const tablaBody = document.getElementById("tablaBody")
    const carrito = obtenerCarrito()
    tablaBody.innerHTML = "";
    
    for (let item of carrito){
        tablaBody.innerHTML+=`<tr>
            <td>${item.id}</td>
            <td>${item.descripcion}</td>
            <td>${item.cantidad}</td>
            <td>${item.precio}</td>
            <td>${item.precio*item.cantidad}</td>
            <td>
                <a href="#" class="deleteItemClass" value="${item.id}">
                <i class="fa-solid fa-trash deleteItemClass" value="${item.id}" style="color: #2a549d;"></i>
                </a>
            </td>
        </tr>`
    }
}

document.addEventListener("click", (event) => {
    let elemento = event.target
    
    if (elemento.classList.contains("deleteItemClass")){
        let id = elemento.getAttribute("value");
        const carrito = obtenerCarrito()
        let producto = carrito.find(c => c.id == id);
        if (confirm(`Quitar del carrito el producto "${producto.descripcion}"?`)) {
            eliminarProductoCarrito(producto);
            listarCarrito();
        }
    }

})


listarCarrito();