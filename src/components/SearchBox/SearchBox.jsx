import css from './SearchBox.module.css';

export default function SearchBox({ filter, onFilter }) {
  return (
    <div className={css.filter}>
      <input
        type="text"
        value={filter}
        onChange={e => onFilter(e.target.value)}
        className={css.filterInput}
        placeholder="Search user"
      />
    </div>
  );
}
