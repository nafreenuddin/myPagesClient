// // // // import React, { useState, FormEvent } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { checkUser, registerUser, loginUser } from '../services/api';
// // // // import '../assets/styles/AuthPage.css';

// // // // const AuthPage: React.FC = () => {
// // // //   const [identifier, setIdentifier] = useState('');
// // // //   const [userExists, setUserExists] = useState<boolean | null>(null);
// // // //   const [username, setUsername] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [mobile, setMobile] = useState('');
// // // //   const [message, setMessage] = useState('');
// // // //   const [open, setOpen] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const handleCheckUser = async (e: FormEvent) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const response = await checkUser(identifier);
// // // //       setUserExists(response.exists);
// // // //       if (response.exists) {
// // // //         setUsername(response.user.username);
// // // //       } else {
// // // //         setEmail(identifier.includes('@') ? identifier : '');
// // // //         setMobile(!identifier.includes('@') ? identifier : '');
// // // //       }
// // // //       setMessage('');
// // // //     } catch (error: any) {
// // // //       setMessage(`Error: ${error.message}`);
// // // //     }
// // // //   };

// // // //   const handleLogin = async (e: FormEvent) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const response = await loginUser({ username, password });
// // // //       if (response.token) {
// // // //         setMessage('Login successful');
// // // //         navigate('/');
// // // //       } else {
// // // //         setMessage('Invalid credentials');
// // // //       }
// // // //     } catch (error: any) {
// // // //       setMessage(`Login failed: ${error.message}`);
// // // //     }
// // // //   };

// // // //   const handleRegister = async (e: FormEvent) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       const response = await registerUser({ username, email, mobile, password });
// // // //       if (response.token) {
// // // //         setMessage('Registration successful, please login');
// // // //         setOpen(true);
// // // //       } else {
// // // //         setMessage('Registration failed');
// // // //       }
// // // //     } catch (error: any) {
// // // //       setMessage(`Registration failed: ${error.message}`);
// // // //     }
// // // //   };

// // // //   const handleClose = () => {
// // // //     setOpen(false);
// // // //     navigate('/auth');
// // // //   };

// // // //   return (
// // // //     <div className="auth-container">
// // // //       <h2>Authentication</h2>
// // // //       {message && <p className="message">{message}</p>}
// // // //       {userExists === null && (
// // // //         <form onSubmit={handleCheckUser}>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Email or Mobile"
// // // //             value={identifier}
// // // //             onChange={(e) => setIdentifier(e.target.value)}
// // // //             className="input-field"
// // // //             required
// // // //           />
// // // //           <button type="submit" className="btn">Next</button>
// // // //         </form>
// // // //       )}
// // // //       {userExists === true && (
// // // //         <form onSubmit={handleLogin}>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Username"
// // // //             value={username}
// // // //             readOnly
// // // //             className="input-field"
// // // //           />
// // // //           <input
// // // //             type="password"
// // // //             placeholder="Password"
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //             className="input-field"
// // // //             required
// // // //           />
// // // //           <button type="submit" className="btn">Login</button>
// // // //         </form>
// // // //       )}
// // // //       {userExists === false && (
// // // //         <form onSubmit={handleRegister}>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Username"
// // // //             value={username}
// // // //             onChange={(e) => setUsername(e.target.value)}
// // // //             className="input-field"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="email"
// // // //             placeholder="Email"
// // // //             value={email}
// // // //             onChange={(e) => setEmail(e.target.value)}
// // // //             className="input-field"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Mobile"
// // // //             value={mobile}
// // // //             onChange={(e) => setMobile(e.target.value)}
// // // //             className="input-field"
// // // //             required
// // // //           />
// // // //           <input
// // // //             type="password"
// // // //             placeholder="Password"
// // // //             value={password}
// // // //             onChange={(e) => setPassword(e.target.value)}
// // // //             className="input-field"
// // // //             required
// // // //           />
// // // //           <button type="submit" className="btn">Register</button>
// // // //         </form>
// // // //       )}
// // // //       {open && (
// // // //         <div className="dialog">
// // // //           <h2>Success</h2>
// // // //           <p>Registration successful. Please login.</p>
// // // //           <button onClick={handleClose} className="btn">OK</button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AuthPage;

// // // import React, { useState, FormEvent } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { checkUser, registerUser, loginUser } from "../services/api";
// // // import { useAuth } from "../context/AuthContext";
// // // import "../assets/styles/AuthPage.css";

// // // function  AuthPage() {
// // //   const [identifier, setIdentifier] = useState("");
// // //   const [userExists, setUserExists] = useState<boolean | null>(null);
// // //   const [username, setUsername] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [mobile, setMobile] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const [open, setOpen] = useState(false);
// // //   const navigate = useNavigate();
// // //   const { login } = useAuth();

// // //   const handleCheckUser = async (e: FormEvent) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await checkUser(identifier);
// // //       //setUserExists(response.exists);
// // //       if (response.exists) {
// // //         setUsername(response.user.username);
// // //         setUserExists(true);
// // //       } else {
// // //         setEmail(identifier.includes("@") ? identifier : "");
// // //         setMobile(!identifier.includes("@") ? identifier : "");
// // //         setUserExists(false); // Add this line
// // //       }
// // //       setMessage("");
// // //     } catch (error: any) {
// // //       setMessage(`Error: ${error.message}`);
// // //     }
// // //   };

// // //   // const handleLogin = async (e: FormEvent) => {
// // //   //   e.preventDefault();
// // //   //   try {
// // //   //     const response = await loginUser({ username, password });
// // //   //     if (response.token) {
// // //   //       localStorage.setItem("token", response.token); // Save token to local storage
// // //   //       localStorage.setItem("username", username); // Save username to local storage
// // //   //       setMessage("Login successful");
// // //   //       navigate("/");
// // //   //     } else {
// // //   //       setMessage("Invalid credentials");
// // //   //     }
// // //   //   } catch (error: any) {
// // //   //     setMessage(`Login failed: ${error.message}`);
// // //   //   }
// // //   // };
// // //   const handleLogin = async (e: FormEvent) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await loginUser({ username, password });
// // //       if (response.token) {
// // //         login(response.token);
// // //         setMessage("Login successful");
// // //         navigate("/");
// // //       } else {
// // //         setMessage("Invalid credentials");
// // //       }
// // //     } catch (error: any) {
// // //       setMessage(`Login failed: ${error.message}`);
// // //     }
// // //   };
// // //   // const handleRegister = async (e: FormEvent) => {
// // //   //   e.preventDefault();
// // //   //   try {
// // //   //     const response = await registerUser({ username, email, mobile, password });
// // //   //     if (response.token) {
// // //   //       setMessage('Registration successful, please login');
// // //   //       setOpen(true);
// // //   //     } else {
// // //   //       setMessage('Registration failed');
// // //   //     }
// // //   //   } catch (error: any) {
// // //   //     setMessage(`Registration failed: ${error.message}`);
// // //   //   }
// // //   // };
// // //   const handleRegister = async (e: FormEvent) => {
// // //     e.preventDefault();
// // //     try {
// // //       const response = await registerUser({
// // //         username,
// // //         email,
// // //         mobile,
// // //         password,
// // //       });
// // //       if (response.token) {
// // //         // localStorage.setItem("token", response.token);
// // //         // localStorage.setItem("username", username);
// // //         setMessage("Registration successful, please login");
// // //         setTimeout(() => {
// // //           navigate('/auth');
// // //         }, 2000); 
// // //       } else {
// // //         setMessage("Registration failed");
// // //       }
// // //     } catch (error: any) {
// // //       setMessage(`Registration failed: ${error.message}`);
// // //     }
// // //   };

// // //   const handleClose = () => {
// // //     setOpen(false);
// // //     navigate("/auth");
// // //   };

// // //   return (
// // //     <div className="auth-container">
// // //       <h2>Welcome to Pages</h2>
// // //       {message && <p className="message">{message}</p>}
// // //       {userExists === null && (
// // //         <form onSubmit={handleCheckUser}>
// // //           <input
// // //             type="text"
// // //             placeholder="Email or Mobile"
// // //             value={identifier}
// // //             onChange={(e) => setIdentifier(e.target.value)}
// // //             className="input-field"
// // //             required
// // //           />
// // //           <button type="submit" className="btn">
// // //             Next
// // //           </button>
// // //         </form>
// // //       )}
// // //       {userExists === true && (
// // //         <form onSubmit={handleLogin}>
// // //           <input
// // //             type="text"
// // //             placeholder="Username"
// // //             value={username}
// // //             readOnly
// // //             className="input-field"
// // //           />
// // //           <input
// // //             type="password"
// // //             placeholder="Password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="input-field"
// // //             required
// // //           />
// // //           <button type="submit" className="btn">
// // //             Login
// // //           </button>
// // //         </form>
// // //       )}
// // //       {userExists === false && (
// // //         <form onSubmit={handleRegister}>
// // //           <input
// // //             type="text"
// // //             placeholder="Username"
// // //             value={username}
// // //             onChange={(e) => setUsername(e.target.value)}
// // //             className="input-field"
// // //             required
// // //           />
// // //           <input
// // //             type="email"
// // //             placeholder="Email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             className="input-field"
// // //             required
// // //           />
// // //           <input
// // //             type="text"
// // //             placeholder="Mobile"
// // //             value={mobile}
// // //             onChange={(e) => setMobile(e.target.value)}
// // //             className="input-field"
// // //             required
// // //           />
// // //           <input
// // //             type="password"
// // //             placeholder="Password"
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             className="input-field"
// // //             required
// // //           />
// // //           <button type="submit" className="btn">
// // //             Register
// // //           </button>
// // //         </form>
// // //       )}
// // //       {open && (
// // //         <div className="dialog">
// // //           <h2>Success</h2>
// // //           <p>Registration successful. Please login.</p>
// // //           <button onClick={handleClose} className="btn">
// // //             OK
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default AuthPage;
// // // function login(token: any) {
// // //   throw new Error("Function not implemented.");
// // // }

// // import React, { useState, FormEvent } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { checkUser, registerUser, loginUser } from "../services/api";
// // import { useAuth } from "../context/AuthContext";
// // import "../assets/styles/AuthPage.css";

// // function AuthPage() {
// //   const [identifier, setIdentifier] = useState("");
// //   const [userExists, setUserExists] = useState<boolean | null>(null);
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [mobile, setMobile] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [open, setOpen] = useState(false); // Ensure this state is used correctly
// //   const navigate = useNavigate();
// //   const { login } = useAuth();

// //   const handleCheckUser = async (e: FormEvent) => {
// //     e.preventDefault();
// //     console.log('Checking user with identifier:', identifier);
// //     try {
// //       const response = await checkUser(identifier);
// //       console.log('Check user response:', response);
// //       if (response.exists) {
// //         setUsername(response.user.username);
// //         setUserExists(true);
// //       } else {
// //         setEmail(identifier.includes("@") ? identifier : "");
// //         setMobile(!identifier.includes("@") ? identifier : "");
// //         setUserExists(false);
// //       }
// //       setMessage("");
// //     } catch (error: any) {
// //       setMessage(`Error: ${error.message}`);
// //     }
// //   };

// //   const handleLogin = async (e: FormEvent) => {
// //     e.preventDefault();
// //     console.log('Logging in with username:', username, 'password:', password);
// //     try {
// //       const response = await loginUser({ username, password });
// //       console.log('Login response:', response);
// //       if (response.token) {
// //         login(response.token);
// //         setMessage("Login successful");
// //         navigate("/");
// //       } else {
// //         setMessage("Invalid credentials");
// //       }
// //     } catch (error: any) {
// //       setMessage(`Login failed: ${error.message}`);
// //     }
// //   };

// //   const handleRegister = async (e: FormEvent) => {
// //     e.preventDefault();
// //     console.log('Registering user with username:', username, 'email:', email, 'mobile:', mobile);
// //     try {
// //       const response = await registerUser({
// //         username,
// //         email,
// //         mobile,
// //         password,
// //       });
// //       console.log('Register response:', response);
// //       if (response.token) {
// //         setMessage("Registration successful, please login");
// //         setOpen(true); // Show the popup
// //         setTimeout(() => {
// //           console.log('Redirecting to /auth');
// //           setOpen(false); // Hide the popup
// //           navigate('/auth');
// //         }, 2000);
// //       } else {
// //         setMessage("Registration failed");
// //       }
// //     } catch (error: any) {
// //       setMessage(`Registration failed: ${error.message}`);
// //     }
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //     console.log('Redirecting to /auth');
// //     navigate("/auth");
// //   };

// //   return (
// //     <div className="auth-container">
// //       <h2>Welcome to Pages</h2>
// //       {message && <p className="message">{message}</p>}
// //       {userExists === null && (
// //         <form onSubmit={handleCheckUser}>
// //           <input
// //             type="text"
// //             placeholder="Email or Mobile"
// //             value={identifier}
// //             onChange={(e) => setIdentifier(e.target.value)}
// //             className="input-field"
// //             required
// //           />
// //           <button type="submit" className="btn">
// //             Next
// //           </button>
// //         </form>
// //       )}
// //       {userExists === true && (
// //         <form onSubmit={handleLogin}>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             value={username}
// //             readOnly
// //             className="input-field"
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="input-field"
// //             required
// //           />
// //           <button type="submit" className="btn">
// //             Login
// //           </button>
// //         </form>
// //       )}
// //       {userExists === false && (
// //         <form onSubmit={handleRegister}>
// //           <input
// //             type="text"
// //             placeholder="Username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             className="input-field"
// //             required
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="input-field"
// //             required
// //           />
// //           <input
// //             type="text"
// //             placeholder="Mobile"
// //             value={mobile}
// //             onChange={(e) => setMobile(e.target.value)}
// //             className="input-field"
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="Password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="input-field"
// //             required
// //           />
// //           <button type="submit" className="btn">
// //             Register
// //           </button>
// //         </form>
// //       )}
// //       {open && (
// //         <div className="dialog">
// //           <h2>Success</h2>
// //           <p>Registration successful. Please login.</p>
// //           <button onClick={handleClose} className="btn">
// //             OK
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default AuthPage;


// // AuthPage.tsx
// import React, { useState, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import { checkUser, registerUser, loginUser } from "../services/api";
// import { useAuth } from "../context/AuthContext";

// function AuthPage() {
//   const [identifier, setIdentifier] = useState("");
//   const [userExists, setUserExists] = useState<boolean | null>(null);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [message, setMessage] = useState("");
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const handleCheckUser = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await checkUser(identifier);
//       if (response.exists) {
//         setUsername(response.user.username);
//         setUserExists(true);
//       } else {
//         setEmail(identifier.includes("@") ? identifier : "");
//         setMobile(!identifier.includes("@") ? identifier : "");
//         setUserExists(false);
//       }
//       setMessage("");
//     } catch (error: any) {
//       setMessage(`Error: ${error.message}`);
//     }
//   };

//   const handleLogin = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser({ username, password });
//       if (response.token) {
//         login(response.token);
//         setMessage("Login successful");
//         navigate("/");
//       } else {
//         setMessage("Invalid credentials");
//       }
//     } catch (error: any) {
//       setMessage(`Login failed: ${error.message}`);
//     }
//   };

//   const handleRegister = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await registerUser({
//         username,
//         email,
//         mobile,
//         password,
//       });
//       if (response.token) {
//         setMessage("Registration successful, please login");
//         setOpen(true);
//       } else {
//         setMessage("Registration failed");
//       }
//     } catch (error: any) {
//       setMessage(`Registration failed: ${error.message}`);
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setUserExists(null);
//     setIdentifier("");
//     setUsername("");
//     setPassword("");
//     setEmail("");
//     setMobile("");
//     navigate("/auth");
//   };

//   return (
//     <div className="auth-container">
//       <h2>Welcome to Pages</h2>
//       {message && <p className="message">{message}</p>}
//       {userExists === null && (
//         <form onSubmit={handleCheckUser}>
//           <input
//             type="text"
//             placeholder="Email or Mobile"
//             value={identifier}
//             onChange={(e) => setIdentifier(e.target.value)}
//             required
//           />
//           <button type="submit">Next</button>
//         </form>
//       )}
//       {userExists === true && (
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             readOnly
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//       )}
//       {userExists === false && (
//         <form onSubmit={handleRegister}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             placeholder="Mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Register</button>
//         </form>
//       )}
//       {open && (
//         <div className="dialog">
//           <h2>Success</h2>
//           <p>Registration successful. Please login.</p>
//           <button onClick={handleClose}>OK</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AuthPage;

import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { checkUser, registerUser, loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";
import "../assets/styles/AuthPage.css";

function AuthPage() {
  const [identifier, setIdentifier] = useState("");
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleCheckUser = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Checking user with identifier:', identifier);
    try {
      const response = await checkUser(identifier);
      console.log('Check user response:', response);
      if (response.exists) {
        setUsername(response.user.username);
        setUserExists(true);
      } else {
        setEmail(identifier.includes("@") ? identifier : "");
        setMobile(!identifier.includes("@") ? identifier : "");
        setUserExists(false);
      }
      setMessage("");
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Logging in with username:', username, 'password:', password);
    try {
      const response = await loginUser({ username, password });
      console.log('Login response:', response);
      if (response.token) {
        login(response.token);
        setMessage("Login successful");
        navigate("/");
      } else {
        setMessage("Invalid credentials");
      }
    } catch (error: any) {
      setMessage(`Login failed: ${error.message}`);
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    console.log('Registering user with username:', username, 'email:', email, 'mobile:', mobile);
    try {
      const response = await registerUser({
        username,
        email,
        mobile,
        password,
      });
      console.log('Register response:', response);
      if (response.token) {
        setMessage("Registration successful, please login");
        setOpen(true);
      } else {
        setMessage("Registration failed");
      }
    } catch (error: any) {
      setMessage(`Registration failed: ${error.message}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setUserExists(null);
    setIdentifier("");
    setUsername("");
    setPassword("");
    setEmail("");
    setMobile("");
    console.log('Redirecting to /auth');
    navigate("/auth");
  };

  return (
    <div className="auth-container">
      <h2>Welcome to Pages</h2>
      {message && <p className="message">{message}</p>}
      {userExists === null && (
        <form onSubmit={handleCheckUser}>
          <input
            type="text"
            placeholder="Email or Mobile"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
          <button type="submit">Next</button>
        </form>
      )}
      {userExists === true && (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            readOnly
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
      {userExists === false && (
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
      )}
      {open && (
        <div className="dialog">
          <h2>Success</h2>
          <p>Registration successful. Please login.</p>
          <button onClick={handleClose}>OK</button>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
