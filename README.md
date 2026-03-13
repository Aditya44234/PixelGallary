# Pixel Gallery

Pixel Gallery is a responsive **React + Vite photo gallery web application** that fetches images from a public API, displays them in a responsive grid, allows real-time search filtering, and lets users mark photos as favourites with persistent storage.

This project demonstrates modern React development practices including **custom hooks, reducers, memoization hooks, and responsive UI design using Tailwind CSS**.

---

# Tech Stack

- React (Functional Components + Hooks)
- Vite
- Tailwind CSS
- Picsum Photos API
- LocalStorage

---

# Features

## Fetch Photos from API

The application fetches **30 photos** from the Picsum Photos API when the app loads.

API used:

https://picsum.photos/v2/list?limit=30

While the request is in progress, a **loading spinner** is displayed.  
If the request fails, an **error message** is shown to the user.

This ensures proper **loading and error state handling**.

---

## Responsive Photo Grid

Photos are displayed in a responsive grid layout:

| Device | Columns |
|------|------|
| Mobile | 1 column |
| Tablet | 2 columns |
| Desktop | 4 columns |

Each photo card includes:

- Photo preview
- Author name
- Favourite toggle button

The layout is implemented using **Tailwind CSS responsive utilities**.

---

## Real-Time Search Filter

A search input is provided at the top of the page.

Users can search photos by **author name**.

Key behavior:

- Filtering happens **in real-time**
- No additional API requests are made
- Filtering operates on **already fetched data**

This ensures fast and efficient searching.

---

## Favourite Photos (useReducer)

Users can mark photos as favourites using a **heart icon button**.

Favourites are managed using **useReducer** instead of useState because the logic involves conditional state updates.

Reducer action:

```
TOGGLE_FAVOURITE
```

Logic:

- If the photo is already favourited → it is removed
- If the photo is not favourited → it is added

Using a reducer keeps the state logic **centralized and predictable**.

---

## Persistence with LocalStorage

Favourite photos persist across page refreshes.

This is implemented by syncing the reducer state with **localStorage**.

When the app loads, previously saved favourites are restored automatically.

---

## Custom Hook – useFetchPhotos

The API fetching logic is extracted into a custom hook called:

```
useFetchPhotos
```

The hook returns:

- `photos`
- `loading`
- `error`

This separates **data logic from UI components**, improving code organization and reusability.

---

## Performance Optimization

Two React optimization hooks are used.

### useMemo

`useMemo` is used to memoize the filtered photo list.

Filtering only runs when:

- `photos` change
- `search` input changes

This prevents unnecessary recalculations during unrelated re-renders.

---

### useCallback

`useCallback` is used to memoize the search handler function.

This ensures the function reference remains stable when passed to child components, preventing unnecessary re-renders.

---

# Project Structure

```
src
 ├── components
 │    ├── Gallery.jsx
 │    ├── PhotoCard.jsx
 │    ├── SearchBar.jsx
 │    └── Spinner.jsx
 │
 ├── hooks
 │    └── useFetchPhotos.js
 │
 ├── reducers
 │    └── favouriteReducer.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# Installation

Clone the repository:

```
git clone <your-repo-link>
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open the browser at:

```
http://localhost:5173
```

---

# Learning Objectives

This project demonstrates:

- React functional components
- Custom hooks
- Reducer-based state management
- Memoization for performance optimization
- Responsive UI design with Tailwind CSS
- Persistent client-side storage using localStorage

---

# Conclusion

Pixel Gallery showcases a clean and scalable approach to building modern React applications. By separating concerns between UI, state management, and data fetching, the application remains easy to maintain, extend, and optimize.