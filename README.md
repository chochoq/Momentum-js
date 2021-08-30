# Momentum

기술스택: CSS, HTML, JavaScript

생성일: 2021년 8월 31일 오전 1:15


# 링크

[Momentum](https://chochoq.github.io/Momentum-js/)

[노션 페이지](https://persistent-fruit-85b.notion.site/Momentum-ab4cf973210140e193d54bce6203a0dd)

# 깃허브

[GitHub - chochoq/Momentum-js](https://github.com/chochoq/Momentum-js)

# **서비스설명**

![스크린샷 2021-08-31 오전 1.17.57.png](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F23d23f47-bb38-42bd-a4e7-50b9db416404%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.17.57.png?table=block&id=b606bc22-6caf-494e-a297-2500fd95e27f&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=3300&userId=&cache=v2)

![스크린샷 2021-08-31 오전 1.19.11.png](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F567c0ef5-0563-47bf-a0fc-75146bb08942%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_1.19.11.png?table=block&id=37007d82-e5f3-45a7-be11-175dca34bef3&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=3300&userId=&cache=v2)

chrome extension 인 Momentum과 비슷한 기능을 만들었습니다.

# 🛠기술스택🛠

- HTML
- CSS
- JavaScript

# 기술 구현 사항

- 배경이미지 (background.js)
    - default로 넣은 이미지를 random으로 rendering시킨다.

        Math.random() → 숫자를 random으로(type ⇒ float)만들어준다.

        Math.floor() → 소수점 이하를 반올림한다.

        ```jsx
        // background.js
        const randomImg = images[Math.floor(Math.random() * images.length)];
        ```

    - html에 img를 넣어준다.

        ```jsx
        // background.js
        const bgImage = document.createElement("img");
        bgImage.src = `img/${randomImg}`;
        document.body.appendChild(bgImage);
        ```

    - 배경 css

        z-index로 백그라운드를 줌

        ```css
        position: fixed;
        z-index: 0;
        ```

- 이름넣기, 로그인(greeting.js)
    - submit은 form안에 있어야 작동한다.

        <class="hidden">은 로그인(local storage)을 한 후에 보이고 안보이고를 결정하기 위한 것.

        ```html
        <!-- index.hTML -->
        <form id="login-form" class="hidden">
            <input required maxlength="8" type="text" placeholder="이름을 적어주세요"/>
            <button type="submit" value="Login">확인</button>
        </form>

        <h1 id="greeting" class="hidden"></h1>
        ```

    - input에 이름을 넣었을 때
        ![](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa4693a17-eeb6-4b3c-9812-b1769514307c%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.47.20.png?table=block&id=32862f1b-8c3d-44bd-8a57-6435b8e7f40e&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=670&userId=&cache=v2)
        Submit()은 새로고침이 되기 때문에 preventDefault()를 해준다.

        localStorage.setItem()는 userName이라는 key값으로 이름을 넣어준다.

        classList.add("hidden")으로 이름을 넣었을 때 input을 숨겨준다.

        ```jsx
        // greeting.js
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
        ```

        - 로그인 후 환영해주는 문구를 표시해준다.

            localStorage.getItem("userName")은 localStorage안에있는 userName을 가져올 수 있다.

            ```jsx
            // greeting.js
            function paintGreeting() {
                const userName = localStorage.getItem(USERNAME_KEY);
                greeting.innerText = `Welcome back ${userName}!!`;
                greeting.classList.remove(HIDDEN_CLASS_NAME);
            }
            ```

        - localStorage안에 username이 저장 유무에 따른 veiw구성

            null값일 때 loginForm에서 submit 이벤트가 발동 되었을 때, onLoginSubmit 펑션 작동

            ```jsx
            // greeting.js
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
            ```

- 시간(clock.js)
    - `const date = new Date();` 
    년 월 일 시 분 초 밀리초까지 나타낸다.(타임스탬프)
    - 시간에서 01, 02를 만들기위해 padStart(2, '0')를 만들어준다.
    ![](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd82b8f8f-8a4c-4872-aa88-e0d3a36761bf%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.46.50.png?table=block&id=077bda07-b7d8-400f-8927-89e270aa3ccf&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=860&userId=&cache=v2)
        ```jsx
        // clock.js
        const clock = document.querySelector("h2#clock");

        function getClock() {
            const date = new Date();
            const hour = String(date.getHours()).padStart(2, '0');
            const minute = String(date.getMinutes()).padStart(2, '0');
            const second = String(date.getSeconds()).padStart(2, '0');
            
            clockHour.innerText = `${hour}:${minute}`;
            clockSecond.innerText = `:${second}`;
        }

        getClock();
        ```

    - 1(1000)초마다 업데이트를 해줍니다

        ```jsx
        // clock.js
        setInterval(getClock, 1000);
        ```

- todoList(todo.js)
    - todo를 작성했을 때

        ```jsx
        // todo.js
        const todoInput = todoForm.querySelector("input");
        const todoForm = document.getElementById("todo-form");
        let todos = [];

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
        ```

    - localStorage에 있는 todos를 가져와 JSON.parse()로 JSON형태로 만들어주고 배열로 저장한다.
        ![](https://persistent-fruit-85b.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F06706cee-18b3-4b1e-afb4-617364375ead%2F%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2021-08-31_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_3.47.49.png?table=block&id=2c074ffb-785c-46e4-93e5-3ffeb47498c5&spaceId=a07b9679-e55c-4b34-ad51-a4e7fac6c83a&width=670&userId=&cache=v2)
        forEach()로 각각 저장된 배열을 하나씩 꺼내준다.

        ```jsx
        // todo.js
        // todo를 로컬스토리지에 배열 형태로 저장
        const savedTodos = localStorage.getItem(TODOS_KEY);

        if (savedTodos) {
            const parsedTodos = JSON.parse(savedTodos);
            todos = parsedTodos;
            parsedTodos.forEach(paintTodo);
        }
        ```

    - 리스트 삭제

        각각의 id값을 비교해 filter로 리스트를 새로 그려준다.

        ```jsx
        function saveTodos() {
            localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
        }

        function deleteTodoList(e) {
            const li = e.target.parentElement;
            li.remove();
            todos = todos.filter((todo) => todo.id !== parseInt(li.id));
            saveTodos();
        };
        ```

- weather(weather.js)
    - `navigator.geolocation`는 웹 사이트 또는 앱에서 사용자의 위치를 기반으로 맞춤화된 결과를 제공할 수 있다.

        `geolocation.getCurrentPosition(success,error)`는 장치의 현재 위치를 가져오는 데 사용된다.

        success은 성공했을 때의 콜백함수, error은 실패했을 때의 콜백함수.

        ```jsx
        navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
        ```

    - fetch와 [API](https://openweathermap.org/current)를 이용한다.

        url에서 확인할 수 있는 json에서의 lat, lon을 선언.

        ```jsx
        // weather.js
        function onGeoOk(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
            
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const weather = document.querySelector("#weather span:first-child");
                    const city = document.querySelector("#weather span:last-child");
                    
                    weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`
                    city.innerText = `/ Your ${data.name}`;
                });
        }
        ```

# 프로젝트 후기

좋았던 점

es6문법으로 js 작성했다. 옛날 스타일로 js를 가끔 사용하기도 했는데, 이를 고칠 수 있게 된 기회!

아쉬웠던 점

CSS는 항상 어렵다ㅠ

레이아웃을 짜는 것 부터 그것을 만드는 것까지, 어떻게 수련(?) 해야할지 고민이 된다.