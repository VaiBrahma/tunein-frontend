import React, { useState, useEffect } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { Box, Typography, Card, CardContent, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';

const defaultRoom = {
    code: 'XXXXXX',
    host: '',
    name: 'Default Room',
    description: 'No description available',
    listeners: [],
    guest_controls: false,
    current_track: {
        id: 0,
        title: 'Unknown Track',
        file: '',
    },
    current_time: 0.0,
    is_playing: false,
    created_at: '',
};

const MusicPlayer = ({room=defaultRoom}) => {
    const [loading, setLoading] = useState(true);
    const baseUrl = "http://10.81.66.245:8000";
    useEffect(() => {
        console.log('adfkjadsfa', room);
    }, []);

    if (!room || !room.current_track) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Card sx={{ maxWidth: 600, mx: 'auto', mt: 4, boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Now Playing: {room.current_track.title || 'Loading...'}
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={2}>
                    Track ID: {room.current_track.id}
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={2}>
                    Room Code: {room.code}
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={2}>
                    Host: {room.is_host ? 'Yes' : 'No'}
                </Typography>

                <Typography variant="body1" color="text.secondary" mb={2}>
                    Listeners: {room.listeners.length}
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <AudioPlayer
                        src={`${baseUrl}/${room.current_track.file}`}
                        onPlay={() => console.log("Playing...")}
                        showJumpControls={false}
                        customAdditionalControls={[]}
                        autoPlayAfterSrcChange={false}
                        style={{ borderRadius: '10px' }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default MusicPlayer;