const images = [
    "mountain.jpg",
    "1141103.jpeg",
    "920288769.jpeg",
    "o8XSD1.jpg"
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImg}`;

document.body.appendChild(bgImage);