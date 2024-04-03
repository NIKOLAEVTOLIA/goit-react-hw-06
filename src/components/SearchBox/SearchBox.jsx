import { useId } from 'react';
import css from './SearchBox.module.css';

function SearchBox({ value, onChange }) {
  const searchId = useId();

  const handleChange = event => {
    const searchTerm = event.target.value;
    onChange(searchTerm);
  };

  return (
    <input
      className={css.inputSearch}
      type="text"
      placeholder="Search by name"
      value={value}
      onChange={handleChange}
      id={searchId}
    />
  );
}

export default SearchBox;
