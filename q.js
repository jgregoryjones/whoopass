var quotes=new Array()
//
//change the quotes if desired. Add/ delete additional quotes as desired.
quotes[1]=‘As I grow older, I pay less attention to what men say. I just watch what they do. <i>Cathy Hopkins</i>'
quotes[2]=‘ait for your ship to come in, swim out to it. <i>Cathy Hopkins</i>'
quotes[3]=‘D for your ship to come in, swim out to it. <i><b>Cathy Hopkins</b></i>'
quotes[4]=‘Door your ship to come in, swim out to it. <i>Cathy Hopkins</i>'
//
var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
