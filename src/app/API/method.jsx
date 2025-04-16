// Api/methods.jsx
import axios from 'axios';

const API_BASE_URL = 'https://braelotest-production.up.railway.app';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

export const LoginApi = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
    });
    return response.data;
  } catch (error) {
    console.error('POST Error:', error);
    throw error;
  }
};

export const getData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      headers: getAuthHeaders()
    });
    return response.data;
  } catch (error) {
    console.error('GET Error:', error);
    throw error;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
      headers: getAuthHeaders()
    });
    return response.data;
  } catch (error) {
    console.error('POST Error:', error);
    throw error;
  }
};

export const updateData = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${endpoint}`, data, {
      headers: getAuthHeaders()
    });
    return response.data;
  } catch (error) {
    console.error('PUT Error:', error);
    throw error;
  }
};