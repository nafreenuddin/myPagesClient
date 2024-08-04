import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5002/api/auth';

export const checkUser = async (identifier: string) => {
  const response = await axios.post(`${API_URL}/checkUser`, { identifier });
  return response.data;
};

export const loginUser = async (data: { username: string; password: string }) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

export const registerUser = async (data: { username: string; email: string; mobile: string; password: string }) => {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
};
