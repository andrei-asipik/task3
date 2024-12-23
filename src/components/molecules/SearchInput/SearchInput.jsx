import { Button } from '../../atoms/Button/Button';
import styles from './styles.module.scss';
import IconSearch from '@icons/search.svg?react';

export function SearchInput() {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search" className={styles.searchInput} />
      <Button>
        <IconSearch />
      </Button>
    </div>
  );
}
