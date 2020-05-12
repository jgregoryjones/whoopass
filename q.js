//change the quotes if desired. Add or delete additional quotes as desired.
var quotes = [
‘Don\'t wait for your ship to come in, swim out to it.<i>~Cathy Hopkins</i>',
‘Don\'t wait for your ship to come in, swim out to it.~Cathy Hopkins</i>',
‘Don\'t wait for your ship to come in, swim out to it.<i><b>~Cathy Hopkins</b></i>',
‘Don\'t wait for your ship to come in, swim out to it.<i>~Bob</i>'
]
function newQuote() {
var randomNumber = Math.floor(Math.random()*(quotes.length));
document.getElementById('quotes').innerHTML = quotes.[randomNumber]
}
