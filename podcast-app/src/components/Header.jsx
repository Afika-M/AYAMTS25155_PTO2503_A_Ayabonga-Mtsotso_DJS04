import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";
import Sort from "./Sort";

export default function Header({ genres }) {
  return (
    <header className="app-header">
      <h1>🎙️ Podcast App</h1>
      <div>
        <SearchBar />
        <GenreFilter genres={genres} />
        <Sort />
      </div>
    </header>
  );
}
