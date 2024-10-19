import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import JoinRoom from './Pages/JoinRoom/JoinRoom';
import RoomDetails from './Pages/RoomDetails/RoomDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinRoom  />} />
        <Route path="/room/:roomCode" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
};

export default App;