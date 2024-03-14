import React from 'react';
import { Link } from 'react-router-dom';
import icon from "../assets/icon1.png"

function Navbar() {
    return (
        <nav className="navbar bg-gradient-to-b from-teal-500 to-blue-800 text-white min-h-screen">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/mainpage" className="text-grey text-lg font-bold">
                    <img src={icon} alt="Logo" style={{ width: '50px', height: '50px' }} />
                </Link>
                <div className="flex items-center space-x-4">
                    <Link to="/about" className="btn btn-sm btn-primary">About</Link>
                    <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
                    <Link to="/signup" className="btn btn-sm btn-primary">SignUp</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
