export default function PhotoCard({ photo, isFav, toggleFavorite }) {
  return (
    <div className="group border rounded-md overflow-hidden shadow relative cursor-pointer">

      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-60 object-cover"
      />

      <div className="p-3 flex justify-between items-center">
        <p className="text-sm font-medium">{photo.author}</p>

        <button
          onClick={() => toggleFavorite(photo.id)}
          className="text-xl"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Hover bottom line */}
      <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-emerald-500  transition-all duration-500 group-hover:w-full"></span>

    </div>
  );
}