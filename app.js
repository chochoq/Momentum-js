const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS_NAME = "hidden";
const USERNAME_KEY = "userName";

// username을 입력할 경우
function onLoginSubmit(e) {
    e.preventDefault();
    const inputUserName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, inputUserName);
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    paintGreeting();
}

function paintGreeting() {
    const userName = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Welcome back ${userName}!!`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

// localStorage에 username 저장 유무
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    // form보여주기
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // greeting보여주기
    paintGreeting();
}