const inputText = document.getElementById("add_input");
const addButton = document.getElementById("add");
const typeSelector = document.getElementById("status");
const todosContainer = document.getElementById("todos_container");
let todoStatus = document.getElementsByClassName("todo_state");
let todoDelete = document.getElementsByClassName("todo_delete");
let todo = document.getElementsByClassName("todo");

//Create Todo
function createTodo() {
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    newTodo.innerHTML = `<span class="todo_text">${inputText.value}</span><span class="todo_state"></span><span class="todo_delete"></span>`;
    todosContainer.appendChild(newTodo);
    newTodo.lastChild.addEventListener("click", ()=> {
        newTodo.remove();
    })
    newTodo.children[1].addEventListener("click", ()=> {
        newTodo.children[1].classList.toggle("todo_stateCompleted");
    })
    inputText.value = "";
}

addButton.addEventListener("click", ()=> {
    createTodo();
})

typeSelector.addEventListener("change", ()=> {
    if(typeSelector.value === "All"){
        for(i=0; i<todoStatus.length; i++){
                todo[i].classList.remove("hidden");
        }
    }
    if(typeSelector.value === "Uncompleted"){
        for(i=0; i<todoStatus.length; i++){
            if(todoStatus[i].classList.contains("todo_stateCompleted")){
                todo[i].classList.add("hidden");
            }
            else{todo[i].classList.remove("hidden");}
        }
    }
    if(typeSelector.value === "Completed"){
        for(i=0; i<todoStatus.length; i++){
            if(todoStatus[i].classList.contains("todo_stateCompleted")){
                todo[i].classList.remove("hidden");
            }
            else{todo[i].classList.add("hidden");}
        }
    }
});








