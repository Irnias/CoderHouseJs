
// let imagen = document.getElementById('imagen');

let noticia = document.getElementById('noticia');
// console.log(noticia);
noticia.removeChild( document.getElementById('imagen') );

let nuevoNodo = document.createElement("h1");
nuevoNodo.innerHTML = 'Cualquier texto';
console.log(nuevoNodo);

noticia.appendChild(nuevoNodo);