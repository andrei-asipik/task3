import styles from './styles.module.scss';

const subscripters = [
  { name: 'Gussie Singleton', avatar: 'Oval (0).jpg' },
  { name: 'Nora Francis', avatar: 'Oval (1).jpg' },
  { name: 'Belle Briggs', avatar: 'Oval (2).jpg' },
  { name: 'Eunice Cortez', avatar: 'Oval (3).jpg' },
  { name: 'Emma Hanson', avatar: 'Oval (4).jpg' },
  { name: 'Leah Berry', avatar: 'Oval (5).jpg' },
];

function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.subscriptions}>
        <h2 className={styles.title}>Subscriptions</h2>
        {subscripters.map((item, index) => (
          <a key={index} href="#" className={styles.item}>
            <div className={styles.avatar}>
              <img src={`/${item.avatar}`} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </a>
        ))}
      </section>
    </main>
  );
}

export default Main;
