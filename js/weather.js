const API_KEY = "fd9508e143b9d5083dccc7553d9644f9";

// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            
            weather.innerText = `날씨 : ${data.weather[0].main} 온도 : ${data.main.temp}`
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

