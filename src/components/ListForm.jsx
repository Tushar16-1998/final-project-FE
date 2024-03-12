import { useState, useEffect } from "react";
import axios from "axios";

const API_URL="http://localhost:5005"

const ListForm = () => {
    const [entries, setEntries] = useState([]);
    const [editingId, setEditingId] = useState (null)
    const [editingEntry, setEditingEntry] = useState({notes: '', category: '', data_input: '', value: ''})

    const deleteEntry = (entryId) => {
        axios.delete(`${API_URL}/req/${entryId}`)
    }

}
