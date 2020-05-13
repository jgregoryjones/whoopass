//immediate invoked function expression
(function() {
const quotes = [
    {
      quote:
        "Life",
      author: "ooooLife"
    },
    {
      quote:
        "Humoroooo",
      author: "ooooJohn Kenneth Galbraith"
    },
    {
      quote:
        "God.",
      author: "oooooClaude Louis Hector de Villars"
    },
    {
      quote: "The",
      author: "HENRY David Thoreau"
    },
    {
      quote:
        "Life is",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic",
      author: "Tyne Daly"
    }
  ];
  
  const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
})();
