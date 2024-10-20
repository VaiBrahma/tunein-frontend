import { Container, Box, Typography, Button } from "@mui/material";
import RoomForm from "../../components/RoomForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyRoom } from "../../api/api";

const Home = ({ toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);

  const handleJoinClick = () => {
    navigate("/join");
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
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: isDarkMode ? "#121212" : "#fff",
        borderRadius: 3,
        p: 4,
        boxShadow: 3,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt={4}
        sx={{
          backgroundColor: isDarkMode ? "#1A1A1A" : "#fff",
          borderRadius: "16px",
          p: 5,
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: isDarkMode ? "#fff" : "#121212",
            fontWeight: 700,
            textTransform: "uppercase",
            textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          }}
        >
          Welcome to TuneIN
        </Typography>

        {currentRoom ? (
          <Typography
            variant="h6"
            mb={2}
            sx={{
              color: isDarkMode ? "#fff" : "#121212",
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            You are currently in room: {currentRoom}
          </Typography>
        ) : (
          <Typography
            variant="h6"
            mb={2}
            sx={{
              color: isDarkMode ? "#fff" : "#121212",
              fontWeight: 500,
              letterSpacing: 1,
            }}
          >
            You are not in any room.
          </Typography>
        )}

        <Button
          variant="contained"
          onClick={handleJoinClick}
          sx={{
            backgroundColor: isDarkMode ? "#C52A2A" : "#FFD166",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: 20,
            width: "200px",
            mb: 2,
            "&:hover": {
              backgroundColor: isDarkMode ? "#C52A2A" : "#FFD166",
            },
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          Join a Room
        </Button>

        <Button
          variant="contained"
          onClick={handleCreateClick}
          sx={{
            backgroundColor: isDarkMode ? "#05B49A" : "#06D6A0",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: 20,
            width: "200px",
            "&:hover": {
              backgroundColor: isDarkMode ? "#05B49A" : "#06D6A0",
            },
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          Create a Room
        </Button>
      </Box>

      {showForm && <RoomForm onClose={handleCloseForm} />}
    </Container>
  );
};

export default Home;

