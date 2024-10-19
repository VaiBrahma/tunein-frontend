// src/services/api.js

const BASE_URL = 'http://localhost:8000'; // Change this to your backend URL

export const createRoom = async (roomData) => {
  const response = await fetch(`${BASE_URL}/api/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(roomData),
  });

  if (!response.ok) {
    throw new Error('Error creating room');
  }

  return await response.json();
};

export const joinRoom = async (code) => {
  const response = await fetch(`${BASE_URL}/api/join/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  if (!response.ok) {
    throw new Error('Error joining room');
  }

  return await response.json();
};

export const getRooms = async () => {
  const response = await fetch(`${BASE_URL}/api/list/`);

  if (!response.ok) {
    throw new Error('Error fetching rooms');
  }

  return await response.json();
};