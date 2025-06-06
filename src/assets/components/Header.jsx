import SearchBar from "./SearchBar";
import { useFilms } from "./FilmsContext";

export default function Header() {
  const { allItems } = useFilms();

  return (
    <div>
      <SearchBar allItems={allItems}></SearchBar>
    </div>
  );
}
