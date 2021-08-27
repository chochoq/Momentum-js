const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    const userName = loginInput.value;
        console.log("hi",userName);
}

loginButton.addEventListener("click",onLoginBtnClick )