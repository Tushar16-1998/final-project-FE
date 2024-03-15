import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './NavBar';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const API_URL = "https://final-project-be-dws5.onrender.com";

function ReqForm() {
    const [destination, setDestination] = useState("");
    const [passangers, setPassangers] = useState(0);
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [email, setEmail] = useState("");
    const [kids, setKids] = useState("");
    const [disabilitys, setDisabilitys] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const reqBody = {
            id: Math.random().toString(16).slice(2),
            destination,
            passangers,
            date1,
            date2,
            email,
            kids,
            disabilitys,
            notes
        };

        axios.post(`${API_URL}/req/req`, reqBody)
            .then((response) => {
                console.log(response);
                alert('Request sent!');
                setDestination("");
                setPassangers("");
                setDate1("");
                setDate2("");
                setEmail("");
                setKids("");
                setDisabilitys("");
                setNotes("");
                navigate("/listform");
            });

        // send email 
        const emailContent = `Destination: ${destination}\nPassengers: ${passangers}\nDates: From ${date1} to ${date2}\nEmail: ${email}\nKids: ${kids}\nDisabilities: ${disabilitys}\nNotes: ${notes}`;
        const mailtoLink = `mailto:dfbamaral@gmail.com?subject=New Request&body=${encodeURIComponent(emailContent)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-gradient-to-b from-teal-500 to-blue-800 text-white">
            <Navbar />
            <h2 className="border-4 border-solid border-black">Add New Entry</h2>
            <form onSubmit={handleSubmit} className="p-4">
                <label className="block">Destination:<br /></label>
                <input type="text" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" /><br />
                <label className="block">Number Passengers:<br /></label>
                <input type="number" name="passengers" value={passangers} onChange={(e) => setPassangers(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" /><br />
                <label className="block">Travel Dates: From - To<br /></label>
                <input type="date" name="date1" value={date1} onChange={(e) => setDate1(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" />
                <input type="date" name="date2" value={date2} onChange={(e) => setDate2(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" /><br />
                <label className="block">Email:<br /></label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" /><br />
                <label className="block">Number of Kids (if any):<br /></label>
                <input type="number" name="kids" value={kids} onChange={(e) => setKids(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" /><br />
                <label className="block">Disabilities (if any):<br /></label>
                <input type="text" name="disabilities" value={disabilitys} onChange={(e) => setDisabilitys(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" /><br />
                <label className="block">Notes:<br /></label>
                <input type="text" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="border-2 border-gray-500 rounded-md p-1 mb-2 text-blue-500" /><br />
                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Request</button>
                <br />
                <Link to="/mainpage" className="text-blue-300 hover:text-blue-500">Back</Link>
            </form>
        </div>
    );
}

export default ReqForm;
