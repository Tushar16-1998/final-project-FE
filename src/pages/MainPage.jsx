import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
// import 'daisyui/dist/full.css'; // Import DaisyUI styles

// Sample data for available vehicles
const vehiclesData = [
    { id: 1, type: 'Car', brand: 'Toyota', model: 'Corolla', year: 2020, price: 50 },
    { id: 2, type: 'Car', brand: 'Honda', model: 'Civic', year: 2019, price: 60 },
    { id: 3, type: 'Car', brand: 'Ford', model: 'Fusion', year: 2018, price: 55 },
    { id: 4, type: 'Bus', brand: 'Mercedes-Benz', model: 'Sprinter', year: 2021, price: 150 },
    { id: 5, type: 'Cargo Van', brand: 'Ford', model: 'Transit', year: 2019, price: 100 },
    { id: 6, type: 'Camper Van', brand: 'Volkswagen', model: 'California', year: 2020, price: 200 },
    { id: 7, type: 'Premium Car', brand: 'BMW', model: '5 Series', year: 2021, price: 120 },
    { id: 8, type: 'Boat', brand: 'Bayliner', model: 'Element E16', year: 2022, price: 250 },
    // Add more vehicles as needed
];

// Main MainPage component
function MainPage() {
    const [vehicles, setVehicles] = useState(vehiclesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPrice, setFilterPrice] = useState('');

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Function to handle filter by price change
    const handleFilterChange = (event) => {
        setFilterPrice(event.target.value);
    };

    // Function to filter vehicles based on search term and price filter
    const filteredVehicles = vehicles.filter(vehicle => {
        return vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterPrice === '' || vehicle.price <= parseInt(filterPrice));
    });

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-8">Vehicle Rental Service</h1>
            <div className="flex justify-between mb-4">
                <input
                    type="text"
                    placeholder="Search by brand..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="form-input rounded-lg mr-4 w-1/2"
                />
                <select
                    value={filterPrice}
                    onChange={handleFilterChange}
                    className="form-select rounded-lg w-1/4"
                >
                    <option value="">All Prices</option>
                    <option value="50">Less than $50</option>
                    <option value="100">Less than $100</option>
                    <option value="150">Less than $150</option>
                    <option value="200">Less than $200</option>
                    <option value="250">Less than $250</option>
                    {/* Add more price options as needed */}
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredVehicles.length > 0 ? (
                    filteredVehicles.map(vehicle => (
                        <div key={vehicle.id} className="border border-gray-200 rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-2">{vehicle.brand} - {vehicle.model}</h2>
                            <p className="mb-2">Type: {vehicle.type}</p>
                            <p className="mb-2">Year: {vehicle.year}</p>
                            <p className="mb-2">Average Price per day: ${vehicle.price}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-red-500">No vehicles found</p>
                )}
            </div>
            <Link to='/listform'> Select </Link>
        </div>
    );
}

export default MainPage;
