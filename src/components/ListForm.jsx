// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Navbar from "./NavBar";

// const API_URL = "https://final-project-be-dws5.onrender.com";

// const ListForm = () => {
//   const [entries, setEntries] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API_URL}/req/req`)
//       .then((response) => setEntries(response.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>List of Bookings</h1>
//       <Navbar />
//       <table>
//         <thead>
//           <tr>
//             <th>Destination</th>
//             <th>Passangers</th>
//             <th>Start Date</th>
//             {/* <th>End Date</th> */}
//             <th>Email</th>
//             {/*<th>Kids</th>
//             <th>Disabilities</th>
//             <th>Notes</th>
//             <th>Details</th>*/}
//           </tr>
//         </thead>
//         <tbody>
//           {entries.map((entry) => (
//             <tr key={entry._id}>
//               <td>{entry.destination}</td>
//               <td>{entry.passangers}</td>
//               <td>{entry.date1.substring(0, 10)}</td>
//               {/* <td>{entry.date2}</td> */}
//               <td>{entry.email}</td>
//               {/*  <td>{entry.kids}</td>
//               <td>{entry.disabilities}</td>
//               <td>{entry.notes}</td>*/}
//               <td><Link to={`/details/${entry._id}`}>Details</Link></td>
//             </tr>
//           ))}
//         </tbody>
//         <td><Link to={'/mainpage'}>Back</Link></td>
//       </table>
//     </div>
//   );
// };

// export default ListForm;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

const API_URL = "https://final-project-be-dws5.onrender.com";

const ListForm = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/req/req`)
      .then((response) => setEntries(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white p-4">
      <h1 className="text-3xl font-bold mb-4">List of Bookings</h1>
      <Navbar />
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Destination</th>
            <th className="py-2 px-4">Passengers</th>
            <th className="py-2 px-4">Start Date</th>
            {/* <th>End Date</th> */}
            <th className="py-2 px-4">Email</th>
            {/*<th>Kids</th>
            <th>Disabilities</th>
            <th>Notes</th>
            <th>Details</th>*/}
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id} className="border-b border-gray-200">
              <td className="py-2 px-4">{entry.destination}</td>
              <td className="py-2 px-4">{entry.passangers}</td>
              <td className="py-2 px-4">{entry.date1.substring(0, 10)}</td>
              {/* <td>{entry.date2}</td> */}
              <td className="py-2 px-4">{entry.email}</td>
              {/*  <td>{entry.kids}</td>
              <td>{entry.disabilities}</td>
              <td>{entry.notes}</td>*/}
              <td className="py-2 px-4"><Link to={`/details/${entry._id}`} className="text-blue-500 hover:underline">Details</Link></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="text-right py-4"><Link to={'/mainpage'} className="text-blue-500 hover:underline">Back</Link></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ListForm;
