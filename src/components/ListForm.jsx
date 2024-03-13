import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

const ListForm = () => {
  const [entries, setEntries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingEntry, setEditingEntry] = useState({
    destination: "",
    passengers: 0,
    date1: "",
    date2: "",
    email: "",
    kids: 0,
    disabilities: "",
    notes: "",
  });

  const deleteEntry = (entryId) => {
    axios
      .delete(`${API_URL}/req/req/${entryId}`)
      .then(() => {
        setEntries(entries.filter((entry) => entry.id !== entryId));
      })
      .catch((error) => console.log(error));
  };
  const editEntry = (entryId) => {
    setEditingId(entryId);
    const entryToEdit = entries.find((entry) => entry.id === entryId);
    setEditingEntry(entryToEdit);
  };
  const updateEntry = (entryId, updatedEntry) => {
    axios
      .put(`${API_URL}/req/req/${entryId}`, `${updatedEntry}`)
      .then((res) => {
        setEntries(
          entries.map((entry) => (entry.id === entryId ? updatedEntry : entry))
        );
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/req/req`)
      .then((response) => setEntries(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditingEntry({ ...editingEntry, [name]: value });
  };

  return (
    <div>
      <h1>List of Bookings</h1>
      {entries.map((entry) => (
        <div key={entry.id}>
          {editingId === entry.id ? (
            <>
              <h2 style={{ border: "2px solid black" }}>{entry.data_input}</h2>
              <h3>{entry.category}</h3>
              Destination:
              <input
                type="text"
                name="destination"
                value={editingEntry.destination}
                onChange={handleInputChange}
              />
              Passangers:
              <input
                type="number"
                name="passangers"
                value={editingEntry.passangers}
                onChange={handleInputChange}
              />
              Start Date:
              <input
                type="date"
                name="date1"
                value={editingEntry.date1}
                onChange={handleInputChange}
              />
              End Date:
              <input
                type="date"
                name="date2"
                value={editingEntry.date2}
                onChange={handleInputChange}
              />
              Email:
              <input
                type="email"
                name="email"
                value={editingEntry.email}
                onChange={handleInputChange}
              />
              Kids:
              <input
                type="number"
                name="kids"
                value={editingEntry.kids}
                onChange={handleInputChange}
              />
              Disabilitys:
              <input
                type="text"
                name="disabilities"
                value={editingEntry.disabilities}
                onChange={handleInputChange}
              />
              Notes:
              <input
                type="text"
                name="notes"
                value={editingEntry.notes}
                onChange={handleInputChange}
              />
              <button onClick={() => updateEntry(entry.id, editingEntry)}>
                Save Changes
              </button>
            </>
          ) : (
            <>
              {/* Show the entry details */}
              <h2 style={{ border: "2px solid black" }}>{entry.data_input}</h2>
              <h3>{entry.category}</h3>
              <h3>{entry.destination}</h3>
              <h3>{entry.passangers}</h3>
              <h3>{entry.date1}</h3>
              <h3>{entry.date2}</h3>
              <h3>{entry.email}</h3>
              <h3>{entry.kids}</h3>
              <h3>{entry.disabilities}</h3>
              <h3>{entry.notes}</h3>
              <button onClick={() => editEntry(entry.id)}>Edit</button>
              <button onClick={() => deleteEntry(entry.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
  // Get all the existing entries
};
export default ListForm;
