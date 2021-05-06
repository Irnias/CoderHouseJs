function Persona(unBarrio, fechaDeNacimiento){

    this.City = unBarrio;
    this.BornDate = fechaDeNacimiento;
    
    this.setEdad = (unaEdad) => {
        if(unaEdad > 18){
            this.Age = unaEdad;
        }else{
            console.log('No se permite cargar el objeto porque no es mayor de edad');
        }
    }
    
    this.Saludar = () => {
        //Dos maneras de escribir un string con variables adentro.
        console.log( `Hola, soy ${this.Name}, ¿Como estas?`); //String literal usando backtics ` `
        console.log( "Hola, soy" + " " + this.Name +", " + "¿Como estas?"); //String concatenado normal
    }
    
    this.setName = (unNombre) =>{
        this.Name = unNombre;
    }
    
    //3 formas de obtener la propiedad name:
    //1 con metodo como funcion normal
    this.getName = function () {
        return this.Name;
    }
    //2 con metodo como funcion de flecha
    this.getName2 = () => {
        return this.Name;
    }
    //3 con metodo como funcion de flecha de una sola linea.
    this.getName3 = () => this.Name;
}

const rama = new Persona('El Talar','3/3/1993');
// rama.setName('Ramiro');
rama.setEdad(27);
rama.Saludar();
console.log(rama.getName());

const santi = new Persona('Olivos','1/1/2000');
santi.setName('Santiago');
santi.setEdad(20);
santi.Saludar();
console.log(santi.getName2());
