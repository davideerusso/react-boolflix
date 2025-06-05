import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [searchfilms, setSearchFilms] = useState([]);
  const [films, setFilms] = useState([]);
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
        // const filmSearch = res.data.results;
        setFilms(res.data.results);
        console.log(res.data.results);
      });
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
      {films.map((film) => (
        <div>
          <h2>{film.title}</h2>
          <p>{film.original_title}</p>
          <p>{film.original_language}</p>
          <p>{film.vote_average}</p>
        </div>
      ))}
    </>
  );
}
