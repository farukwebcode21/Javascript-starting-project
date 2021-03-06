const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("button");

// btn.addEventListener("click", getQuote);

// function getQuote() {
//   fetch(api)
//     .then((res) => res.json())
//     .then((data) => {
//       quote.innerHTML = `"${data.content}"`;
//       author.innerHTML = `- ${data.author}`;
//     });
// }


btn.addEventListener('click', function(){
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    });
  
})
console.log(btn);