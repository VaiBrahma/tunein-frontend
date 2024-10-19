import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RoomCard = ({ roomCode, name }) => {
  const isDefaultRoom = roomCode === 'default';

  return (
    <Card sx={{ m: 2, bgcolor: isDefaultRoom ? 'lightgray' : 'white' }}>
      <CardContent>
        {isDefaultRoom ? (
          <Typography variant="h6">No Rooms Available</Typography>
        ) : (
          <>
            <Typography variant="h6">Room Code: {roomCode}</Typography>
            <Typography>Room Name: {name}</Typography>
            <Typography>People: 3</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RoomCard;