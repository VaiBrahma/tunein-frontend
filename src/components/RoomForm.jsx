import { Box, TextField, FormControlLabel, Checkbox, Button, IconButton, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { createRoom } from '../api/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const RoomForm = ({ onClose }) => {
  const theme = useTheme(); // Access the current theme
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
  const [permission, setPermission] = useState(false);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const roomData = { guest_controls: permission, name: roomName, description: description };
      const data = await createRoom(roomData); // Fetch room creation data
      console.log('Room created:', data);
      
      // Assuming the created room's code is returned in the response (data.roomCode)
      if (data?.code) {
        navigate(`/room/${data.code}`); // Navigate to the new room
      }
      onClose();
    } catch (err) {
      setError('Failed to create room.');
      console.error(err);
    }
  };

  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        bgcolor: theme.palette.background.paper, // Use theme paper color
        borderRadius: 2, 
        boxShadow: 3, 
        p: 3,
        zIndex: 1000,
      }}
    >
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }} color="primary">
        <CloseIcon />
      </IconButton>
      
      <Typography variant="h6" mb={2} color={theme.palette.text.primary}>Create a Room</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Room Name"
          variant="outlined"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          required
          sx={{ mb: 2 }}
          InputProps={{
            style: { color: theme.palette.text.primary }, // Text color for input
          }}
          InputLabelProps={{
            style: { color: theme.palette.text.secondary }, // Label color for input
          }}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          multiline
          rows={4}
          sx={{ mb: 2 }}
          InputProps={{
            style: { color: theme.palette.text.primary }, // Text color for input
          }}
          InputLabelProps={{
            style: { color: theme.palette.text.secondary }, // Label color for input
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permission}
              onChange={(e) => setPermission(e.target.checked)}
              color="secondary"
            />
          }
          label={<Typography color={theme.palette.text.primary}>Give users permission to control</Typography>}
        />
        <Button type="submit" variant="contained" color="secondary">
          Create Room
        </Button>
      </Box>
    </Box>
  );
};

export default RoomForm;
