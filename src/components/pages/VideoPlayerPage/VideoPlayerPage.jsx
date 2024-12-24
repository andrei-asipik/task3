import { VideoPlayerPageContent } from '../../organisms/VideoPlayerPageContent/VideoPlayerPageContent';
import styles from './styles.module.scss';

export function VideoPlayerPage() {
  return (
    <div className={styles.layout}>
      <VideoPlayerPageContent />
    </div>
  );
}
