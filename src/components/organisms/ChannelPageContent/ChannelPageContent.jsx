import { Button } from '../../atoms/Button/Button';
import { NavButtons } from '../../molecules/NavButtons/NavButtons';
import { VideoCard } from '../../molecules/VideoCard/VideoCard';
import { videoDataDolly } from './mockData';

import IconSearch from '@icons/search.svg?react';
import IconMore from '@icons/more.svg?react';
import styles from './styles.module.scss';

const video = {
  id: 1,
  image: '/Cover (6).jpg',
  title: 'A Brief History Of Creation',
  views: '80k',
  timeAgo: '3 days',
  duration: '4:15',
  author: 'Dollie Blair',
};

const channelVideos = [
  { name: 'Flora Benson', avatar: 'Oval7.jpg' },
  { name: 'Violet Cobb', avatar: 'Oval8.jpg' },
  { name: 'Phillip Mullins', avatar: 'Oval9.jpg' },
];

export function ChannelPageContent() {
  return (
    <article className={styles.article}>
      <section className={styles.channel}>
        <div className={styles.wallpaper}>
          <img src="/Channel.jpg" alt="channel" />
        </div>

        <div className={styles.mainContent}>
          <div className={styles.header}>
            <div className={styles.avatar}>
              <img src="/Oval (6).jpg" alt="Dollie Blair" />
            </div>
            <div>
              <h2>Margaret Phelps</h2>
              <span className={styles.subscribed}>245K subscribed</span>
            </div>
            <Button className={styles.subscribeBtn}>Subscribe 2.3m</Button>
          </div>
          <div className={styles.content}>
            <div className={styles.channelInfo}>
              <div className={styles.tabs}>
                <nav>
                  <ul>
                    <li className={styles.active}>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Videos</a>
                    </li>
                    <li>
                      <a href="#">Playlists</a>
                    </li>
                    <li>
                      <a href="#">Channels</a>
                    </li>
                    <li>
                      <a href="#">Discussion</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </nav>
                <Button>
                  <IconSearch />
                </Button>
                <Button>
                  <IconMore />
                </Button>
              </div>
              <div className={styles.videoContainer}>
                <div className={styles.video}>
                  <VideoCard image={video.image} duration={video.duration} size={'lg'} />
                </div>
                <div className={styles.description}>
                  <h3>Choosing The Best Audio Player Software For Your Computer</h3>
                  <p>
                    Your cheap internet-based banner advertising will become one of the sought for
                    ads there are. Today, the world of Internet advertising is rapidly evolving
                    beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising
                    on the Internet is the use of banner ads.
                  </p>
                  <span>11k views&nbsp;&nbsp;·&nbsp;&nbsp;6 months ago</span>
                </div>
              </div>
            </div>
            <nav className={styles.channelVideos}>
              <h4>Margaret Phelps videos</h4>
              {channelVideos.map((item, index) => (
                <a key={index} href="#" className={styles.item}>
                  <div className={styles.avatar}>
                    <img src={`/${item.avatar}`} alt={item.name} />
                  </div>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className={styles.videos}>
        <div className={styles.channelHeader}>
          <h2>Margaret Phelps videos</h2>
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
