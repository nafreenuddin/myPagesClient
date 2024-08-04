// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../assets/styles/Navbar.css';

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       <Link to="/auth">Login/Register</Link>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../assets/styles/Navbar.css';

// const Navbar: React.FC = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const storedUsername = localStorage.getItem('username');
//     if (token && storedUsername) {
//       setLoggedIn(true);
//       setUsername(storedUsername);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     setLoggedIn(false);
//     navigate('/auth');
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/">Home</Link>
//       {loggedIn ? (
//         <>
//           <span>Welcome, {username}</span>
//           <button onClick={handleLogout} className="btn-logout">Logout</button>
//         </>
//       ) : (
//         <Link to="/auth">Login/Register</Link>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';


// const Navbar: React.FC = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('username');
//     navigate('/auth');
//   };

//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       {isLoggedIn ? (
//         <>
//           <Link to="/profile">Profile</Link>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <>
//           <Link to="/auth">Login</Link>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/auth">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;


