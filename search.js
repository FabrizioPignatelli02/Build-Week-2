function tryToSearch() {
  const input = document.getElementById("search");

  input.style.display = input.style.display === "none" || input.style.display === "" ? "block" : "none";
}
// a
const apiKey = "a5517754abmsheebe0b22e59947fp18c555jsn03bc96d636c4";
const apiHost = "deezerdevs-deezer.p.rapidapi.com";

const searchInput = document.getElementById("search");
const songList = document.getElementById("songList");

const searchSongs = async () => {
  const query = searchInput.value.trim();
  if (!query) return;

  try {
    const res = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost
      }
    });
    const result = await res.json();

    if (!songList) {
      console.error("Err");
    } else {
      songList.innerHTML = "";
      result.data.forEach((song) => {
        const listItem = document.createElement("li");
        listItem.className = "song";

        const imgContainer = document.createElement("div");
        imgContainer.className = "image-container";

        // imgContainer.style.width = "120px"
        // imgContainer.style.height = "120px"
        // imgContainer.style.backgroundImage = song.artist.picture
        // console.log(song.artist);
        imgContainer.style = `width:120px;height:120px; margin:auto; background-image: url(${song.artist.picture}); background-position:center; ;background-size:cover ;background-repeat:no-repeat`;

        const textContainer = document.createElement("div");
        textContainer.className = "text-container";

        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p2.className = "smallParag";

        h2.textContent = song.artist.name;
        p1.textContent = song.album.title;
        p2.textContent = song.title;

        textContainer.appendChild(h2);
        textContainer.appendChild(p1);
        textContainer.appendChild(p2);

        const logoContainer = document.createElement("div");
        logoContainer.className = "logo-container";

        const logo = document.createElement("img");
        logo.src = "./assets/imgs/logo.svg";
        logo.alt = "logo.svg";

        logoContainer.appendChild(logo);

        imgContainer.appendChild(logoContainer);
        listItem.appendChild(imgContainer);
        listItem.appendChild(textContainer);

        songList.appendChild(listItem);
      });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

searchInput.addEventListener("input", searchSongs);

// color random

function getRandomColor() {
  const letters = "0123456789ABCDEFG";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".searchCard");

  cards.forEach(function (card) {
    card.style.backgroundColor = getRandomColor();
  });
});
