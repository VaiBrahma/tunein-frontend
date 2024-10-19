import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import JoinRoom from './Pages/JoinRoom/JoinRoom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinRoom  />} />
      </Routes>
    </Router>
  );
};

export default App;