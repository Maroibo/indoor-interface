import HomeMenu from './HomeMenu'
import UnityInterface from './UnityComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMenu />} />
        <Route path="/ar-nav" element={<UnityInterface />} />
      </Routes>
    </Router>
  );
};

export default App;

