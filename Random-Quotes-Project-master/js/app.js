//immediate invoked function expression
(function() {
const quotes = [
    {
      quote:
        "Life",
      author: "Life"
    },
    {
      quote:
        "Humor",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God.",
      author: "Claude Louis Hector de Villars"
    },
    {
      quote: "The",
      author: "HENRY David Thoreau"
    },
    {
      quote:
        "xxx is",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "Axxxx critic",
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
