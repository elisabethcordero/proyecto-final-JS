import { Producto } from "./js/producto.js";
import { Catalogo } from "./js/catalogo.js";
import { actualizarCarrito, cantidadItemsCarrito } from "./js/carrito.js";

const seccionProductos = document.getElementById("seccionProductos");
const lblCantidadCarrito = document.getElementById("lblCartCount");
const botonesAgregarProducto = document.getElementsByClassName("productButton");
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const catalogo = new Catalogo();

catalogo.agregarProducto(new Producto (1, "Set de cartuchos HP 60XL", "Negro y Color", 6000, 11, "/media/cartuchos/hp60xl.jpg"));
catalogo.agregarProducto(new Producto (2, "Cartucho HP 662XL", "Negro", 3000, 11, "/media/cartuchos/hp662xlnegro.jpg"));
catalogo.agregarProducto(new Producto (3, "Set de cartuchos HP 711", "Negro y Colores", 8500, 11, "/media/cartuchos/hp711x4.jpg"));
catalogo.agregarProducto(new Producto (4, "Set de cartuchos Epson 73N", "Negro y Colores", 4000, 25, "/media/cartuchos/epson73x4.jpg"));
catalogo.agregarProducto(new Producto (5, "Set de cartuchos Epson 195", "Negro y Colores", 4000, 25, "/media/cartuchos/epson-original-195x4.jpg"));
catalogo.agregarProducto(new Producto (6, "Set Tintas Epson 664 Sistema Continuo", "Negro y Colores", 8500, 25, "/media/cartuchos/tintas664.jpg"));


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