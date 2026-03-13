import { useReducer, useState, useCallback, useMemo, useEffect } from "react";

import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { favouriteReducer } from "../reducers/favouriteReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");

  const [favorites, dispatch] = useReducer(favouriteReducer, [], () => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  });

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  const toggleFavourite = (id) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: id,
    });
  };

  if (loading) return <Spinner />;

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <SearchBar value={search} onChange={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFav={favorites.includes(photo.id)}
            toggleFavorite={toggleFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
