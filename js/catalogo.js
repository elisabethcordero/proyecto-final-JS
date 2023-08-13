export class Catalogo {
    productos = []

    constructor() {

    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    obtenerProducto(id){
        return this.productos.find(prod => prod.id === id);
    }

    listarProductos(){
        console.log(`Todos los productos:`)
        for (let producto of this.productos) {
            console.log(producto.obtenerDatos())
        }
    }

    listarPorColor(color){
        const resultados = this.productos.filter(producto => producto.color === color)
        console.log(`Productos color: ${color}`)
        console.table(resultados);
    }

    getCards() {
        let cardsHtml = "";
        for(let producto of this.productos){
            cardsHtml += this.getCard(producto);
        }
        return cardsHtml;
    }

    getCard(producto){
        return `<div class="col">
        <div class="card me-3 mb-3 cardHp">
            <img src="${producto.imagen}" class="card-img-top" alt="Cartucho HP 60XL">
            <div class="card-body">
                <h5 class="card-title">${producto.descripcion}</h5>
                <h4 class="card-title">$${producto.precio}</h4>
                <input type="number" class="form-control mb-2" id="cantidad${producto.id}" value="1" />
                <button class="w-100 btn btn-lg btn-primary btnCard productButton" value="${producto.id}">Agregar al Carrito</button>
            </div>
        </div>
    </div>`;
    }
}