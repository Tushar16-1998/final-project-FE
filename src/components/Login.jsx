// /* Import React / React-Router-Dom Features  */
// import { useState, useContext } from "react";
// //import { useNavigate } from "react-router-dom";

// /* Import Context */
// import { AuthContext } from "../context/auth.context";

// /* Import Axios */
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const authenticateUser = useContext(AuthContext);
//   const  saveToken  = useContext(AuthContext);

//   //const navigate = useNavigate();

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();

//     const reqBody = { email, password };

//     axios
//       .post("http://localhost:5005/auth/login", reqBody)
//       .then((response) => {
//         saveToken(response.data.authToken);
//         authenticateUser();
//         //navigate("/mainpage");
//       })
//       .catch((error) => {
//         const errorDescription = error.data.message;
//         setError(errorDescription);
//       });
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       <form onSubmit={handleLoginSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//         {error && <p>{error}</p>}
//       </form>
//     </div>
//   );
// }

// export default Login;

/* Import React / React-Router-Dom Features  */
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

/* Import Context */
import { AuthContext } from "../context/auth.context";

/* Import Axios */
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { authenticateUser, saveToken } = useContext(AuthContext); // Destructure values from the context
  const navigate = useNavigate(); // Uncomment this line if you plan to use useNavigate()

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const reqBody = { email, password };

    axios
      .post("http://localhost:5005/auth/login", reqBody)
      .then((response) => {
        saveToken(response.data.authToken);
        authenticateUser();
        navigate("/mainpage");
        // Uncomment the following line if you plan to use useNavigate()
        // navigate("/mainpage");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
