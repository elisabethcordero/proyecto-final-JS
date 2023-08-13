export class Producto {

    constructor(id, descripcion, color, precio, stock, imagen = ""){
        this.id = id
        this.descripcion = descripcion
        this.color = color
        this.precio = precio
        this.stock = stock
        this.imagen = imagen
    }

    obtenerPrecioConDescuento () {
        let resultado = 0
        if (this.precio >= 30000)
            resultado = this.precio / 1.2;
        else
            resultado = this.precio / 1.1;

        return resultado.toFixed(2)
    }
}