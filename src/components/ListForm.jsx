// ListForm.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

const ListForm = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/req/req`)
      .then((response) => setEntries(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>List of Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Passangers</th>
            <th>Start Date</th>
            {/* <th>End Date</th> */}
            <th>Email</th>
            {/*<th>Kids</th>
            <th>Disabilities</th>
            <th>Notes</th>
            <th>Details</th>*/}
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.destination}</td>
              <td>{entry.passangers}</td>
              <td>{entry.date1.substring(0,10)}</td>
              {/* <td>{entry.date2}</td> */}
              <td>{entry.email}</td>
              {/*  <td>{entry.kids}</td>
              <td>{entry.disabilities}</td>
              <td>{entry.notes}</td>*/}
              <td><Link to={`/details/${entry._id}`}>Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListForm;
