import { useState } from 'react';
import styles from './styles.module.scss';

export function Switcher() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.switcher} onClick={handleToggle}>
      <div className={`${styles.toggle} ${isActive ? styles.active : ''}`} />
    </div>
  );
}
