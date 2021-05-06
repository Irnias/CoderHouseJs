function Gatito(){

    this.Nombre = '';
    this.Edad = '';
    this.ColorPelo = '';
    this.Ubicacion = '';
    this.Genero = '';
    this.Accesorios = '';
    this.Raza = '';

    var listaDeRazas = ['Persa','Raza2', 'Raza3', 'raza4', 'Siames', 'Puro Corazon'];

    this.setRaza = function(raza){
        this.Raza = raza;
    }

    this.getRaza = function(){
        if(listaDeRazas.includes(this.Raza)){
            console.log(`Nuestro gatito ${this.Nombre} es de raza ${this.Raza}`);
        }else{
            console.log(`Nuestro gatito ${this.Nombre} es Mestizo`);
        }
    }

    this.setNombre = (nombre) => this.Nombre = nombre;

    this.setUbicacion = (ubicacion) => this.Ubicacion = ubicacion;
    this.getUbicacion = () => this.Ubicacion;

    this.IrDePaseo = (destinoDelPaseo) => {
        console.log(`${this.Nombre} se esta yendo de paseo, estaba en ${this.Ubicacion} y va para ${destinoDelPaseo}`);
        this.Ubicacion = destinoDelPaseo;
    }
}

let gatito = new Gatito;
gatito.setRaza('No lo se!');
gatito.setNombre('Patria');
gatito.getRaza();
gatito.setUbicacion('Casa');
alert(gatito.getUbicacion());
gatito.IrDePaseo('Departamento de al lado');
alert(gatito.getUbicacion());


