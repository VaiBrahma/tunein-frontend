import { Box, TextField, FormControlLabel, Checkbox, Button, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { createRoom } from '../api/api';

const RoomForm = ({ onClose }) => {
  const [roomName, setRoomName] = useState('');
  const [description, setDescription] = useState('');
  const [permission, setPermission] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const roomData = { guest_controls: permission, name: roomName, description: description };
      const data = await createRoom(roomData);
      console.log('Room created:', data);
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
        bgcolor: 'white', 
        borderRadius: 2, 
        boxShadow: 3, 
        p: 3,
        zIndex: 1000,
      }}
    >
      <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }} color="primary">
        <CloseIcon />
      </IconButton>
      
      <Typography variant="h6" mb={2}>Create a Room</Typography>
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
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={permission}
              onChange={(e) => setPermission(e.target.checked)}
              color="secondary"
            />
          }
          label="Give users permission to control"
        />
        <Button type="submit" variant="contained" color="secondary">
          Create Room
        </Button>
      </Box>
    </Box>
  );
};

export default RoomForm;