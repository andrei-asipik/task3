import styles from './styles.module.scss';

export function VideoPlayer() {
  const videoId = '_bFO8Z1oX_A';

  return (
    <div className={styles.container}>
      <iframe
        className={styles.player}
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
