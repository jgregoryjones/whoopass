var quotes=new Array()
//
//change the quotes if desired. Add/ delete additional quotes as desired.
quotes[1]=‘As I grow older, I pay less attention to what men say. I just watch what they do.'
quotes[2]=‘ait for your ship to come in, swim out to it.'
quotes[3]=‘D for your ship to come in, swim out to it.'
quotes[4]=‘Door your ship to come in, swim out to it.'
//
var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
