import Header from '../organisms/Header/Header';
import styles from './styles.module.scss';

function HomePage() {
  return (
    <div className={styles.layout}>
      <Header />
      <main>main</main>
    </div>
  );
}

export default HomePage;
