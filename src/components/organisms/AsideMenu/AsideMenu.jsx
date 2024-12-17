import styles from './styles.module.scss';
import IconHome from '@icons/home.svg?react';
import IconTrending from '@icons/trending.svg?react';
import IconSubscriptions from '@icons/subscriptions.svg?react';
import IconLibrary from '@icons/library.svg?react';
import IconWatchLater from '@icons/watchLater.svg?react';
import IconFavourites from '@icons/favourites.svg?react';
import IconLiked from '@icons/liked.svg?react';
import IconMusic from '@icons/music.svg?react';
import IconGames from '@icons/games.svg?react';
import IconShowMore from '@icons/more.svg?react';
import IconSetting from '@icons/setting.svg?react';

const menuItems = [
  { icon: <IconHome />, label: 'Home' },
  { icon: <IconTrending />, label: 'Trending' },
  { icon: <IconSubscriptions />, label: 'Subscriptions' },
  { icon: <IconLibrary />, label: 'Library' },
  { icon: <IconWatchLater />, label: 'Watch Later' },
  { icon: <IconFavourites />, label: 'Favourites' },
  { icon: <IconLiked />, label: 'Liked Videos' },
  { icon: <IconMusic />, label: 'Music' },
  { icon: <IconGames />, label: 'Games' },
  { icon: <IconShowMore />, label: 'Show More' },
];

const subscripters = [
  { name: 'Gussie Singleton', avatar: 'Oval (0).jpg' },
  { name: 'Nora Francis', avatar: 'Oval (1).jpg' },
  { name: 'Belle Briggs', avatar: 'Oval (2).jpg' },
  { name: 'Eunice Cortez', avatar: 'Oval (3).jpg' },
  { name: 'Emma Hanson', avatar: 'Oval (4).jpg' },
  { name: 'Leah Berry', avatar: 'Oval (5).jpg' },
];

function AsideMenu() {
  return (
    <aside className={styles.aside}>
      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <a key={index} href="#" className={`${styles.item} ${index === 0 ? styles.active : ''}`}>
            <div className={styles.container}>{item.icon}</div>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      <nav className={styles.subscriptions}>
        <h2 className={styles.title}>Subscriptions</h2>
        {subscripters.map((item, index) => (
          <a key={index} href="#" className={styles.item}>
            <div className={styles.avatar}>
              <img src={`/${item.avatar}`} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
      <nav className={styles.setting}>
        <a href="#" className={styles.item}>
          <div className={styles.container}>
            <IconSetting />
          </div>
          <span>Setting</span>
        </a>
      </nav>
    </aside>
  );
}

export default AsideMenu;
