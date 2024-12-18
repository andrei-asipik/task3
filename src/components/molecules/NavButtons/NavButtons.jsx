import Button from '../../atoms/Button/Button';
import styles from './styles.module.scss';
import IconArrow from '@icons/arrow.svg?react';

function NavButtons() {
  return (
    <div className={styles.buttons}>
      <Button className={styles.button}>
        <IconArrow />
      </Button>
      <Button className={styles.button}>
        <IconArrow />
      </Button>
    </div>
  );
}

export default NavButtons;
