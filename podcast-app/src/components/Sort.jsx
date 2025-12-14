import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

export default function SortDropdown() {
  const { sortKey, setSortKey } = useContext(PodcastContext);

  return (
    <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
      <option value="date-desc">Newest First</option>
      <option value="date-asc">Oldest First</option>
      <option value="title-asc">Title A → Z</option>
      <option value="title-desc">Title Z → A</option>
    </select>
  );
}
