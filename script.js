// Quote data
const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Do not watch the clock. Do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    }
];

// DOM elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-quote');

// Generate random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display new quote
function displayNewQuote() {
    const { quote, author } = getRandomQuote();
    quoteElement.textContent = quote;
    authorElement.textContent = author;
    
    // Update tweet button
    tweetBtn.setAttribute(
        'href',
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`
    );
}

// Event listeners
newQuoteBtn.addEventListener('click', displayNewQuote);

// Display first quote on load
displayNewQuote();