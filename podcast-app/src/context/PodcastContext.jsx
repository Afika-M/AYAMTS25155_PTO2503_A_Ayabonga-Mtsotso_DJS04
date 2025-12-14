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

  // Apply search filter only
  const applySearch = () => {
    if (!search.trim()) return initialPodcasts;
    const q = search.toLowerCase();
    return initialPodcasts.filter((p) => p.title.toLowerCase().includes(q));
  };

  const podcasts = applySearch();

  const value = {
    search,
    setSearch,
    podcasts,
    allPodcastsCount: podcasts.length,
  };

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}
