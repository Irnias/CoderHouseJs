
    // == 
    // ===
    // !=
    // >=
    // <=
    // <
    // >
    // && AND
    // || OR

    // var nombre = prompt("Decime tu nombre");
    // alert( "Hola, " + nombre + " ¿Como estas?");

    // var peliUsuario = prompt("Decime la peli").toUpperCase();
    "texTO".toLowerCase();

    // var nombreWeaslyUsuario = prompt("Decime el nombre de Weasly.","Ron");

    // var pelicula = "harry";
    // var ronNombre = "Ron";
    // var puntos = 0;

    //         if(ronNombre == nombreWeaslyUsuario || pelicula.toUpperCase() == peliUsuario ){
    //             console.log('Esto sucede porque la condicion de arriba es verdadera.');
    //             alert("Ganaste!");
    //             // puntos++;
    //             //pasa esto si es verdadero
    //         }else{
    //             alert("Perdiste");
    //             //pasa otra cosa si es falsa
    //         }

    //         (ronNombre == nombreWeaslyUsuario) ? puntos++ : punto--;
    //         // ( condicion ) ? lo que pasa si es verdadera : lo que pasa si es falsa 
    //         if(pelicula == peliUsuario ){
    //             puntos++;
    //         }else{
    //             puntos--;
    //         }


var age = Number(prompt("Decime tu edad - 5 años"));
age = age + 5;
console.log(age);

if(age < 12) {
  alert("Todavía eres muy pequeño");
} else if(age < 19) {
  alert("Eres un adolescente");
} else if(age < 35) {
  alert("Aun sigues siendo joven");
} else {
  alert("Piensa en cuidarte un poco más");
}

