# 🎙️ Podcast App
A responsive React application for browsing and filtering podcasts by genre, title, and update date. Built with accessibility, modularity, and scalability in mind.

## 🚀 Features

-  **Search** podcasts by title
-  **Filter** by genre using dropdown
-  **Sort** by newest, oldest, or alphabetical order
-  **Paginate** results based on screen size
-  **Responsive layout** with dynamic card count
-  **Global state management** via React Context


## 🧱 Tech Stack

- React (functional components + hooks)
- Context API for state sharing
- Custom filtering and sorting pipeline
- Responsive pagination logic

## 📁 Folder Structure

src/ 
├── api/ 
│
   └── fetchPodcasts.js 
├── components/ 
│   ├── Header.jsx
│   ├── SearchBar.jsx 
│   ├── GenreFilter.jsx 
│   ├── Sort.jsx 
│   ├── PodcastGrid.jsx 
│   ├── PodcastCard.jsx 
│   └── PaginationControls.jsx 
├── context/ 
│   ├── PodcastContext.js 
│    
└── data.js 
└── App.jsx
└── index.css
└── App.css
└── main.jsx
└── README.md


## 🧠 Context Overview

State managed via `PodcastContext` includes:

- `search`, `setSearch`
- `genre`, `setGenre`
- `sortKey`, `setSortKey`
- `page`, `setPage`, `pageSize`, `totalPages`
- `podcasts`: filtered, sorted, paginated list
- `allPodcastsCount`: total after filters
- `genres`: imported from static data

## 📦 Setup

```bash
npm install
npm run dev
```

## 🌍 API Reference
Podcast data is fetched from: https://podcast-api.netlify.app/shows

Genre metadata is imported from: /data.js

---
