/* 
Boton add
Boton delete 
Input de texto
Boton tarea completada (item de la lista)

*/

document.addEventListener('click', addTask);
function addTask (){
    let myInput = document.getElementById('myInput');
    

    let li = document.createElement("li");
    let t = document.createTextNode(myInput.value);
    li.appendChild(t);

    document.getElementById("myUL").appendChild(li);

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = () => {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
}

// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//evento para eliminar
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = () => {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

//mark as done
let list = document.querySelector('ul');
list.addEventListener('click', (evento) => {
    if(evento.target.tagName === 'LI'){
        evento.target.classList.toggle('checked');
    }
});
