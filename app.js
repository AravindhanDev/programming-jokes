var coding_quotes = [
    "// This line doesn't actually do anything, but the code stops working when I delete it.",
    "Honey, go to the store and buy some eggs OK. Oh and while you're there, get some milk.' He never returned.",
    "There are only 10 kinds of people in this world: those who know binary and those who don't.",
    "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    "Algorithm: A word used by programmers when they don't want to explain how their code works.",
    "I have a joke about Stack Overflow, but you would say it's a duplicate.",
    "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
    "Two SQL tables sit at the bar. A query approaches and asks Can I join you?",
    "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
    "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
    "Judge: 'I sentence you to the maximum punishment...' Me (thinking): 'Please be death, please be death...' Judge: 'Learn Java!' Me: 'Damn.",
    "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says 'Do you get the reference?' But Java didn't.",
    "Hey Girl, Roses are #ff0000, Violets are #0000ff, I use hex codes, But I'd use RGB for you.",
    "Knock knock. Who's there? Recursion. Recursion who? Knock knock.",
    "Eight bytes walk into a bar. The bartender asks, 'Can I get you anything?' 'Yeah,' reply the bytes. 'Make us a double.",
    "Can I tell you a TCP joke?' 'Please tell me a TCP joke.' 'OK, I'll tell you a TCP joke.",
    "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
    "The generation of random numbers is too important to be left to chance.",
    "There are only 10 kinds of people in this world: those who know binary and those who don't.",
    "A guy walks into a bar and asks for 1.4 root beers. The bartender says 'I'll have to charge you extra, that's a root beer float'. The guy says 'In that case, better make it a double.",
    "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
    "The six stages of debugging: 1. That can't happen. 2. That doesn't happen on my machine. 3. That shouldn't happen. 4. Why does that happen? 5. Oh, I see. 6. How did that ever work?",
    "ASCII silly question, get a silly ANSI.",
    "Knock, knock.' 'Who's there?' [very long pause] 'Java."
]

const quotesBlock = $("#quotes");
const quotes = $(".quote");
const button1 = $(".butn1")
const button2 = $(".butn2")
const success = $("#popup")
const terminal = $(".terminal")
const down = $(".down")
const whole = $(".whole")

let rand = 0;

button1.on('click', () => {
    rand = Math.floor(Math.random() * 6) + 1;
    quotes.text(coding_quotes[rand]);
    quotesBlock.addClass("bg")
    quotes.addClass("font")
});

button2.on('click', () => {
    let quoteText = quotes.html();
    copyText(quoteText);
    success.fadeIn("slow");
    setTimeout(() => {
        success.fadeOut();
    }, 500);
});


function copyText(text) {
    navigator.clipboard.writeText(text);
}

down.on('click', () => {
    whole.slideToggle();
})