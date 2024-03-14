import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import 'daisyui/dist/full.css'; // Import DaisyUI styles

// Updated vehicles data with image URLs
const vehiclesData = [
    { id: 1, type: 'Car', brand: 'Toyota', model: 'Corolla', year: 2020, price: 50, imageUrl: 'https://s2-autoesporte.glbimg.com/o_AXRK2ChJTcSafI_R7ltpobOK0=/0x0:1300x807/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/T/O/TYdZpzRaCpOGUFWxLdXg/toyota-corolla-hybrid-sedan-830.jpg' },
    { id: 2, type: 'Car', brand: 'Honda', model: 'Civic', year: 2019, price: 60, imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2023-lightning-lap-honda-civic-type-r-mu-102-1675451016.jpg?crop=0.451xw:0.338xh;0.221xw,0.432xh&resize=1200:*' },
    { id: 3, type: 'Car', brand: 'Ford', model: 'Fusion', year: 2018, price: 55, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfR08BbPRgZO1mqqGxBsPgJE3jwQ2SMDvqiegz6gelvPky-FUzzsSX6Q-qdUXHMgHYmE&usqp=CAU' },
    { id: 4, type: 'Bus', brand: 'Mercedes-Benz', model: 'Sprinter', year: 2021, price: 150, imageUrl: 'https://www.topgear.com/sites/default/files/2024/01/VIPClassMercedes-BenzSprinterbyCliveSutton022.jpg' },
    { id: 5, type: 'Cargo Van', brand: 'Ford', model: 'Transit', year: 2019, price: 100, imageUrl: 'https://www.razaoautomovel.com/wp-content/uploads/2020/09/ford-Transit-mk3-scaled.jpeg' },
    { id: 6, type: 'Camper Van', brand: 'Volkswagen', model: 'California', year: 2020, price: 200, imageUrl: 'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/ecaj9qdoj9wkw8owkvj4' },
    { id: 7, type: 'Premium Car', brand: 'BMW', model: '5 Series', year: 2021, price: 120, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_a-U2R3YXzhVivxUgqe4HhkLKCmugXKYrsQNcw4hXIDSSA2voMR8gZrrcXd_pkAgtXyk&usqp=CAU' },
    { id: 8, type: 'Premium Car', brand: '4L', model: 'V8', year: 2022, price: 350, imageUrl: 'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NTk41hyy577gu7h7gj9I3+46gyP4+gxcp62aGeXdKgR3CJqGMpxEtlQh+pDUlnRPS8ftXpI6yCb4exw00WGg04aQ+c03yIQ1EmaL+QDb0vygdMc=' },
    { id: 9, type: 'Boat', brand: 'Bayliner', model: 'Element E16', year: 2022, price: 250, imageUrl: 'https://images.boattrader.com/resize/1/73/49/8557349_20230511074656691_1_XLARGE.jpg' },
    { id: 10, type: 'plane', brand: 'Swat Cat', model: "custom", year: 2024, price: 500, imageUrl: 'https://static.wikia.nocookie.net/swatkats/images/b/b4/SWAT_s1e01_17-38.jpg/revision/latest?cb=20140508201016' },
    { id: 11, type: 'tank', brand: 'Batman', model: "custom", year: 2021, price: 899, imageUrl: 'https://img.freepik.com/premium-photo/close-up-tank-from-game-batman-arkham-knight_883586-9313.jpg' },
    { id: 12, type: 'golfcart', brand: 'Old man', model: "V8", year: 2023, price: 699, imageUrl: 'https://4.imimg.com/data4/EY/WS/MY-18726492/golf-cart-eight-seater-eq9062-v8.jpg' },

];

function MainPage() {
    const [vehicles, setVehicles] = useState(vehiclesData);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterPrice, setFilterPrice] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilterPrice(event.target.value);
    };

    const filteredVehicles = vehicles.filter(vehicle => {
        return vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterPrice === '' || vehicle.price <= parseInt(filterPrice));
    });

    return (
        <div className="bg-gradient-to-b from-teal-500 to-blue-800 text-white min-h-screen">
            <Navbar />
            <div className="max-w-5xl mx-auto p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Vehicle Rental Service</h1>
                <div className="flex justify-between mb-8 items-center">
                    <input
                        type="text"
                        placeholder="Search by brand..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="input input-bordered w-full md:w-1/2 mr-4"
                    />
                    <select
                        value={filterPrice}
                        onChange={handleFilterChange}
                        className="input input-bordered w-full md:w-1/4"
                    >
                        <option value="">All Prices</option>
                        <option value="50">Less than $50</option>
                        <option value="100">Less than $100</option>
                        <option value="150">Less than $150</option>
                        <option value="200">Less than $200</option>
                        <option value="250">Less than $250</option>
                        <option value="350">Less than $350</option>
                        <option value="700">Less than $700</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredVehicles.map(vehicle => (
                        <div key={vehicle.id} className="bg-white rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl">
                            <img src={vehicle.imageUrl} alt={`${vehicle.brand} - ${vehicle.model}`} className="w-full h-40 object-cover rounded-md mb-2" />
                            <h2 className="text-lg font-semibold mb-2 text-black">{vehicle.brand} - {vehicle.model}</h2>
                            <p className="text-black">Type: {vehicle.type}</p>
                            <p className="text-black">Year: {vehicle.year}</p>
                            <p className="text-black">Average Price per day: ${vehicle.price}</p>
                            <div className="flex justify-between mt-2">
                                <Link to="/reqform" className="btn btn-outline btn-sm bg-teal-400 text-white hover:bg-teal-500 hover:text-white">Select</Link>
                                <Link to="/listform" className="btn btn-outline btn-sm bg-blue-600 text-white hover:bg-blue-700 hover:text-white">Update</Link>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredVehicles.length === 0 && (
                    <p className="text-red-500 mt-4 text-center">No vehicles found</p>
                )}
            </div>
        </div>
    );
}

export default MainPage;

