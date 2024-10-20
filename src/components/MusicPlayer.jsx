import React, { useState, useEffect, useRef } from "react";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";

const defaultRoom = {
  code: "XXXXXX",
  host: "",
  name: "Default Room",
  description: "No description available",
  listeners: [],
  guest_controls: false,
  current_track: {
    id: 0,
    title: "Unknown Track",
    file: "",
  },
  current_time: 0.0,
  is_playing: false,
  created_at: "",
};

const MusicPlayer = ({ room = defaultRoom }) => {
  const [loading, setLoading] = useState(true);
  const baseUrl = "http://10.81.66.245:8000";

  const audioPlayer = useRef(null);
  const ws = new WebSocket("ws://10.81.66.245:8080");
  let synced = false;
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "play") {
        console.log("ws played");
        audioPlayer.current.audio.current.currentTime = data.currentTime;
        audioPlayer.current.audio.current.play();
        // console.log(audioPlayer.current.audio.current);
      } else if (data.type === "pause") {
        console.log("ws paused");
        audioPlayer.current.audio.current.pause();
      } else if (data.type === "time_update" && !synced) {
        console.log("ws current time", data.currentTime);
        audioPlayer.current.audio.current.currentTime = data.currentTime;
        synced = true;
      }
  };

  useEffect(() => {
    console.log("adfkjadsfa", room);
  }, []);

  if (!room || !room.current_track) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  const handleOnPlay = (currentTime) => {
    // console.log("Playing...");
    ws.send(
      JSON.stringify({
        type: "play",
        currentTime: currentTime,
      })
    );
  };

  const handleOnPause = (currentTime) => {
    // console.log("Pausing...");
    ws.send(
      JSON.stringify({
        type: "pause",
        currentTime: currentTime,
      })
    );
  };

  let lastTimeUpdate = 0;
  const handleOnSeek = (currentTime) => {
    // console.log(currentTime);
    const now = Date.now();
    if (now - lastTimeUpdate < 1000) return;
    lastTimeUpdate = now;
    ws.send(
      JSON.stringify({
        type: "time_update",
        currentTime: currentTime,
      })
    );
  };

  return (
    <Card
      sx={{ maxWidth: 600, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 2 }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Now Playing: {room.current_track.title || "Loading..."}
        </Typography>

        <Box sx={{ mt: 2 }}>
          <AudioPlayer
            ref={audioPlayer}
            className="audio-player"
            src={`${baseUrl}/${room.current_track.file}`}
            onPlay={({ target }) => handleOnPlay(target.currentTime)}
            onPause={({ target }) => handleOnPause(target.currentTime)}
            onSeeked={({ target }) => handleOnSeek(target.currentTime)}
            showJumpControls={false}
            controls
            customAdditionalControls={[]}
            autoPlayAfterSrcChange={false}
            style={{ borderRadius: "10px" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
