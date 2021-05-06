class Cart{

    constructor(){
        this.carrito = [];
    }

    addNewProduct(producto){
        this.carrito.push(producto);
    }

    getTotalProducts(){
        console.log(this.carrito);
    }
}