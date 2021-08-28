const images = [
    "cat.jpeg",
    "mountain.jpg",
    "vegan.jpg",
];

const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImg}`;

document.body.appendChild(bgImage);