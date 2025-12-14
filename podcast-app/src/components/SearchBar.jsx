import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

export default function SearchBar() {
  const { search, setSearch } = useContext(PodcastContext);

  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search podcasts..."
    />
  );
}
