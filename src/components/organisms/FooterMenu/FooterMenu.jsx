import styles from './styles.module.scss';
import IconHome from '@icons/home.svg?react';
import IconTrending from '@icons/trending.svg?react';
import IconSubscriptions from '@icons/subscriptions.svg?react';
import IconLibrary from '@icons/library.svg?react';

const menuItems = [
  { icon: <IconHome />, label: 'Home' },
  { icon: <IconTrending />, label: 'Trending' },
  { icon: <IconSubscriptions />, label: 'Subscriptions' },
  { icon: <IconLibrary />, label: 'Library' },
];

function FooterMenu() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={`${styles.item} ${index === 0 ? styles.active : ''}`}>
            <div className={styles.container}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          </a>
        ))}
      </nav>
    </footer>
  );
}

export default FooterMenu;
