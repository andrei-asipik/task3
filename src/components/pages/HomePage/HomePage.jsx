import AsideMenu from '../../organisms/AsideMenu/AsideMenu';
import FooterMenu from '../../organisms/FooterMenu/FooterMenu';
import Header from '../../organisms/Header/Header';
import HomePageContent from '../../organisms/HomePageContent/HomePageContent';

import styles from './styles.module.scss';

function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main className={styles.main}>
          <AsideMenu />
          <HomePageContent />
        </main>
      </div>
      <FooterMenu />
    </>
  );
}

export default HomePage;
