import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [searchfilms, setSearchFilms] = useState([]);
  const [films, setFilms] = useState([]);
  const [serietv, setSerietv] = useState([]);
  const [all, setAll] = useState([]);

  const apiUrl = "https://api.themoviedb.org/3";
  //   const apiKey = "c91cda683436ff534f3d600980a32b8a";
  const query = searchfilms;

  //   const apiParams = { api_key: apiKey, query };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setSearchFilms(e.target.value);
  };
  useEffect(() => {
    axios
      .get(
        `${apiUrl}/search/movie?api_key=c91cda683436ff534f3d600980a32b8a&language=it_IT&query=${searchfilms}`
      )
      .then((res) => {
        const filmSearch = res.data.results;
        const newFilms = filmSearch.map((film) => ({
          type: "Film",

          title: film.title,
          original_title: film.original_title,
          original_language: film.original_language,
          vote_average: film.vote_average,
        }));
        setFilms(newFilms);
      });

    axios
      .get(
        `${apiUrl}/search/tv?api_key=c91cda683436ff534f3d600980a32b8a&language=it_IT&query=${searchfilms}`
      )
      .then((res) => {
        const SerieSearch = res.data.results;

        const newSeries = SerieSearch.map((serie) => ({
          type: "serieTv",
          title: serie.name,
          original_title: serie.original_name,
          original_language: serie.original_language,
          vote_average: serie.vote_average,
        }));
        setSerietv(newSeries);
      });
    const allItems = [...films, ...serietv];
    setAll(allItems);
    console.log("all", allItems);
  }, [searchfilms]);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="input "
          name={searchfilms}
          value={films.title}
          onChange={handleInputChange}
          type="text"
          placeholder="Cerca il film"
        ></input>
        <button>Cerca</button>
      </form>
      {all.map((film) => (
        <div>
          <h2>{film.title}</h2>
          <p>{film.original_title}</p>
          <p>{film.original_language}</p>
          <p>{film.vote_average}</p>
          <p>{film.type}</p>
        </div>
      ))}
    </>
  );
}
