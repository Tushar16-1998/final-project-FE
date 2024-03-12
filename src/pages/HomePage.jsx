// import React from 'react'
// import Login from '../components/Login'
// import Signup from '../components/SignUp'
// import { Link } from 'react-router-dom'

// function HomePage() {
//     return (
//         <div>

//             <Link to="/signup">signup</Link>
//             <br />
//             <Link to="/login">login</Link>

//         </div>
//     )
// }

// export default HomePage

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Welcome to My App</h1>
            <div className="space-y-4">
                <Link
                    to="/signup"
                    className="bg-blue-500 hover:white text-white font-semibold py-2 px-4 rounded inline-block"
                >
                    Sign Up
                </Link>
                <div className="h-4"></div> {/* Adding some space */}
                <Link
                    to="/login"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded inline-block"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
