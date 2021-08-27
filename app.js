const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    if (loginInput.value==="") {
        alert("인풋에 글쓰기기기ㅣ");
    } else {
        console.log("hi",loginInput.value);
    }
}

loginButton.addEventListener("click",onLoginBtnClick )