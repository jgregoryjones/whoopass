//quotes array
var quotes = [{
    quote: "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
    source: "-Lao Tzu",
  }, {
    quote: "Behind every successful man is a woman rolling her eyes.",
    source: "-Jim Carrey",
  }, {
    quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    source: "-Ralph Waldo Emerson",
  }, {
    quote: "Look deep into nature, and then you will understand everything better.",
    source: "-Albert Einstein",
  }, {
    quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn’t sit for a month.",
    source: "-Theodore Roosevelt",
  }

];

//array for seen quotes
var seenQuotes = [];
var randomQuote;

//function for randomizing quotes
function getRandomQuote() {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  if (quotes.length == 0) {
    seenQuotes = quotes;
  }
  return randomQuote;
};

//function to print quote
function printQuote() {
  var clickQuote = getRandomQuote();
  console.log(clickQuote);
  printText = '<p class="quote">' + clickQuote.quote + '</p>' + '<p class="source">' + clickQuote.source + '</p>'
  document.getElementById('quotes').innerHTML = printText;
};


getRandomQuote();
printQuote();
