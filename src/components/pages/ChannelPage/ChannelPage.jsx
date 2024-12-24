import { AsideMenu } from '../../organisms/AsideMenu/AsideMenu';
import { ChannelPageContent } from '../../organisms/ChannelPageContent/ChannelPageContent';
import styles from './styles.module.scss';

export function ChannelPage() {
  return (
    <div className={styles.layout}>
      <AsideMenu />
      <ChannelPageContent />
    </div>
  );
}
