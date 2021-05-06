function ListaDeResproducion(canciones){

    var numCancion = 0;

    this.Lista = canciones;
    this.volumen = 10;
    this.Estado = 'Stop';
    this.CancionActual = canciones[numCancion];
    this.Aleatorio = false; //aleatorio on off

    this.Play = function (){
        this.Estado = 'Play';
    }

    this.addSong = function(cancion){
        this.Lista.push(cancion);
    }

    this.removeSong = function(){
        //this.Lista.pop();
    }

    this.Pause = function (){
        this.Estado = 'Stop';
    }

    this.Next = function(){

        if(numCancion < this.Lista.Lenght ){
            numCancion++;
        }else{
            numCancion = 0;

        }
        this.CancionActual = canciones[numCancion];

    }

    this.Previus = function(){

        if(numCancion > 0 ){
            numCancion--;
        }else{
            numCancion = this.Lista.Lenght;
        }

        this.CancionActual = canciones[numCancion];

    }

    this.ToggleRandom = function(){
        if(this.Aleatorio == true){
            this.Aleatorio = false;
        }else{
            this.Aleatorio = true;
        }
        
        //(this.Aleatorio == false ) ? this.Aleatorio = false : this.Aleatorio = true ;
    }

}


var canciones = ['Hawai', 'Leña para el carbon', 'cancion2', 'cancion3'];

var MiLista = new ListaDeResproducion(canciones);
MiLista.Play();
MiLista.ToggleRandom();
MiLista.addSong('Bajo el agua');
MiLista.Next();
MiLista.Pause();

var laListaDeRocio = new ListaDeResproducion(canciones);




