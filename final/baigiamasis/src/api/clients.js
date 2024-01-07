import axios from "axios";
import { API } from "./consts";

export const fetchClients = async () => {
  const response = await axios.get(`${API}/clients`);
  return response.data;
};

export const createClient = async (client) => {
  const response = await axios.post(`${API}/clients`, client);
  return response.data;
};

export const deleteClient = async (clientId) => {
  const response = await axios.delete(`${API}/clients/${clientId}`);
  window.location.reload();
  return response.data;
};


export const updateClient = async (clientId, updatedClient) => {
  const response = await axios.put(`${API}/clients/${clientId}`, updatedClient);
  return response.data;
};

