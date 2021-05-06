function Product(){

    this.listaProductos = [];

    this.precio = '';
    this.imagen = 'src';
    this.nombreProducto = '';
    this.Descripcion = '';

    this.CargarProducto = (precio,imagen,nombre,descrion) => {

        this.precio = precio;
        this.imagen = imagen;
        this.nombreProducto = nombre;
        this.descrion = descrion;
        let prodNuevo = [this.precio,this.imagen,this.nombreProducto,this.descrion]
        this.listaProductos.push(prodNuevo);
    }

}

let Productos = new Product();

let productos = [   ['$100', 'src/images/producto1', 'Pan dulce', 'El mejor pan dulce traido de Italia'], 
                    ['$20', 'src/images/producto2', 'Pan', 'Pan de molde'], 
                    ['$60', 'src/images/producto3', 'Pan Masa Madre', 'Pan de masa madre, receta del topo de twitter'],
                ];

                let nuevoProducto = ['$150', 'src/images/producto4', 'Torta de frutilla', 'La mejor'];
productos.push(nuevoProducto);

// miProducto.CargarProducto(productos[0][0],productos[0][1],productos[0][2],productos[0][3]);
// miProducto.CargarProducto(productos[1][0],productos[1][1],productos[1][2],productos[1][3]);
// miProducto.CargarProducto(productos[2][0],productos[2][1],productos[2][2],productos[2][3]);
// miProducto.CargarProducto(productos[3][0],productos[3][1],productos[2][2],productos[2][3]);

productos.forEach(elemento => {
    miProducto.CargarProducto(elemento[0],elemento[1],elemento[2],elemento[3]);
});