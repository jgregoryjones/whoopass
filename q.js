var quotes = [
‘red',
‘green',
‘blue',
‘orange'
]
function newQuote() {
var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quotes').innerHTML = quotes.[randomNumber];
}
