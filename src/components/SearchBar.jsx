export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search by author..."
      value={value}
      onChange={onChange}
      className="w-full py-4 bg-white/30 px-5  border rounded mb-6 "
    />
  );
}
