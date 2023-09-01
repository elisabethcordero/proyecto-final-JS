export class Producto {

    constructor({id, description, color, price, stock, image = ""}){
        this.id = id
        this.descripcion = description
        this.color = color
        this.precio = price
        this.stock = stock
        this.imagen = image
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