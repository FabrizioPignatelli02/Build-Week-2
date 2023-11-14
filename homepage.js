const apiKey = "a5517754abmsheebe0b22e59947fp18c555jsn03bc96d636c4";
const apiHost = "deezerdevs-deezer.p.rapidapi.com";
let currentIndex = Math.floor(Math.random() * 100) * 100;
const maxElement = 10;

const fetchData = async (index) => {
  try {
    const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=album:${index}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": apiHost
      }
    });
    const data = await response.json();
    console.log(data);
    return data.data[0];
  } catch (error) {
    console.error("Error:", error);
  }
};

const updateAlbum = async (index) => {
  const albumData = await fetchData(index);
  console.log(albumData);
  document.querySelector(".albumImage").src = albumData.album.cover;
  document.querySelector(".card-title").innerHTML = albumData.title;
  document.querySelector(".card-text").innerHTML = albumData.artist.name;  
};

updateAlbum(currentIndex);

