import axios from "axios";
import { API } from "./consts";

export const fetchUsers = async () => {
  const response = await axios.get(`${API}/users`);
  return response.data;
};

export const createUser = async (user) => {
  const response = await axios.post(`${API}/users`, user);
  return response.data;
};

export const loginUser = async (loggingUser) => {
  const users = await fetchUsers();
  return users.find(
    (user) =>
      user.username === loggingUser.username &&
      user.password === loggingUser.password
  );
};
