var quotes=new Array()

//change the quotes if desired. Add/ delete additional quotes as desired.

quotes[1]=‘Don\'t wait for your ship to come in, swim out to it.<i>~Cathy Hopkins</i>'

quotes[2]=‘Don\'t wait for your ship to come in, swim out to it.~Cathy Hopkins</i>'

quotes[3]=‘Don\'t wait for your ship to come in, swim out to it.<i><b>~Cathy Hopkins</b></i>'

quotes[4]=‘Don\'t wait for your ship to come in, swim out to it.<i>~Bob</i>'

var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
