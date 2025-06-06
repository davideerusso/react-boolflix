import { useFilms } from "./FilmsContext";
import FilmCard from "./Filmcard";
export default function FilmList() {
  const { films, serietv } = useFilms();

  return <FilmCard films={films} serietv={serietv}></FilmCard>;
}
