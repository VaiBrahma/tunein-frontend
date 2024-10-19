import axios from 'axios';

const BASE_URL = 'http://localhost:8000/'; 

export const fetchRooms = async () => {
  const response = await axios.get(`${BASE_URL}api/list/`);
  return response.data;
};

export const createRoom = async (roomData) => {
  const response = await axios.post(`${BASE_URL}api/create/`, roomData);
  return response.data;
};

export const joinRoom = async (roomCode) => {
    console.log(roomCode)
  const response = await axios.post(`${BASE_URL}api/join/`, { code: roomCode });
  return response.data;
};

export const getRoomDetails = async (roomCode) => {
  const response = await axios.get(`${BASE_URL}api/get/?code=${roomCode}`);
  return response.data;
};

export const leaveRoom = async () => {
  const response = await axios.get(`${BASE_URL}api/leave/`);
  return response.data;
};

export const getMyRoom = async () => {
  const response = await axios.get(`${BASE_URL}api/my-room/`);
  return response.data;
};