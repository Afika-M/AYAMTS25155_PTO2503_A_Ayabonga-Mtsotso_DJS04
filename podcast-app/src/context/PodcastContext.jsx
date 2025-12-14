import React, { createContext, useState, useEffect } from "react";

/**
 * @typedef Podcast
 * @property {number} id - Unique identifier
 * @property {string} title - Podcast title
 * @property {string} updated - Last updated ISO date string
 * @property {number[]} genres - Array of genre IDs
 * @property {string} image - URL to podcast artwork
 * @property {number} seasons - Number of seasons
 */

export const PodcastContext = createContext();

export function PodcastProvider({ children, initialPodcasts }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [sortKey, setSortKey] = useState("date-desc");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  /**
   * Dynamically calculate how many cards can fit on screen.
   * Sets a fixed 10 cards for tablet and smaller screens.
   */
  useEffect(() => {
    const calculatePageSize = () => {
      const screenW = window.innerWidth;

      // Tablet and smaller (≤ 1024px): always show 10 cards
      if (screenW <= 1024) {
        setPageSize(10);
        return;
      }

      // For larger screens, calculate based on available width and 2 rows
      const cardWidth = 260;
      const maxRows = 2;
      const columns = Math.floor(screenW / cardWidth);
      const pageSize = columns * maxRows;

      setPageSize(pageSize);
    };

    calculatePageSize();
    window.addEventListener("resize", calculatePageSize);
    return () => window.removeEventListener("resize", calculatePageSize);
  }, []);

  /**
   * Applies the current search query, genre filter, and sort key
   * to the list of podcasts.
   * @returns {Podcast[]} Filtered and sorted podcasts
   */

  const applyFilters = () => {
    let data = [...initialPodcasts];

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (genre !== "all") {
      data = data.filter((p) => p.genres.includes(Number(genre)));
    }

    switch (sortKey) {
      case "title-asc":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        data.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "date-asc":
        data.sort((a, b) => new Date(a.updated) - new Date(b.updated));
        break;
      case "date-desc":
        data.sort((a, b) => new Date(b.updated) - new Date(a.updated));
        break;
      default:
        break;
    }

    return data;
  };

  const filtered = applyFilters();

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [search, sortKey, genre]);

  const value = {
    search,
    setSearch,
    sortKey,
    setSortKey,
    genre,
    setGenre,
    page: currentPage,
    setPage,
    totalPages,
    podcasts: paged,
    allPodcastsCount: filtered.length,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
