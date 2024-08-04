// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// // import './index.css';

// const container = document.getElementById('root');

// if (!container) {
//   throw new Error('Failed to find the root element');
// }

// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>
// );

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// import { AuthProvider } from './context/AuthContext';
// // import './index.css';

// const container = document.getElementById('root');

// if (!container) {
//   throw new Error('Failed to find the root element');
// }

// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <Router>
//       <AuthProvider>
//         <App />
//       </AuthProvider>
//     </Router>
//   </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
// import './index.css';

const container = document.getElementById("root");

if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
