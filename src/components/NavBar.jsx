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
        <nav className="bg-purple-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {isLoggedIn && (
                    <h4 className="text-white">{user.name}</h4>
                )}

                <div className="flex space-x-4">
                    <Link to="/about" className="text-white hover:underline">
                        <button className="btn btn-xs btn-primary">About</button>
                    </Link>

                    <Link to="/mainpage" className="text-white hover:underline">
                        <button className="btn btn-xs btn-primary">Home</button>
                    </Link>

                    {isLoggedIn && (
                        <button onClick={handleLogout} className="btn btn-xs btn-secondary">Logout</button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
