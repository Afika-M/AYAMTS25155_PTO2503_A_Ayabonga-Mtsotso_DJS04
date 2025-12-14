import SearchBar from "./SearchBar";
import GenreFilter from "./GenreFilter";

export default function Header({ genres }) {
  return (
    <header className="app-header">
      <h1>🎙️ Podcast App</h1>
      <SearchBar />
      <GenreFilter genres={genres} />
    </header>
  );
}
