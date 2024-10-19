import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import JoinRoom from './Pages/JoinRoom/JoinRoom';
import RoomDetails from './Pages/RoomDetails/RoomDetails';
import Layout from "./Pages/Layout/Layout";
import PrivateRoutesDefault from "./components/PrivateRoutesDefault";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route element={<PrivateRoutesDefault />}>
          <Route index element={<Home />} />
          <Route path="/join" element={<JoinRoom />} />
          <Route path="/room/:roomCode" element={<RoomDetails />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;