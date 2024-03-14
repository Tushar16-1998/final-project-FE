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
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import icon from "../assets/icon1.png"

function Navbar() {
    const { user, logOut, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        //logOut();
        navigate("/"); // Navigates to the login page after logout
    };

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <img src={icon} />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/login" className="text-black">Login</Link></li>
                        <li><Link to="/signup" className="text-black">SignUp</Link></li>
                        <li><Link to="/about" className="text-black">About</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/mainpage" className="btn btn-ghost text-xl">RentAssist</Link>
            </div>
            <div className="navbar-end">
                {isLoggedIn && (
                    <button onClick={handleLogout} className="btn btn-ghost text-black">Logout</button>
                )}
            </div>
        </div>
    )
}

export default Navbar;
