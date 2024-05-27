import { renderSongs, renderSearchMusic } from "./ui.js";

const url =
  "https://shazam.p.rapidapi.com/charts/track?locale=tr-TR&pageSize=20&startFrom=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "62daa3f4d8msh4434cd1c8d199dep18ef4cjsn7c0a81d180ca",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

const urlTop =
  "https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%country";

const optionsTop = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "62daa3f4d8msh4434cd1c8d199dep18ef4cjsn7c0a81d180ca",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

export class API {
  constructor() {
    this.songs = [];
  }
  //* Popüler müzikleri getirir
  // async getPopular() {
  //   const response = await fetch(url, options);
  //   const data = await response?.json();

  //   //* API'den aldığımız şarkıları song dizisine aktartdık
  //   this.songs = data.tracks;
  //   //* Ekrana popüler müzikleri aktaracak fonksiyona songs dizisini parametre olarak gönderdik
  //   renderSongs(this.songs);
  // }
  //* Arama methodu
  async searchMusic(query) {
    const res = await fetch(
      `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR`,
      options
    );
    const data = await res.json();
    // Veriyi istediğimiz hale çevirme
    // song.track yerine song'a erişme
    let newData = data.tracks.hits;

    newData = newData.map((song) => ({ ...song.track }));
    this.songs = newData;

    // aratılan şarkıları ekrana basma
    renderSearchMusic(this.songs);
  }

  async topPopuler() {
    try {
      const response = await fetch(urlTop, optionsTop);

      const result = await response.json();

      this.songs = result.tracks;
      renderSongs(this.songs);
    } catch (error) {
      console.error(error);
    }
  }
}
