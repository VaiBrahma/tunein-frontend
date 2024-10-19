import { AppBar, Toolbar, Typography, Button, Container, Box, ThemeProvider } from '@mui/material';
import RoomForm from '../../components/RoomForm';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyRoom } from '../../api/api';
import theme from '../../theme';

const Home = () => {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const [currentRoom, setCurrentRoom] = useState(null);

    const handleJoinClick = () => {
        navigate('/join');
    };

    const handleCreateClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    useEffect(() => {
        const fetchMyRoom = async () => {
            const data = await getMyRoom(); 
            setCurrentRoom(data.code); 
        };

        fetchMyRoom();
    }, []);

    return (
        <ThemeProvider theme={theme}>
           

            <Container>
                <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                    <Typography variant="h4" gutterBottom>
                        Welcome to TuneIN
                    </Typography>
                    {currentRoom ? (
                        <Typography variant="h6" mb={2}>You are currently in room: {currentRoom}</Typography>
                    ) : (
                        <Typography variant="h6" mb={2}>You are not in any room.</Typography>
                    )}
                    <Button variant="contained" color="secondary" onClick={handleJoinClick} sx={{ mb: 2 }}>
                        Join a Room
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleCreateClick}>
                        Create a Room
                    </Button>
                </Box>
            </Container>

            {showForm && <RoomForm onClose={handleCloseForm} />}
        </ThemeProvider>
    );
};

export default Home;