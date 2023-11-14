const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const mainArtist = document.getElementsByClassName("mainArtist")[0];
console.log(mainArtist);

const tableSongs = document.getElementsByClassName("table-songs")[0];

const URL = "https://deezerdevs-deezer.p.rapidapi.com/artist/" + id;

fetch(URL, {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "340f0fd2c3mshd061c26435823fbp17f559jsnc5395de2b6ca",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((artistiObj) => {
    console.log("artista", artistiObj);

    const imageArtist = document.createElement("img");
    imageArtist.src = artistiObj.picture_medium;

    const nameArtist = document.createElement("h2");
    nameArtist.innerText = artistiObj.name;

    mainArtist.appendChild(imageArtist);
    mainArtist.appendChild(nameArtist);
  });
