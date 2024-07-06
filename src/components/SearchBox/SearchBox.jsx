export default function SearchBox({ filter, onFilter }) {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
