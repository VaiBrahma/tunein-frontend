import { Typography, Box, TextField, Button } from '@mui/material';
import RoomCard from '../../components/RoomCard';
import { useState, useEffect } from 'react';
import { fetchRooms, joinRoom, getMyRoom } from '../../api/api';
import { useNavigate } from 'react-router-dom';

const JoinRoom = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [rooms, setRooms] = useState([{ id: 'default', name: '', people: 0 }]);

  const handleJoinRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await joinRoom(roomCode);
      navigate(`/room/${roomCode}`);
      console.log(response.message);
    } catch (err) {
      console.error('Failed to join room:', err);
    }
  };

  useEffect(() => {
    const fetchAvailableRooms = async () => {
      const availableRooms = await fetchRooms(); 
      setRooms(availableRooms);
    };
    
    fetchAvailableRooms();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={3} textAlign="center">Join a Room</Typography>
      
      <form 
        onSubmit={handleJoinRoom} 
        style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} 
      >
        <TextField
          label="Room Code or ID"
          variant="outlined"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          required
          sx={{ mb: 2, maxWidth: '400px', width: '100%' }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' , maxWidth: '400px'}}>
          Join Room
        </Button>
      </form>
      
      <Typography variant="h5" mt={4} textAlign="center">Available Rooms:</Typography>

      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" mt={2}>
        {rooms.length === 0 || (rooms.length === 1 && rooms[0].id === 'default') ? (
          <RoomCard roomCode="default" />
        ) : (
          rooms.map((room) => (
            <RoomCard key={room.code} roomCode={room.code} name={room.name} people={room.people} />
          ))
        )}
      </Box>

      <style jsx>{`
        .room-card {
          width: 200px;
          height: 200px;
          margin: 10px;
        }
      `}</style>
    </Box>
  );
};

export default JoinRoom;