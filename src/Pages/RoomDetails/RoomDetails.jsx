import { Box, Card, CardContent, Grid, Typography, Divider } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRoomDetails } from '../../api/api'; 
import MusicPlayer from '../../components/MusicPlayer';

const RoomDetails = () => {
    const { roomCode } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        const fetchRoomDetails = async () => {
            const data = await getRoomDetails(roomCode); 
            setRoomDetails(data);
            // console.log(data);
        };

        fetchRoomDetails();
    }, [roomCode]);

    return (
        <Box sx={{ p: 4 }}>
            {roomDetails ? (
                <Card sx={{ maxWidth: 800, mx: 'auto', boxShadow: 3, borderRadius: 2 }}>
                    <CardContent>
                        {/* Room Name and Code */}
                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Room: {roomDetails.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" mb={3}>
                            Room Code: {roomDetails.code}
                        </Typography>
                        <Divider sx={{ my: 2 }} />

                        {/* Description */}
                        <Typography variant="body1" mb={3}>
                            {roomDetails.description || 'No description available'}
                        </Typography>

                        {/* Listeners */}
                        <Typography variant="h5" fontWeight="bold" mb={2}>
                            Listeners
                        </Typography>
                        <Grid container spacing={2}>
                            {roomDetails.listeners.map(listener => (
                                <Grid item xs={12} sm={6} key={listener.id}>
                                    <Card variant="outlined" sx={{ borderRadius: 2 }}>
                                        <CardContent>
                                            <Typography variant="body1">
                                                Listener ID: {listener.id}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Room: {listener.room}
                                            </Typography>
                                            <Typography variant="body2">
                                                Control Permission: {listener.control_permission ? 'Yes' : 'No'}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        {/* Guest Controls */}
                        <Divider sx={{ my: 3 }} />
                        <Typography variant="body1">
                            Guest Controls: {roomDetails.guest_controls ? 'Enabled' : 'Disabled'}
                        </Typography>

                        {/* Current Track Details */}
                        {roomDetails.current_track && (
                            <>
                                <Divider sx={{ my: 3 }} />
                                <Typography variant="h5" fontWeight="bold" mb={2}>
                                    Current Track
                                </Typography>
                                <Typography variant="body1">Track ID: {roomDetails.current_track.id}</Typography>
                                <Typography variant="body1">Title: {roomDetails.current_track.title}</Typography>
                                <Typography variant="body1">File: {roomDetails.current_track.file}</Typography>
                            </>
                        )}

                        {/* Other Details */}
                        <Divider sx={{ my: 3 }} />
                        <Typography variant="body1">Current Time: {roomDetails.current_time} seconds</Typography>
                        <Typography variant="body1">Is Playing: {roomDetails.is_playing ? 'Yes' : 'No'}</Typography>
                        <Typography variant="body1">
                            Created At: {new Date(roomDetails.created_at).toLocaleString()}
                        </Typography>
                        <Typography variant="body1">Is Host: {roomDetails.is_host ? 'Yes' : 'No'}</Typography>
                    </CardContent>
                    <MusicPlayer room={roomDetails}/>
                </Card>
            ) : (
                <Typography variant="h6" textAlign="center">
                    Loading room details...
                </Typography>
            )}
        </Box>
    );
};

export default RoomDetails;