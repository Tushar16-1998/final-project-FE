import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { authenticateUser, saveToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const reqBody = { email, password };

    try {
      const response = await axios.post("https://final-project-be-dws5.onrender.com/auth/login", reqBody);
      saveToken(response.data.authToken);
      authenticateUser();
      navigate("/mainpage");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-teal-500 to-blue-800 text-white min-h-screen">
      <div className="bg-white p-10 margin-10 rounded-lg shadow-xl">
        <h1 className="text-3xl font-semibold text-center mb-4 text-gray-800">Login</h1>
        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-500 text-white rounded-md transition duration-300 hover:bg-purple-600 focus:outline-none"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
