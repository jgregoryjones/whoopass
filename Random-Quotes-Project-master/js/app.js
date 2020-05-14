//immediate invoked function expression
(function() {
const quotes = [
{quote:"Whether you think you can or whether you think you can't, you're right!",author: "Henry Ford”},
    {
      quote:
        "Most men lead lives of quiet desperation and go to the grave with their song still in them.",
      author: "Henry David Thoreau"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars"
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
      author: "Tyne Daly"
    },
{
      quote:
        "You don’t have to live your life the way other people expect you to.",
      author: "Chris Guillebeau, The Art of Non-Conformity"
    },
{
      quote:
        "I don’t understand why people are frightened of new ideas. I’m frightened of the old ones.",
      author: "John Cage"
    },
{
      quote:
        "The great pleasure in life is doing what people say you cannot do.",
      author: "Walter Bagehot"
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
