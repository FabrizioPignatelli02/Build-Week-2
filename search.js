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
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const img = document.createElement("img");
        const p3 = document.createElement("p");

        h2.textContent = song.artist.name;
        p1.textContent = song.album.title;
        p2.textContent = song.title;
        img.src = song.artist.picture;
        img.alt = song.artist.name;
        p3.textContent = song.album.tracklist;

        listItem.appendChild(h2);
        listItem.appendChild(p1);
        listItem.appendChild(p2);
        listItem.appendChild(img);
        listItem.appendChild(p3);

        songList.appendChild(listItem);
      });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

searchInput.addEventListener("input", searchSongs);
