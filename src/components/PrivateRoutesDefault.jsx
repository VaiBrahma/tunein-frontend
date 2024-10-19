import { Navigate, Outlet } from "react-router-dom";
import { getMyRoom } from "../api/api";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setRoom} from '../state/index.js'

const PrivateRoutesDefault = () => {
  const [myRoom, setMyRoom] = useState(null);
  const room = useSelector((state) => state.room.room);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMyRoom = async () => {
      try {
        if (!room) {  // Fetch room only if it's not in Redux state
          const data = await getMyRoom();
          setMyRoom(data);
          dispatch(setRoom({ room: data.room, userId: data.userId }));
        } else {
          setMyRoom(room);  // Use Redux state if room is available
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchMyRoom();
  }, [dispatch, room]);

  if (!myRoom) return <Outlet />;

  return myRoom.code ? <Navigate to={`/room/${myRoom.code}`} /> : <Outlet />;
};

export default PrivateRoutesDefault;