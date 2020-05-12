var quotes=new Array()

//change the quotes if desired. Add/ delete additional quotes as desired.

quotes[1]=‘1Don\'t wait for your ship to come in, swim out to it.</br> <i>Cathy Hopkins</i>
quotes[2]=‘2Don\'t wait for your ship to come in, swim out to it.</br> <i>Cathy Hopkins</i>
quotes[3]=‘3Don\'t wait for your ship to come in, swim out to it.</br> <i><b>Cathy Hopkins</b></i>
quotes[4]=‘4Don\'t wait for your ship to come in, swim out to it.</br> <i>Cathy Hopkins</i>

var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
