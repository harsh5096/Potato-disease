// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import React, { useContext } from 'react';

// import { useNavigate, Link } from 'react-router-dom';


// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const history = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/login', { username, password })
//       .then(res=>{
//         if(res.data ="exist"){
//           history("/home",{state:{id:username}})
//         }
//         else if(res.data = "does not exist"){
//           alert("User is not logged in ")
//         }
//       })
//       .catch(e=>{
//         alert("wrong detail")
//         console.log(e);
//       })
//       console.log('Login successful:', response.data);
//       // Handle successful login, e.g., redirect to dashboard
//     } catch (error) {
//       console.error('Login failed:', error);
//       // Handle login error, e.g., display error message
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;


import React, { useState } from 'react'; // Import React and useState
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', { username, password });
      if (response.data === "exist") {
        history("/home", { state: { id: username } });
      } else if (response.data === "does not exist") {
        alert("User is not logged in");
      }
      console.log('Login successful:', response.data);
      // Handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Login failed:', error);
      alert("wrong detail");
      // Handle login error, e.g., display error message
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
