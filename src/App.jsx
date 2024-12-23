import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage/HomePage';
import { VideoPlayerPage } from './components/pages/VideoPlayerPage/VideoPlayerPage';
import { Header } from './components/organisms/Header/Header';
import { Footer } from './components/organisms/Footer/Footer';

import styles from '@styles/main.module.scss';
import { ChannelPage } from './components/pages/ChannelPage/ChannelPage';

function App() {
  return (
    <Router>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/channel" element={<ChannelPage />} />
          <Route path="/player" element={<VideoPlayerPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
