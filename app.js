const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";

function onLoginSubmit(e) {
    e.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    greeting.innerText = `Welcome back ${userName}!!`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

loginForm.addEventListener("submit", onLoginSubmit);