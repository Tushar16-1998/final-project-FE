import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "./NavBar";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

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
            const dateWithoutTime = value.substring(0, 10);
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
                    setChangesSaved(false);
                    navigate("/ListForm");
                }, 1000);
            })
            .catch((error) => console.log(error));
    };

    const handleDelete = () => {
        axios
            .delete(`${API_URL}/req/req/${id}`)
            .then((res) => {
                console.log("Entry deleted successfully!");
                navigate("/ListForm");
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="bg-gradient-to-b from-teal-500 to-blue-800 text-white">
            <h1 className="text-3xl font-bold mb-4">Booking Details</h1>
            <Navbar />
            {editedEntry && (
                <div>
                    <label htmlFor="destination" className="block">Destination:</label>
                    <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={editedEntry.destination}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2 text-blue-500"
                    />
                    <br />
                    <label htmlFor="passangers" className="block">passangers:</label>
                    <input
                        type="number"
                        id="passangers"
                        name="passangers"
                        value={editedEntry.passangers}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2"
                    />
                    <br />
                    <label htmlFor="date1" className="block">Start Date:</label>
                    <input
                        type="date"
                        id="date1"
                        name="date1"
                        value={editedEntry.date1}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2"
                    />
                    <br />
                    <label htmlFor="date2" className="block">End Date:</label>
                    <input
                        type="date"
                        id="date2"
                        name="date2"
                        value={editedEntry.date2}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2"
                    />
                    <br />
                    <label htmlFor="email" className="block">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={editedEntry.email}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2"
                    />
                    <br />
                    <label htmlFor="kids" className="block">Kids:</label>
                    <input
                        type="number"
                        id="kids"
                        name="kids"
                        value={editedEntry.kids}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2"
                    />
                    <br />
                    <label htmlFor="disabilities" className="block">Disabilities:</label>
                    <input
                        type="text"
                        id="disabilities"
                        name="disabilities"
                        value={editedEntry.disabilities}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2"
                    />
                    <br />
                    <label htmlFor="notes" className="block">Notes:</label>
                    <input
                        type="text"
                        id="notes"
                        name="notes"
                        value={editedEntry.notes}
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-md p-1 mb-2"
                    />
                    <br />
                    <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Save Changes</button>
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                    {changesSaved && <p className="text-green-500">Changes saved successfully!</p>}
                    <br/>
                    <Link to="/mainpage" className="text-blue-500 hover:underline">Back</Link>
                </div>
            )}
        </div>
    );
};

export default DetailsPage;
