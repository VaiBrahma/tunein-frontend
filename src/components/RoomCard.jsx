import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RoomCard = ({ roomId }) => {
  const isDefaultRoom = roomId === 'default';

  return (
    <Card sx={{ m: 2, bgcolor: isDefaultRoom ? 'lightgray' : 'white' }}>
      <CardContent>
        {isDefaultRoom ? (
          <Typography variant="h6">No Rooms Available</Typography>
        ) : (
          <>
            <Typography variant="h6">Room ID: {roomId}</Typography>
            <Typography>Room Name: Room Example</Typography>
            <Typography>People: 3</Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RoomCard;