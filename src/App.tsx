// import React from 'react';
// import Navbar from './components/Navbar';
// import AppRoutes from './routes';

// // const App: React.FC = () => {
// //   return (
// //     <div className="App">
// //       <Navbar />
// //       <AppRoutes />
// //     </div>
// //   );
// // }
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <AppRoutes />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
