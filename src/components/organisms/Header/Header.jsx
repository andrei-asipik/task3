import styles from './styles.module.scss';
import IconMenu from '@icons/menu.svg?react';
import LogoYoutube from '@icons/youtubeLogo.svg?react';
import IconCamera from '@icons/camera.svg?react';
import IconBell from '@icons/bell.svg?react';
import IconView from '@icons/view.svg?react';

import SearchInput from '@components/molecules/SearchInput/SearchInput';
import Button from '@components/atoms/Button/Button';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerSidebar}>
        <Button className={styles.menuIcon}>
          <IconMenu />
        </Button>
        <LogoYoutube />
      </div>

      <SearchInput />

      <div className={styles.profileSettings}>
        <div className={styles.settingsIcons}>
          <Button>
            <IconCamera />
          </Button>
          <Button>
            <IconView />
          </Button>
          <Button>
            <div className={styles.notifications}>
              <IconBell />
              <div className={styles.counter}>3</div>
            </div>
          </Button>
        </div>
        <Button>
          <div className={styles.profileIcon}>
            <img src="/Userpic.jpg" alt="user" />
          </div>
        </Button>
      </div>
    </header>
  );
}

export default Header;
