import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./NavBar";


const API_URL = "https://final-project-be-dws5.onrender.com";

const DetailsPage = () => {
    const [editedEntry, setEditedEntry] = useState(null);
    const [changesSaved, setChangesSaved] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(`${API_URL}/req/req/${id}`)
            .then((response) => setEditedEntry(response.data))
            .catch((err) => console.log(err));
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'date1') {
            const dateWithoutTime = value.substring(0, 10); // Extrai os primeiros 10 caracteres (apenas a data)
            setEditedEntry({ ...editedEntry, [name]: dateWithoutTime });
        } else {
            setEditedEntry({ ...editedEntry, [name]: value });
        }
    };

    const handleSave = () => {
        axios
            .put(`${API_URL}/req/req/${id}`, editedEntry)
            .then((res) => {
                console.log("Entry updated successfully!");
                setChangesSaved(true);
                setTimeout(() => {
                    setChangesSaved(false); // Reseta o estado da mensagem após 1 segundo
                    navigate("/ListForm"); // Navega para a página ListForm após 1 segundo
                }, 1000);
            })
            .catch((error) => console.log(error));
    };

    const handleDelete = () => {
        axios
            .delete(`${API_URL}/req/req/${id}`)
            .then((res) => {
                console.log("Entry deleted successfully!");
                navigate("/ListForm"); // Navega para a página ListForm após a exclusão

            })
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <h1>Booking Details</h1>
            <Navbar />
            {editedEntry && (
                <div>
                    Destination:
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={editedEntry.destination}
                        onChange={handleInputChange}
                    />
                    <br />
                    Passengers:
                    <input
                        type="number"
                        id="passangers"
                        name="passangers"
                        value={editedEntry.passangers}
                        onChange={handleInputChange}
                    />
                    <br />
                    Start Date:
                    <input
                        type="date"
                        id="date1"
                        name="date1"
                        value={editedEntry.date1}
                        onChange={handleInputChange}
                    />
                    <br />
                    End Date:
                    <input
                        type="date"
                        id="date2"
                        name="date2"
                        value={editedEntry.date2}
                        onChange={handleInputChange}
                    />
                    <br />
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={editedEntry.email}
                        onChange={handleInputChange}
                    />
                    <br />
                    Kids:
                    <input
                        type="number"
                        id="kids"
                        name="kids"
                        value={editedEntry.kids}
                        onChange={handleInputChange}
                    />
                    <br />
                    Disabilities:
                    <input
                        type="text"
                        id="disabilities"
                        name="disabilities"
                        value={editedEntry.disabilities}
                        onChange={handleInputChange}
                    />
                    <br />
                    Notes:
                    <input
                        type="text"
                        id="notes"
                        name="notes"
                        value={editedEntry.notes}
                        onChange={handleInputChange}
                    />
                    <br />
                    <button onClick={handleSave}>Save Changes</button>
                    <button onClick={handleDelete}>Delete</button>
                    {changesSaved && <p>Changes saved successfully!</p>}
                    <Link to="/mainpage"> back </Link>
                </div>
            )}
        </div>
    );
};

export default DetailsPage;
