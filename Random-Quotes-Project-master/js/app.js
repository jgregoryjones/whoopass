//immediate invoked function expression
(function() {
  const quotes = [
{	      quote:	What happens is not as important as how you react to what happens.	      author: 	"Thaddeus Golas"		    },
{	      quote:	I hear and I forget, I see and I remember. I do and I understand.	      author:	“Chinese Proverb”		    },

  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
