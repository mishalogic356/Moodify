let music = document.querySelector("#music");
let quote = document.querySelector("#quote");

let happyBtn = document.querySelector("#happy");
let sadBtn = document.querySelector("#sad");
let motivatedBtn = document.querySelector("#motivated");
let tiredBtn = document.querySelector("#tired");

const happyQuotes = [
    "Keep smiling, brighter days are ahead 😊",
    "Happiness looks good on you ✨",
    "Enjoy every little moment 🌸"
];

const sadQuotes = [
    "Bad days do not last forever 💙",
    "You are stronger than you think 🌈",
    "Every storm eventually passes ☁️"
];

const motivatedQuotes = [
    "Dream big and work hard 🚀",
    "Success starts with consistency 🔥",
    "Push yourself, you can do it 💪"
];

const tiredQuotes = [
    "Rest is also productive 🌙",
    "Take a deep breath and relax ☕",
    "Slow down, you deserve peace ✨"
];

happyBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * happyQuotes.length);

    quote.innerText = happyQuotes[random];

    document.body.style.background =
    "linear-gradient(135deg,#f9d423,#ff4e50,#ff9a9e)";
    music.src = "ikoliks_aj-acoustic-spring-mothers-day-music-320427.mp3";
    music.play();
});

motivatedBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * motivatedQuotes.length);

    quote.innerText = motivatedQuotes[random];

    document.body.style.background =
    "linear-gradient(135deg,#fc466b,#3f5efb,#6a11cb)";
    music.src = "sigmamusicart-inspirational-cinematic-motivational-music-379731.mp3";
    music.play();
});

sadBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * sadQuotes.length);

    quote.innerText = sadQuotes[random];

    document.body.style.background =
    "linear-gradient(135deg,#5b86e5,#36d1dc,#7f7fd5)";
    music.src = "paulyudin-sad-sad-music-485935.mp3";
music.play();
});

tiredBtn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * tiredQuotes.length);

    quote.innerText = tiredQuotes[random];

    document.body.style.background =
    "linear-gradient(135deg,#614385,#516395,#3a6186)";
    music.src = "u_xg7ssi08yr-sleep-387304.mp3";
    music.play();
});