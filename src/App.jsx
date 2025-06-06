import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import { SearchProvider } from "./assets/components/FilmsContext";

export default function App() {
  return (
    <>
      <SearchProvider>
        <Header></Header>
        <Main></Main>
      </SearchProvider>
    </>
  );
}
