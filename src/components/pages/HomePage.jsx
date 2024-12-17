import AsideMenu from '../organisms/AsideMenu/AsideMenu';
import FooterMenu from '../organisms/FooterMenu/AsideMenu';
import Header from '../organisms/Header/Header';
import styles from './styles.module.scss';

function HomePage() {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        <AsideMenu />
        <main>main</main>
      </div>
      <FooterMenu />
    </>
  );
}

export default HomePage;
