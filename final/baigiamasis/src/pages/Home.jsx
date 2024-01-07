import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { deleteClient, updateClient } from "../api/clients";
import EditForm from "../components/EditForm";
import Input from "../components/Input";
import Button from "../components/Button";
import styles from "./Home.module.scss";

const Home = () => {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    axios
      .get("../db.json")
      .then((response) => {
        if (response.data && response.data.clients) {
          setClients(response.data.clients);
        }
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);
      });
  }, []);

  const handleUpdateClient = (client) => {
    setEditingClient(client);
  };

  const handleCancelEdit = () => {
    setEditingClient(null);
  };

  const handleEditFormUpdate = () => {
    setEditingClient(null);
    fetchUpdatedClientData(editingClient.id);
  };

  const fetchUpdatedClientData = async (clientId) => {
    const updatedClientDetails = await fetchClientDetails(clientId);
    setClients((prevClients) =>
      prevClients.map((client) =>
        client.id === clientId ? { ...client, ...updatedClientDetails } : client
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.clientsList}>
        <h2 className={styles.title}>Clients</h2>
        {clients.map((client) => (
          <div key={client.id} className={styles.clientItem}>
            <span>
              <strong>Name:</strong> {client.name}
            </span>
            <span>
              <strong>Surname:</strong> {client.surname}
            </span>
            <span>
              <strong>Email:</strong> {client.email}
            </span>
            <span>
              <strong>Age:</strong> {client.age}
            </span>
            <div className={styles.buttons}>
            <Button onClick={() => deleteClient(client.id)}>
              Delete Client
            </Button>
            <Button onClick={() => handleUpdateClient(client)}>
              Update Client info
            </Button>
            </div>

            {editingClient && editingClient.id === client.id && (
              <EditForm
                clientId={editingClient.id}
                onCancel={handleCancelEdit}
                onUpdate={handleEditFormUpdate}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
