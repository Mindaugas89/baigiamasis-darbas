import React, { useState, useEffect } from "react";
import { updateClient } from "../api/clients";
import Button from "../components/Button";
import Input from "../components/Input";
import styles from "./EditForm.module.scss";

const EditForm = ({ clientId, onCancel, onUpdate }) => {
  const [editedClient, setEditedClient] = useState({
    name: "",
    surname: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    fetchClientDetails(clientId).then((clientDetails) => {
      setEditedClient((prevClient) => ({ ...prevClient, ...clientDetails }));
    });
  }, [clientId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedClient((prevClient) => ({ ...prevClient, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await updateClient(clientId, editedClient);
      onUpdate();
      window.location.reload();
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  const fetchClientDetails = async (id) => {
    try {
      const response = await axios.get(`${API}/clients/${clientId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching client details:", error);
      throw error;
    }
  };

  return (
    <div className={styles.editTable}>
      <label>Name:</label>
      <Input
        type="text"
        name="name"
        value={editedClient.name}
        onChange={handleChange}
      />
      <label>Surname:</label>
      <Input
        type="text"
        name="surname"
        value={editedClient.surname}
        onChange={handleChange}
      />
      <label>Email:</label>
      <Input
        type="text"
        name="email"
        value={editedClient.email}
        onChange={handleChange}
      />
      <label>Age:</label>
      <Input
        type="text"
        name="age"
        value={editedClient.age}
        onChange={handleChange}
      />
      <div className={styles.editButtons}>
        <Button onClick={handleUpdate}>Update</Button>
        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
};

export default EditForm;
