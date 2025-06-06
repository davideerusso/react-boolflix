import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import itFlag from

const apiUrl = "https://api.themoviedb.org/3";

const FilmsContext = createContext();

function SearchProvider({ children }) {
  const [films, setFilms] = useState([]);
  const [serietv, setSerietv] = useState([]);
  // const [allItems, setAllItems] = useState([]);

  const search = (query) => {
    axios
      .get(
        `${apiUrl}/search/movie?api_key=c91cda683436ff534f3d600980a32b8a&query=${query}&language=it-IT`
      )
      .then((res) => {
        const filmSearch = res.data.results;
        const newFilms = filmSearch.map((film) => ({
          type: "Film",
          id: film.id,
          title: film.title,
          original_title: film.original_title,
          original_language: film.original_language,
          vote_average: Math.floor(film.vote_average),
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
          id: serie.id,
          title: serie.name,
          original_title: serie.original_name,
          original_language: serie.original_language,
          vote_average: Math.floor(serie.vote_average),
        }));
        setSerietv(newSeries);
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
