import ls from './ls.js';

loadToDos();
document.querySelector('#addBtn').onclick = newToDo;
document.querySelector('#filterAll').onclick = filterAll;
document.querySelector('#filterActive').onclick = filterActive;
document.querySelector('#filterCompleted').onclick = filterCompleted;

function filterAll() {
    loadToDos();
}

function filterActive() {
    const toDoList = ls.getToDoList();
    const filteredList = toDoList.filter( todo => todo.completed == false )
    buildList(filteredList);
}

function filterCompleted() {
    const toDoList = ls.getToDoList();
    const filteredList = toDoList.filter( todo => todo.completed == true )
    buildList(filteredList);
}

function loadToDos() {
    const toDoList = ls.getToDoList();

    buildList(toDoList); 
    
    createTasksLeftElement();
}

function buildList(toDoList) {
    document.querySelector('#todos').innerHTML = '';
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
    createTasksLeftElement();
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
    completeBtn.setAttribute('data-id', todo.id);
    completeBtn.classList.add('complete-btn');
    completeBtn.onclick = completeToDo;
    if(todo.completed) {
        completeBtn.innerText = "X";
    }
    
    
    // todo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');
    if(todo.completed) {
        todoContent.classList.add('strikethrough');
    }

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

function createTasksLeftElement() {
    const toDoList = ls.getToDoList();
    const numTasksLeft = toDoList.filter(todo => todo.completed == false).length;
    const tasksLeft = `${numTasksLeft} task${numTasksLeft !== 1 ? 's' : ''} left`;
    const tasksLeftContent = document.getElementById('tasksLeft');
    tasksLeftContent.innerText = tasksLeft;

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
    ls.toggleCompleted(btn.getAttribute('data-id'));
    document.querySelector('#todos').innerHTML = '';
    loadToDos();
}