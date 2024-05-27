import { elements } from "./helpers.js";

export const renderSongs = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    //* Kart datasına kart elemanına bazı verileri ekleme
    const div = document.createElement("div");
    div.dataset.url = song.preview_url;
    div.dataset.title = song.name;
    if (song.album.images && song.album.images.length > 0) {
      div.dataset.img = song.album.images.coverart;

      div.className = "card";
      div.innerHTML = `      
    <figure>
        <img
        src="${song.album.images[1].url}"
        alt=""
        />
        <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
    <h4>${song.album.artists[0].name}</h4>
    <h4>${song.name.slice(0, 10) + "..."}</h4>`;
      elements.list.appendChild(div);
    }
  });
};

export const renderPlayingInfo = (song) => {
  elements.playingInfo.innerHTML = `
  <img
  src="${song.img === "undefined" ? "../images/no-text.png" : song.img}"
  id="info-img"
  class=""
  alt=""
  />
  <div>
    <p>Şu an oynatılıyor...</p>
    <h3>${song.title}</h3>
  </div>
  
  `;
};
//* Başlığı günceller
export const updateTitle = (message) => {
  elements.title.innerText = message;
};

export const renderSearchMusic = (songs) => {
  elements.list.innerHTML = "";
  songs.forEach((song) => {
    //* Kart datasına kart elemanına bazı verileri ekleme
    const div = document.createElement("div");
    div.dataset.url = song.hub?.actions?.pop().uri;
    div.dataset.title = song.title;
    div.dataset.img = song.images?.coverart;

    div.className = "card";
    div.innerHTML = `      
    <figure>
        <img
        src="${song.images?.coverart}"
        alt=""
        />
        <div class="play">
        <i class="bi bi-play-fill" id="play-btn"></i>
        </div>
    </figure>
    <h4>${song.subtitle}</h4>
    <h4>${song.title.slice(0, 15) + "..."}</h4>`;
    elements.list.appendChild(div);
  });
};
