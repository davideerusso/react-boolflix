import { useEffect, useState } from "react";
import { useFilms } from "./FilmsContext";

// import axios from "axios";

export default function SearchBar({ allItems }) {
  const { search, films, serietv } = useFilms();

  const [searchfilms, setSearchFilms] = useState("");
  // const [films, setFilms] = useState([]);
  // const [serietv, setSerietv] = useState([]);
  // const [all, setAll] = useState([]);

  // const apiUrl = "https://api.themoviedb.org/3";
  // const query = searchfilms;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    search(searchfilms);
  };

  const handleInputChange = (e) => {
    setSearchFilms(e.target.value);
  };
  // useEffect(() => {
  //   axios
  //     .get(
  //       `${apiUrl}/search/movie?api_key=c91cda683436ff534f3d600980a32b8a&query=${searchfilms}&language=it-IT`
  //     )
  //     .then((res) => {
  //       const filmSearch = res.data.results;
  //       const newFilms = filmSearch.map((film) => ({
  //         type: "Film",
  //         id: film.id,
  //         title: film.title,
  //         original_title: film.original_title,
  //         original_language: film.original_language,
  //         vote_average: Math.floor(film.vote_average),
  //       }));
  //       setFilms(newFilms);
  //     });

  //   axios
  //     .get(
  //       `${apiUrl}/search/tv?api_key=c91cda683436ff534f3d600980a32b8a&query=${searchfilms}&language=it-IT`
  //     )
  //     .then((res) => {
  //       const SerieSearch = res.data.results;

  //       const newSeries = SerieSearch.map((serie) => ({
  //         type: "serieTv",
  //         id: serie.id,
  //         title: serie.name,
  //         original_title: serie.original_name,
  //         original_language: serie.original_language,
  //         vote_average: Math.floor(serie.vote_average),
  //       }));
  //       setSerietv(newSeries);
  //     });
  //   const allItems = [...films, ...serietv];
  //   setAll(allItems);
  //   console.log("all", allItems);
  // }, [searchfilms]);

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          className="input "
          value={searchfilms}
          onChange={handleInputChange}
          type="text"
          placeholder="Cerca il film"
        ></input>
        <button>Cerca</button>
      </form>
    </>
  );
}
// export { searchfilms };
