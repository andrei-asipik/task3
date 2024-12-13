import styles from './SearchInput.module.scss';
import IconSearch from './search.svg?react';

function SearchInput() {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
      <button type="button" className={styles.searchButton}>
        <IconSearch />
      </button>
    </div>
  );
}

export default SearchInput;
