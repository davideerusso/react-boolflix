import { createContext, useContext, useEffect, useState } from "react";

const FilmsContext = createContext();

function FilmsProvider({ children }) {
  const [films, setFilms] = useState([]);
  const apiUrl = "https://api.themoviedb.org/3";
  const apiKey = "c91cda683436ff534f3d600980a32b8a";
  const query = "Ritorno";

  const apiParams = { api_Key: apiKey, query };
  const queryString = new URLSearchParams(apiParams).toString;

  useEffect(() => {
    axios.get(`${apiUrl}/search/movie?${queryString}`).then((res) => {
      const filmSearch = res.data;
      setFilms(filmSearch);
    });
  }, []);
  const filmsData = { films };
  return (
    <FilmsContext.Provider value={filmsData}>{children}</FilmsContext.Provider>
  );
}

function useFilms() {
  return useContext(FilmsContext);
}
export { FilmsProvider, useFilms };
