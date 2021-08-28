const quotes = [
    {
        quote: "명언일",
        author: "작가일"
    },{
        quote: "명언이",
        author: "작가이"
    },{
        quote: "명언삼",
        author: "작가삼"
    },{
        quote: "명언사",
        author: "작가사"
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;