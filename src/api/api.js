import axios from 'axios';

const BASE_URL = 'http://10.81.66.245:8000/'; 

export const fetchRooms = async () => {
  const response = await axios.get(`${BASE_URL}api/list-rooms/`);
  return response.data;
};

export const createRoom = async (roomData) => {
  const response = await axios.post(`${BASE_URL}api/create-room/`, roomData);
  return response.data;
};

export const joinRoom = async (roomCode) => {
    console.log(roomCode)
  const response = await axios.post(`${BASE_URL}api/join-room/`, { code: roomCode });
  return response.data;
};

export const getRoomDetails = async (roomCode) => {
  const response = await axios.get(`${BASE_URL}api/get-room/?code=${roomCode}`);
  return response.data;
};

export const leaveRoom = async () => {
  const response = await axios.get(`${BASE_URL}api/leave-room/`);
  return response.data;
};

export const getMyRoom = async () => {
  const response = await axios.get(`${BASE_URL}api/my-room/`);
  return response.data;
};