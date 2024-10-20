import React from 'react';
import { Card, CardContent, Typography, useTheme } from '@mui/material';

const RoomCard = ({ roomCode, name }) => {
  const theme = useTheme();
  const isDefaultRoom = roomCode === 'default';

  return (
    <Card
      sx={{
        m: 2,
        bgcolor: isDefaultRoom ? theme.palette.action.disabledBackground : theme.palette.background.paper,
      }}
    >
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
