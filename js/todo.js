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
};

function paintTodo(newTodo) {
    const li =document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    span.innerHTML = newTodo;
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
    todos.push(newTodo);
    paintTodo(newTodo);
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