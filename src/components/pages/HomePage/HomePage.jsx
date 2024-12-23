import { AsideMenu } from '../../organisms/AsideMenu/AsideMenu';
import { HomePageContent } from '../../organisms/HomePageContent/HomePageContent';
import styles from './styles.module.scss';

export function HomePage() {
  return (
    <div className={styles.layout}>
      <AsideMenu />
      <HomePageContent />
    </div>
  );
}
