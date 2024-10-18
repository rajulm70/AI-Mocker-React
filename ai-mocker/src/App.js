// import './App.css';
// import Dashboard from './components/Dashboard';
// import Footer from './components/Footer';
// // import MockEssayDashboard from './components/MockEssayDashboard';
// // import MockIntDashboard from './components/MockIntDashboard';
// // import MockQuizDashboard from './components/MockQuizDashboard';
// import Navbar from './components/Navbar';
// import Working from './components/Working';

// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route
// // } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <Navbar />
//     <Dashboard />
//     <Working />
//     <Footer />
    
    
//     </>
//   );
// }

// export default App;

import './App.css';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import MockEssayDashboard from './components/MockEssayDashboard';
import MockIntDashboard from './components/MockIntDashboard';
import MockQuizDashboard from './components/MockQuizDashboard';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Working from './components/Working';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Dashboard />
              <Working />
            </>} />
            <Route path="/interview" element={<MockIntDashboard />} />
            <Route path="/essay" element={<MockEssayDashboard />} />
            <Route path="/quiz" element={<MockQuizDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* <Working /> */}
          <Footer />
      </Router>
    </>
  );
}

export default App;
