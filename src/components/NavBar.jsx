// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/auth.context";

// function Navbar() {
//     const { user, logOut, isLoggedIn } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         //logOut();
//         navigate("/"); // Navega para a página de login após o logout
//     };

//     return (
//         <div>
//             {isLoggedIn && (<h4> {user.name}</h4>)}

//             <Link to="/about">
//                 <button>About</button>
//             </Link>

//             <Link to="/mainpage">
//                 <button>Home</button>
//             </Link>

//             {isLoggedIn && (
//                 <button onClick={handleLogout}>Logout</button>
//             )}
//         </div>
//     )
// }

// export default Navbar;


// import { Link, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../context/auth.context";

// function Navbar() {
//     const { user, logOut, isLoggedIn } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         //logOut();
//         navigate("/"); // Navigates to the login page after logout
//     };

//     return (
//         <nav className="bg-gradient-to-r from-purple-400 to-indigo-600 shadow-lg">
//             <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//                 {isLoggedIn && (
//                     <h4 className="text-white font-semibold">{user.name}</h4>
//                 )}

//                 <div className="space-x-4">
//                     <Link to="/about" className="text-white hover:text-gray-200">
//                         About
//                     </Link>

//                     <Link to="/mainpage" className="text-white hover:text-gray-200">
//                         Home
//                     </Link>

//                     {isLoggedIn && (
//                         <button onClick={handleLogout} className="text-white hover:text-gray-200 font-semibold">
//                             Logout
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;


import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const { user, logOut, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // State variables for theme
    const [theme, setTheme] = useState('light');

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const handleLogout = () => {
        //logOut();
        navigate("/"); // Navigate to the login page after logout
    };

    return (
        <div className={`navbar bg-${theme === 'light' ? 'base' : 'dark'}-100`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {!isLoggedIn && (
                            <>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/signup">SignUp</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </>
                        )}
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/mainpage" className="btn btn-ghost text-xl">RentAssist</Link>
            </div>
            <div className="navbar-end">
                {isLoggedIn && (
                    <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                )}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleTheme}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box">
                        <li><button className="btn btn-ghost btn-sm" onClick={toggleTheme}>Light Theme</button></li>
                        <li><button className="btn btn-ghost btn-sm" onClick={toggleTheme}>Dark Theme</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
