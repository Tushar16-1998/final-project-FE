// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { useNavigate, Link } from 'react-router-dom'
// import Navbar from './NavBar'


// const API_URL = "https://final-project-be-dws5.onrender.com"

// function ReqForm() {
//     const [destination, setDestination] = useState("");
//     const [passangers, setPassangers] = useState(0);
//     const [date1, setDate1] = useState("");
//     const [date2, setDate2] = useState("");
//     const [email, setEmail] = useState("");
//     const [kids, setKids] = useState("");
//     const [disabilitys, setDisabilitys] = useState("");
//     const [notes, setNotes] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();


//         const reqBody = {
//             id: Math.random().toString(16).slice(2),
//             destination,
//             passangers,
//             date1,
//             date2,
//             email,
//             kids,
//             disabilitys,
//             notes
//         }

//         axios.post(`${API_URL}/req/req`, reqBody)
//             .then((response) => {
//                 console.log(response)
//                 alert('Request sent!')
//                 setDestination("");
//                 setPassangers("");
//                 setDate1("");
//                 setDate2("");
//                 setEmail("");
//                 setKids("");
//                 setDisabilitys("");
//                 setNotes("");
//                 navigate("/listform");
//             })
//             // send email 
//             const emailContent = `Destination: ${destination}\nPassengers: ${passangers}\nDates: From ${date1} to ${date2}\nEmail: ${email}\nKids: ${kids}\nDisabilities: ${disabilitys}\nNotes: ${notes}`;
//             const mailtoLink = `mailto:dfbamaral@gmail.com?subject=New Request&body=${encodeURIComponent(emailContent)}`;
//             window.location.href = mailtoLink;

//     }

//     return (
//         <div>
//             <Navbar />
//             <h2 style={{ border: '3px solid black', borderStyle: 'inset' }}>Add New Entry</h2>

//             <form onSubmit={handleSubmit}>
//                 <label>Destination:<br /></label>
//                 <input type="text" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} /><br />
//                 <label>Number Passangers:<br /></label>
//                 <input type="number" name="passangers" value={passangers} onChange={(e) => setPassangers(e.target.value)} /><br />
//                 <label>Travel Dates: From - To<br /></label>
//                 <input type="date" name="date1" value={date1} onChange={(e) => setDate1(e.target.value)} />
//                 <input type="date" name="date2" value={date2} onChange={(e) => setDate2(e.target.value)} /><br />
//                 <label>Email:<br /></label>
//                 <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
//                 <label>Number of kids(if any):<br /></label>
//                 <input type="number" name="kids" value={kids} onChange={(e) => setKids(e.target.value)} /><br />
//                 <label>Disabilitys(if any):<br /></label>
//                 <input type="text" name="disabilitys" value={disabilitys} onChange={(e) => setDisabilitys(e.target.value)} /><br />
//                 <label>Notes:<br /></label>
//                 <input type="text" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} /><br />
//                 <button type='submit' >Send Request</button>
//                 <br />
//                 <Link to="/mainpage"> back </Link>
//             </form>


//         </div>
//     );
// };

// export default ReqForm

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './NavBar';

const API_URL = "https://final-project-be-dws5.onrender.com";

function ReqForm() {
    const [destination, setDestination] = useState("");
    const [passengers, setPassengers] = useState(0);
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [email, setEmail] = useState("");
    const [kids, setKids] = useState("");
    const [disabilities, setDisabilities] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const reqBody = {
            id: Math.random().toString(16).slice(2),
            destination,
            passengers,
            date1,
            date2,
            email,
            kids,
            disabilities,
            notes
        };

        axios.post(`${API_URL}/req/req`, reqBody)
            .then((response) => {
                console.log(response);
                alert('Request sent!');
                setDestination("");
                setPassengers("");
                setDate1("");
                setDate2("");
                setEmail("");
                setKids("");
                setDisabilities("");
                setNotes("");
                navigate("/listform");
            });

        const emailContent = `Destination: ${destination}\nPassengers: ${passengers}\nDates: From ${date1} to ${date2}\nEmail: ${email}\nKids: ${kids}\nDisabilities: ${disabilities}\nNotes: ${notes}`;
        const mailtoLink = `mailto:dfbamaral@gmail.com?subject=New Request&body=${encodeURIComponent(emailContent)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold my-4">Add New Entry</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">Destination:</label>
                    <input type="text" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} className="input" />

                    <label className="block">Number Passengers:</label>
                    <input type="number" name="passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} className="input" />

                    <label className="block">Travel Dates: From - To</label>
                    <div className="flex space-x-2">
                        <input type="date" name="date1" value={date1} onChange={(e) => setDate1(e.target.value)} className="input" />
                        <input type="date" name="date2" value={date2} onChange={(e) => setDate2(e.target.value)} className="input" />
                    </div>

                    <label className="block">Email:</label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />

                    <label className="block">Number of kids (if any):</label>
                    <input type="number" name="kids" value={kids} onChange={(e) => setKids(e.target.value)} className="input" />

                    <label className="block">Disabilities (if any):</label>
                    <input type="text" name="disabilities" value={disabilities} onChange={(e) => setDisabilities(e.target.value)} className="input" />

                    <label className="block">Notes:</label>
                    <input type="text" name="notes" value={notes} onChange={(e) => setNotes(e.target.value)} className="input" />

                    <button type='submit' className="btn btn-primary">Send Request</button>

                    <Link to="/mainpage" className="text-blue-500">Back</Link>
                </form>
            </div>
        </div>
    );
}

export default ReqForm;
