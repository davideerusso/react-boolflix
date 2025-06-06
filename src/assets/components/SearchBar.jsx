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

  return (
    <>
      <div className="navabar">
        <img src="../img/Netflix.png" />
        <form onSubmit={handleFormSubmit}>
          <input
            className="input "
            value={searchfilms}
            onChange={handleInputChange}
            type="text"
            placeholder="Cerca il film"
          ></input>
          <button className="button">Cerca</button>
        </form>
      </div>
    </>
  );
}
// export { searchfilms };
