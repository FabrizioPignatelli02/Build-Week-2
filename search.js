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
  const query = searchInput.value.trim(); // Trim the query to remove leading and trailing spaces
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
        listItem.innerHTML = `
            <h2>${song.artist.name}</h2>
            <p>${song.album.title}</p>
            <p>${song.title}</p>
            <img src="${song.artist.picture}" alt="${song.artist.name}">
            <p>${song.album.tracklist}</p>
          `;
        songList.appendChild(listItem);
      });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

searchInput.addEventListener("input", searchSongs);
