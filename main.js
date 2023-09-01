import { Producto } from "./js/producto.js";
import { Catalogo } from "./js/catalogo.js";
import { actualizarCarrito, cantidadItemsCarrito } from "./js/carrito.js";

const seccionProductos = document.getElementById("seccionProductos");
const lblCantidadCarrito = document.getElementById("lblCartCount");
const botonesAgregarProducto = document.getElementsByClassName("productButton");
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const catalogo = new Catalogo();

const result = await fetch('data/products.json');
const data = await result.json();

for(let producto of data)
    catalogo.agregarProducto(new Producto(producto))

seccionProductos.innerHTML = catalogo.getCards();

for(let boton of botonesAgregarProducto){
    boton.addEventListener("click", function(event){
        let id = parseInt(event.target.value);
        let producto = catalogo.obtenerProducto(id);
        let inputCantidad = document.getElementById("cantidad"+id);
        actualizarCarrito(producto, parseInt(inputCantidad.value))
        lblCantidadCarrito.innerText = cantidadItemsCarrito();
    });
}

lblCantidadCarrito.innerText = cantidadItemsCarrito();

var alertElement = document.getElementById("alert");
alertElement.style.display = "block";
setTimeout(function() {
    alertElement.style.display = "none";
}, 4000);