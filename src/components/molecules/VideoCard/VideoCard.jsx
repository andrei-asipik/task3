import styles from './styles.module.scss';

function VideoCard({ image, title, views, timeAgo, duration, author, size }) {
  const sizeClass = size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : '';

  return (
    <div className={styles.videoCard}>
      <div className={`${styles.thumbnail} ${sizeClass}`}>
        <img src={image} alt={title} />
        <span className={styles.duration}>{duration}</span>
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.info}>
          <div className={styles.meta}>
            <span>{views} views</span>
            <span> · {timeAgo} ago</span>
          </div>
          <div className={styles.author}>{author}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
