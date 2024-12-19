import Button from '../../atoms/Button/Button';
import NavButtons from '../../molecules/NavButtons/NavButtons';
import VideoCard from '../../molecules/VideoCard/VideoCard';
import { videoDataDolly, videoDataRecommended } from './mockData';
import styles from './styles.module.scss';

function HomePageContent() {
  return (
    <article className={styles.content}>
      <section className={styles.channel}>
        <div className={styles.channelHeader}>
          <div className={styles.channelProfile}>
            <div className={styles.avatar}>
              <img src="/Oval (6).jpg" alt="Dollie Blair" />
            </div>
            <h2>Dollie Blair</h2>
          </div>
          <NavButtons />
        </div>
        <div className={styles.container}>
          {videoDataDolly.map((video) => (
            <VideoCard
              key={video.id}
              image={video.image}
              title={video.title}
              views={video.views}
              timeAgo={video.timeAgo}
              duration={video.duration}
              author={video.author}
              size={'sm'}
            />
          ))}
        </div>
      </section>
      <section className={`${styles.channel} ${styles.hidden}`}>
        <div className={styles.channelHeader}>
          <div className={styles.channelProfile}>
            <h2>Recommended</h2>
          </div>
          <NavButtons />
        </div>
        <div className={styles.container}>
          {videoDataRecommended.map((video) => (
            <VideoCard
              key={video.id}
              image={video.image}
              title={video.title}
              views={video.views}
              timeAgo={video.timeAgo}
              duration={video.duration}
              author={video.author}
              size={'lg'}
            />
          ))}
        </div>
      </section>
      <section className={`${styles.channel} ${styles.hidden}`}>
        <div className={styles.channelHeader}>
          <div className={styles.channelProfile}>
            <div className={styles.avatar}>
              <img src="/Oval (6).jpg" alt="Dollie Blair" />
            </div>
            <div className={styles.title}>
              <h2>Food & Drink</h2>
              <span>Recommended channel for you</span>
            </div>
            <Button className={styles.subscribeBtn}>Subscribe 2.3m</Button>
          </div>
          <NavButtons />
        </div>
        <div className={styles.container}>
          {videoDataDolly.map((video) => (
            <VideoCard
              key={video.id}
              image={video.image}
              title={video.title}
              views={video.views}
              timeAgo={video.timeAgo}
              duration={video.duration}
              author={video.author}
              size={'sm'}
            />
          ))}
        </div>
      </section>
    </article>
  );
}

export default HomePageContent;
