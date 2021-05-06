/* Deberá cumplir los siguientes requisitos:

Almacenar en Storage información ingresada por el usuario. Puede ser un texto, números, o combinación. 
Luego mostrarla mediante un elemento html, alert o console.

Escribir a mano una estructura JSON en un String JS, 
luego parsearla mediante código y mostrar en consola algún dato puntual de la estructura.
*/


// Repaso

//almacena el string stringifeado en el localstorage bajo el nombre que se pone en 'key'
//localStorage.setItem('key','string ya pasado por el JSON.stringify');
//Ej:
let objetoLiteral = {
    nombre = 'Perro',
    edad = '7',
    color = 'Rojo'
}
localStorage.setItem('animal',JSON.stringify(objetoLiteral));

localStorage.getItem('key');
localStorage.removeItem();
localStorage.clear();

sessionStorage.setItem();
sessionStorage.getItem();
sessionStorage.removeItem();
sessionStorage.clear();

JSON.parse();
JSON.stringify();