class Tarta{

    // constructor(nombre,precio,ingredientes,descripcion,img){
    //     this.nombre = nombre;
    //     this.precio = precio;
    //     this.ingredientes = ingredientes;
    //     this.descripcion = descripcion;
    //     this.img = img;
    // }

    constructor(datosTarta){
        this.nombre = datosTarta[0];
        this.precio = datosTarta[1];
        this.ingredientes = datosTarta[2];
        this.descripcion = datosTarta[3];
        this.img = datosTarta[4];
    }

    setIngredientes(cualquiera){
        this.ingredientes = cualquiera;
    }

    getImage(){
        return this.img;
    }

    getTarta(){
        //Nos devuelve todo lo que contiene nuestra tarta
        console.log(this)
    }

    actualizarPrecioSegunPais(){
        //Este metodo va a actulizar el presio segun el pais en el que este y sus impuestos.
    }
}