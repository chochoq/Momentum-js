const quotes = [
    {
        quote: "컴퓨터는 쓸모가 없다. 그것은 그냥 대답만 할 수 있다.",
        author: "Pablo Picasso"
    },{
        quote: "하드웨어 : 사람이 발로 걷어찰 수 있는 컴퓨터의 부분",
        author: "Jeff Pesis"
    },{
        quote: "창 밖으로 집어던질 수 없는 컴퓨터는 절대 믿지 마라.",
        author: "Steve Wozniak"
    },{
        quote: "버클리에서 나온 두 개의 제품이 있다.바로 LSD(환각제)와 UNIX 다.우리는 이것이 우연의 일치라고 믿을 수 없다.",
        author: "Jeremy S. Anderson"
    },
]

const quoteContainer = document.querySelector("#quote");
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;