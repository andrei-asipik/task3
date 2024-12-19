import Button from '../../atoms/Button/Button';
import Switcher from '../../atoms/Switcher/Switcher';
import VideoCard from '../../molecules/VideoCard/VideoCard';
import { videoDataDolly } from './mockData';
import styles from './styles.module.scss';

import IconLike from '@icons/like.svg?react';
import IconDislike from '@icons/dislike.svg?react';
import IconShare from '@icons/share.svg?react';
import IconMore from '@icons/moreDots.svg?react';
import VideoPlayer from '../../molecules/VideoPlayer/VideoPlayer';

function VideoPlayerPageContent() {
  return (
    <article className={styles.content}>
      <section className={styles.playerSection}>
        <VideoPlayer />
        <h1>Dude You Re Getting A Telescope</h1>
        <div className={styles.stat}>
          <span>123k views</span>
          <div className={styles.actions}>
            <Button className={styles.btn}>
              <IconLike />
              &nbsp;123k
            </Button>
            <Button className={styles.btn}>
              <IconDislike />
              &nbsp;435k
            </Button>
            <Button className={styles.btn}>
              <IconShare />
              &nbsp;Share
            </Button>
          </div>
          <Button className={styles.btn}>
            <IconMore />
          </Button>
        </div>
        {/* </section>

      <section className={styles.infoSection}> */}
        <div className={styles.infoContainer}>
          <div className={styles.avatar}>
            <img src="/Oval (6).jpg" alt="Dollie Blair" />
          </div>
          <div className={styles.info}>
            <h2>Food & Drink</h2>
            <span>Published on 14 Jun 2019</span>
            <div className={styles.description}>
              <p>
                A successful marketing plan relies heavily on the pulling-power of advertising copy.
                Writing result-oriented ad copy is difficult, as it must appeal to, entice, and
                convince consumers to take action. There is no magic formula to write perfect ad
                copy; it is based on a number of factors, including ad placement, demographic, even
                the consumer’s mood when they see your ad.
              </p>
              <span>Show more</span>
            </div>
          </div>
          <Button className={styles.subscribeBtn}>Subscribe 2.3m</Button>
        </div>
      </section>

      <section className={styles.nextVideoSection}>
        <div className={styles.sectionHeader}>
          <h2>Next</h2>
          <div className={styles.autoplay}>
            <div>AUTOPLAY</div>
            <Switcher />
          </div>
        </div>
        <div className={styles.container}>
          {videoDataDolly.map((video) => (
            <VideoCard
              key={video.id}
              image={video.image}
              title={video.title}
              views={video.views}
              duration={video.duration}
              author={video.author}
              size={'md'}
            />
          ))}
        </div>
      </section>
    </article>
  );
}

export default VideoPlayerPageContent;
