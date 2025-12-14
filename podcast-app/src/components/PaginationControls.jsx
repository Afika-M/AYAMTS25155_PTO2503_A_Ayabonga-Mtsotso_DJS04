import { useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";

export default function PaginationControls() {
  const { page, setPage, totalPages } = useContext(PodcastContext);

  return (
    <div className="pagination">
      <button
        className="page-btn"
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
      >
        ◀ Prev
      </button>

      <span className="page-num">
        Page {page} of {totalPages}
      </span>

      <button
        className="page-btn"
        disabled={page >= totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next ▶
      </button>
    </div>
  );
}
