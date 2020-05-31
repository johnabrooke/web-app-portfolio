function saveToDo(todo) {
    const toDoList = getToDoList();

    toDoList.push(todo);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
}

/*function markToDoComplete(id) {
    const toDoList = getToDoList();
    
    const updatedToDos = toDoList.map( todo => {
        if(id == toDoList.id) {
            toDoList.completed = true;
        }
    })
    localStorage.setItem('toDoList', JSON.stringify(updatedToDos));
}*/
    

function deleteToDo(id) {
    const toDoList = getToDoList();

    const updatedToDos = toDoList.filter( todo => todo.id != id )
    localStorage.setItem('toDoList', JSON.stringify(updatedToDos));
}

function getToDoList() {
    const toDoListString = localStorage.getItem('toDoList');
    let toDoList = [];

    if (toDoListString) {
        toDoList = JSON.parse(toDoListString);
    }

    return toDoList;
}

export default {
    saveToDo,
    deleteToDo,
    getToDoList,
    //markToDoComplete
}