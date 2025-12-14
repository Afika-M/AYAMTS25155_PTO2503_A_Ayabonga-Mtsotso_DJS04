import React, { createContext, useState } from "react";

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

  const applyFilters = () => {
    let data = [...initialPodcasts];

    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter((p) => p.title.toLowerCase().includes(q));
    }

    if (genre !== "all") {
      data = data.filter((p) => p.genres.includes(Number(genre)));
    }

    return data;
  };

  const podcasts = applyFilters();

  const value = {
    search,
    setSearch,
    genre,
    setGenre,
    podcasts,
    allPodcastsCount: podcasts.length,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
