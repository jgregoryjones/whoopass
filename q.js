//change the quotes if desired. Add or delete additional quotes as desired.
var quotes = [
‘Don\'t wait for your ship to come in, swim out to it.',
‘Don\'t wait for your ship to come in, swim out to it.',
‘Don\'t wait for your ship to come in, swim out to it.',
‘Don\'t wait for your ship to come in, swim out to it.~bob'
]
function newQuote() {
var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quotes').innerHTML = quotes.[randomNumber]
}
