import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import gbFlag from "../img/gb.png";
import itFlag from "../img/it.png";
import usFlag from "../img/us.png";
import frFlag from "../img/fr.png";
import jpFlag from "../img/jp.png";

import unknownFlag from "../img/so.png";

const apiUrl = "https://api.themoviedb.org/3";

const FilmsContext = createContext();

function SearchProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [serietv, setSerietv] = useState([]);
  // const [allItems, setAllItems] = useState([]);

  const getFlag = (lang) => {
    if (lang === "en") return gbFlag;
    if (lang === "it") return itFlag;
    if (lang === "us") return usFlag;
    if (lang === "fr") return frFlag;
    if (lang === "jp") return jpFlag;
    else return unknownFlag;
  };

  const search = (query) => {
    axios
      .get(
        `${apiUrl}/search/movie?api_key=c91cda683436ff534f3d600980a32b8a&query=${query}&language=it-IT`
      )
      .then((res) => {
        const filmSearch = res.data.results;
        const newFilms = filmSearch.map((film) => ({
          type: "Film",
          image: "https://image.tmdb.org/t/p/w342" + film.poster_path,
          id: film.id,
          title: film.title,
          original_title: film.original_title,
          original_language: getFlag(film.original_language),
          vote_average: Math.floor(film.vote_average * 0.5 + 1),
        }));
        setFilms(newFilms);
      });

    axios
      .get(
        `${apiUrl}/search/tv?api_key=c91cda683436ff534f3d600980a32b8a&query=${query}&language=it-IT`
      )
      .then((res) => {
        const SerieSearch = res.data.results;

        const newSeries = SerieSearch.map((serie) => ({
          type: "serieTv",
          image: "https://image.tmdb.org/t/p/w342" + serie.poster_path,

          id: serie.id,
          title: serie.name,
          original_title: serie.original_name,
          original_language: getFlag(serie.original_language),
          vote_average: Math.floor(serie.vote_average * 0.5 + 1),
        }));
        setSerietv(newSeries);
        console.log(serietv);
      });
  };
  const searchData = { search, films, serietv };

  return (
    <FilmsContext.Provider value={searchData}>{children}</FilmsContext.Provider>
  );
}

function useFilms() {
  return useContext(FilmsContext);
}
export { SearchProvider, useFilms };
