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
        backgroundColor: "background.default",
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
          background: "linear-gradient(135deg, #06D6A0 30%, #FFD166 90%)",
          borderRadius: "16px",
          p: 5,
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "text.primary",
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
            sx={{ color: "text.secondary", fontWeight: 500, letterSpacing: 1 }}
          >
            You are currently in room: {currentRoom}
          </Typography>
        ) : (
          <Typography
            variant="h6"
            mb={2}
            sx={{ color: "text.secondary", fontWeight: 500, letterSpacing: 1 }}
          >
            You are not in any room.
          </Typography>
        )}

        <Button
          variant="contained"
          onClick={handleJoinClick}
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: 20,
            width: "200px",
            mb: 2,
            "&:hover": {
              backgroundColor: "#C52A2A", // Darker shade for hover effect
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
            backgroundColor: "secondary.main",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: 20,
            width: "200px",
            "&:hover": {
              backgroundColor: "#05B49A", // Darker shade for hover effect
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

