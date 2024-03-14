import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
    const { user, logOut, isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        //logOut();
        navigate("/login"); // Navega para a página de login após o logout
    };

    return (
        <div>
            {isLoggedIn && (<h4> Hi {user.name}</h4>)}

            <Link to="/about">
                <button>About</button>
            </Link>

            <Link to="/mainpage">
                <button>Home</button>
            </Link>

            {isLoggedIn && (
                <button onClick={handleLogout}>Logout</button>
            )}
        </div>
    )
}

export default Navbar;
