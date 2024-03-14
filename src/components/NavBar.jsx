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

function Navbar() {
    const { user, logOut, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        //logOut();
        navigate("/"); // Navigates to the login page after logout
    };

    return (
        <nav className="bg-gradient-to-r from-purple-400 to-indigo-600 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {isLoggedIn && (
                    <h4 className="text-white font-semibold">{user.name}</h4>
                )}

                <div className="space-x-4">
                    <Link to="/about" className="text-white hover:text-gray-200">
                        About
                    </Link>

                    <Link to="/mainpage" className="text-white hover:text-gray-200">
                        Home
                    </Link>

                    {isLoggedIn && (
                        <button onClick={handleLogout} className="text-white hover:text-gray-200 font-semibold">
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
