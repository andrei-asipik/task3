import styles from './styles.module.scss';

export function VideoCard({ image, title, views, timeAgo, duration, author, size }) {
  const sizeClass =
    size === 'sm' ? styles.sm : size === 'md' ? styles.md : size === 'lg' ? styles.lg : '';

  return (
    <div className={styles.videoCard}>
      <div className={`${styles.thumbnail} ${sizeClass}`}>
        <img src={image} alt={title} />
        <span className={styles.duration}>{duration}</span>
      </div>
      <div className={size === 'md' ? styles.detailsAlt : styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.info}>
          <div className={styles.meta}>
            {views && <span>{views} views</span>}
            {timeAgo && <span>&nbsp;&nbsp;·&nbsp;&nbsp;{timeAgo} ago</span>}
          </div>
          <div className={styles.author}>{author}</div>
        </div>
      </div>
    </div>
  );
}
