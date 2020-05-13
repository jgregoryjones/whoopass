//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Listen to the mustn’ts, child. Listen to the don’ts. Listen to the shouldn’ts, the impossibles, the won’ts. Listen to the never haves, then listen close to me… Anything can happen, child. Anything can be.",
      author: "Shel Silverstein"
    },
    {
      quote:
        "Most men lead lives of quiet desperation and go to the grave with their song still in them.",
      author: "HENRY DAVID THOREAU"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "Henry David Thoreau"
    },
    {
      quote:
        "Bullshit is work that is done merely to complete requirements, make you look good, or otherwise fill up the hours of the day.",
      author: "Chris Guillebeau, The Art of Non-Conformity"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
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
