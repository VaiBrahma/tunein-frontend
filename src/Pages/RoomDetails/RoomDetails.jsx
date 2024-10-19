import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRoomDetails } from '../../api/api'; 

const RoomDetails = () => {
    const { roomCode } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        const fetchRoomDetails = async () => {
            const data = await getRoomDetails(roomCode); 
            setRoomDetails(data);
            console.log(data);
        };

        fetchRoomDetails();
    }, [roomCode]);

    return (
        <Box sx={{ p: 3 }}>
            {roomDetails ? (
                <>
                    <Typography variant="h4" mb={2}>{roomDetails.name}</Typography>
                    <Typography variant="h4" mb={2}>{roomDetails.code}</Typography>
                    <Typography variant="body1">{roomDetails.description}</Typography>
                    <Typography variant="h6" mt={2}>Current Participants: {roomDetails.people}</Typography>
                </>
            ) : (
                <Typography variant="h6">Loading room details...</Typography>
            )}
        </Box>
    );
};

export default RoomDetails;