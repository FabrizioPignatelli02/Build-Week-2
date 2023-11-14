const apiKey = "a5517754abmsheebe0b22e59947fp18c555jsn03bc96d636c4";
const apiHost = "deezerdevs-deezer.p.rapidapi.com";
let currentIndex = 0;
const maxElement = 10;

const fetchData = async (index) => {
  try {
    const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=christmas&index=${index}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost
      }
    });
    const data = await response.json();
    return data.data[0];
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateAlbum = async (index) => {
  const albumData = await fetchData(index);
  document.querySelector(".albumImage").src = albumData.album.cover;
  document.querySelector(".card-title").innerHTML = albumData.album.title;
  document.querySelector(".card-text").innerHTML = albumData.artist.name;
  document.querySelector(".card-description").innerHTML ?  albumData.description : "";
};

updateAlbum(currentIndex);

document.querySelector(".btn-B").addEventListener("click", () => {
  if (currentIndex < maxElement - 1) {
    currentIndex++;
    updateAlbum(currentIndex);
  }
});

document.querySelector(".btn-N").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateAlbum(currentIndex);
  }
});

