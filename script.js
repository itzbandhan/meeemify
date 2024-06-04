const API = "https://meme-api.com/gimme";
const result = document.getElementById('memecontainer');
const btn = document.getElementsByClassName('btn');
  const loader = document.getElementById("loader");
function generateMeme() {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        const meme = data.url;
        result.innerHTML = `<img src="${meme}" class="img-custom" alt="Meme">`;
        loader.classList.add("hidden");
        // const meme = data.url;
        // result.innerHTML = `<img src="${meme}" alt="Meme">`;
      })
      .catch((error) => {
        console.error(error);

        // Optionally handle errors and hide the loader
        loader.classList.remove("hidden");
      });
}
generateMeme();