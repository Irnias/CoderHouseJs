
function TestPiel(){
    //inicializo los parametros con las respuestas dentro del objeto, las inicializo como strings vacios.
    this.respuestaUno = '';
    this.respuestaDos = '';
    this.RespuestaTres = '';

    //Creo los metodos para hacer el set o la carga de cada parametro
    this.setRespuestaUno = function(resp1){
        this.respuestaUno = resp1;
    }

    this.getRespuestaUno = () =>{return this.respuestaUno }

    this.setRespuestaDos = function(resp2){
        this.respuestaDos = resp2;
    }
 
    this.setRespuestaTres = function(resp3){
        this.RespuestaTres = resp3;
    }

    
    //Creo el geter para obtener el resultado de la piel.

    this.getEstadoPiel = function (){
        var resultadoUno = '';
        var resultadoDos = '';
        var resultadoTres = '';

        switch (this.respuestaUno){
            case 1: 
                resultadoUno = 50; 
                break;
            case 2: 
                resultadoUno = 10; 
                break;
            default: 
                //nada 
                break;
        }

        switch (this.respuestaDos){
            case 1: 
                resultadoUno = 50; 
                break;
            case 2: 
                resultadoUno = 10; 
                break;
            default: 
                //nada 
                break;
        }

        var resultadoFinal = resultadoUno+resultadoDos+resultadoTres;
        if(resultadoFinal > 50){
            return "Tenes buena piel";
        }else if( resultadoFinal < 50 && resultadoFinal > 20){
            return "masomenos";
        }else{
            return "Anda a dermatologo ya!";
        }

    }
}
console.log("hola!");
var nuevoTest = new TestPiel();

nuevoTest.setRespuestaUno(prompt('En general tu piel se siente: 1 bien, 2 masomenos, 3 mal'));
nuevoTest.setRespuestaDos(prompt('Tu piel se irrita o se enrojece: 1 mucho, 2 poco, 3 nada'));
nuevoTest.setRespuestaTres(prompt('Tu cara se siente brillosa: 1 mucho, 2 poco, 3 nada'));

let algo = nuevoTest.getRespuestaUno();

console.log(algo);


