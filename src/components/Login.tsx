// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { checkUser, loginUser } from '../services/api';
// import '../assets/styles/Login.css';

// const Login: React.FC = () => {
//   const [identifier, setIdentifier] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userExists, setUserExists] = useState(false);
//   const navigate = useNavigate();

//   const handleCheckUser = async () => {
//     try {
//       const response = await checkUser(identifier);
//       if (response.data.exists) {
//         setUsername(response.data.user.username);
//         setUserExists(true);
//       } else {
//         navigate('/register');
//       }
//     } catch (error) {
//       console.error("Error checking user:", error);
//     }
//   };

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser(username, password);
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         navigate('/');
//       } else {
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <input 
//         type="text" 
//         value={identifier} 
//         onChange={(e) => setIdentifier(e.target.value)} 
//         placeholder="Email or Mobile" 
//       />
//       <button onClick={handleCheckUser}>Check</button>
//       {userExists && (
//         <form onSubmit={handleLogin}>
//           <input 
//             type="text" 
//             value={username} 
//             readOnly 
//           />
//           <input 
//             type="password" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//             placeholder="Password" 
//           />
//           <button type="submit">Login</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Login;
import React from 'react'

export default function Login() {
  return (
    <div>Login</div>
  )
}
