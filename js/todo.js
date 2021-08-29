const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodoList(e) {
    const li = e.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
};

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerHTML = newTodo.text;
    btn.innerHTML = "삭제";
    btn.addEventListener("click",deleteTodoList);

    li.appendChild(span);
    li.appendChild(btn);
    todoList.appendChild(li);
};

function todoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
};

todoForm.addEventListener("submit", todoSubmit);

// todo를 로컬스토리지에 배열 형태로 저장
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}