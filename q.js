var quotes=new Array()
//
//change the quotes if desired. Add/ delete additional quotes as desired.
quotes[1]=‘As I grow older, I pay less attention to what men say. I just watch what they do.</br> <i>Cathy Hopkins</i>'
quotes[2]=‘Don\'t wait for your ship to come in, swim out to it.</br> <i>Cathy Hopkins</i>'
quotes[3]=‘Don\'t wait for your ship to come in, swim out to it.</br> <i><b>Cathy Hopkins</b></i>'
quotes[4]=‘Don\'t wait for your ship to come in, swim out to it.</br> <i>Cathy Hopkins</i>'
//
var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
