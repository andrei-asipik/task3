import styles from './styles.module.scss';
import IconMenu from '@icons/menu.svg?react';
import LogoYoutube from '@icons/youtubeLogo.svg?react';
import IconCamera from '@icons/camera.svg?react';
import IconBell from '@icons/bell.svg?react';
import IconView from '@icons/view.svg?react';
import IconDots from '@icons/verticalDots.svg?react';
import { Button } from '@components/atoms/Button/Button';
import { SearchInput } from '../../molecules/SearchInput/SearchInput';
import { useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const page = location.pathname.split('/').filter(Boolean).pop() || 'home';

  return (
    <header className={styles.header}>
      <div className={styles.headerSidebar}>
        <Button className={styles.menuIcon}>
          <IconMenu />
        </Button>
        {page === 'channel' ? (
          <>
            <nav className={styles.nav}>
              <a href="/">
                <LogoYoutube />
              </a>
            </nav>
            <span> Margaret Phelps </span>
          </>
        ) : (
          <nav>
            <a href="/">
              <LogoYoutube />
            </a>
          </nav>
        )}
      </div>
      <SearchInput />
      <div className={styles.profileSettings}>
        <nav className={styles.settingsIcons}>
          <a href="/">
            <IconCamera />
          </a>
          <a href="/channel">
            <IconView />
          </a>
          <a href="/player">
            <div className={styles.notifications}>
              <IconBell />
              <div className={styles.counter}>3</div>
            </div>
          </a>
        </nav>
        <Button className={styles.profileIcon}>
          <img src="/Userpic.jpg" alt="user" />
        </Button>
        <Button className={styles.profileIconMobile}>
          {page === 'home' ? <img src="/Userpic.jpg" alt="user" /> : <IconDots />}
        </Button>
      </div>
    </header>
  );
}
