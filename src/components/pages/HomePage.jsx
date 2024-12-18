import AsideMenu from '../organisms/AsideMenu/AsideMenu';
import FooterMenu from '../organisms/FooterMenu/FooterMenu';
import Header from '../organisms/Header/Header';
import Content from '../organisms/Content/Content';

import styles from './styles.module.scss';

function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main className={styles.main}>
          <AsideMenu />
          <Content />
        </main>
      </div>
      <FooterMenu />
    </>
  );
}

export default HomePage;
