import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import VideoPlayerPage from './components/pages/VideoPlayerPage/VideoPlayerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player" element={<VideoPlayerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
