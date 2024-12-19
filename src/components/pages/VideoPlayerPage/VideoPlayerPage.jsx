import FooterMenu from '../../organisms/FooterMenu/FooterMenu';
import Header from '../../organisms/Header/Header';
import VideoPlayerPageContent from '../../organisms/VideoPlayerPageContent/VideoPlayerPageContent';

import styles from './styles.module.scss';

function VideoPlayerPage() {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <main className={styles.main}>
          <VideoPlayerPageContent />
        </main>
      </div>
      <FooterMenu />
    </>
  );
}

export default VideoPlayerPage;
