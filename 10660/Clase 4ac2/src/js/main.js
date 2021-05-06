// escribir una tarea y que se agrege al dom
// tambien al localstorage
// borrar tareas del todo list
// que se borren del local storage
// const objetoLiteral = {
//     'Propiedad' : 'valor',
//     'funcion' : () => { console.log(algo )}
// }


let formToDo = document.getElementById('form-todo');
let contenedorDeTareas = document.getElementById('todo-container');

let listaDeTareas = new TodoList(contenedorDeTareas);


formToDo.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = event.target.elements.title.value
    listaDeTareas.addTodo(title);
})