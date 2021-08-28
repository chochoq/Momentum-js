const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");


function onLoginSubmit(e) {
    const userName = loginInput.value;
    e.preventDefault();
    console.log("hi",userName);
}

loginForm.addEventListener("submit", onLoginSubmit);