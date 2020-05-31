import utils from './utils.js';
import ls from './ls.js';

document.querySelector('#addBtn').onclick = newToDo;

function loadToDos() {
    const toDoList = ls.getToDoList();

    toDoList.forEach(todo => {
        const el = createToDoElement(todo)
        addToList(el);
    })
}

function newToDo() {
    const todo = createToDo();
    const todoDiv = createToDoElement(todo);
    addToList(todoDiv);
    ls.saveToDo(todo);
}

function createToDo() {
    const input = document.querySelector('#toDoInput');
    const newToDo = { id: Date.now(), content: input.value, completed: false}
    input.value = '';

    return newToDo;
}

function createToDoElement(todo) {
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // complete button
    const completeBtn = document.createElement('button');
   // completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = completeToDo;
    /*if(todo.completed === true) {
        todoContent.style.setProperty("text-decoration", "line-through");
    }*/    
    
    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('data-id', todo.id);
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = "X";
    deleteBtn.onclick = deleteToDo;

    todoDiv.appendChild(completeBtn);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteBtn);

    return todoDiv;
}

function addToList(todoDiv) {
    // Add to the document
    document.querySelector('#todos').appendChild(todoDiv);
}

// Event handlers
function deleteToDo(e) {
    const btn = e.currentTarget;
    ls.deleteToDo(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadToDos();
}

function completeToDo(e) {
    const btn = e.currentTarget;
   // ls.markToDoComplete(btn.getAttribute('data-id'));
    btn.innerText = "X";
}