// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import AuthPage from './pages/AuthPage';
// import Profile from './pages/ProfilePage';
// import Navbar from './components/Navbar';

// // const AppRoutes: React.FC = () => {
// //   return (
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/auth" element={<AuthPage />} />
// //       <Route path="/profile" element={<Profile />} />
// //     </Routes>
// //   );
// // };
// const AppRoutes: React.FC = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/auth" element={<AuthPage />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import Profile from './pages/ProfilePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
