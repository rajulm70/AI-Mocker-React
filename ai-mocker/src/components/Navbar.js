// import React from 'react';
// // import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <div>
//       <nav 
//         className="navbar navbar-expand-lg py-3 navbar-dark" 
//         style={{
//           background: 'linear-gradient(45deg, #3f1f45, #a4e7d1)', // New gradient background
//         }}
//       >
//         <div className="container-fluid">
//           <img
//             src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-artificial-intelligence-brain-graphic-element-png-image_11720064.png"
//             alt="AI Logo"
//             style={{ width: '30px', marginRight: '8px' }} // Adjust size and margin as needed
//           />
//           <b>
//             <a className="navbar-brand" to="/">AI-Mocker</a>
//           </b>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse ms-1" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item ms-5">
//                 <a className="nav-a active" aria-current="page" href="/">
//                   Dashboard
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-a" href="/interview">
//                   Mock-Interview
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-a" href="/quiz">
//                   Quizzy
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-a" href="/essay">
//                   Essay-Writing
//                 </a>
//               </li>
//               <li className="nav-item mx-2">
//                 <a className="nav-a" href="/about">
//                   About Us
//                 </a>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <button className="btn btn-primary mx-4" type="submit">
//                 Login
//               </button>
//               <button className="btn btn-primary" type="submit">
//                 Signup
//               </button>
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg py-3 navbar-dark"
        style={{
          background: 'linear-gradient(45deg, #3f1f45, #a4e7d1)', // New gradient background
          
        }}
      >
        <div className="container-fluid">
          <img
            src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-artificial-intelligence-brain-graphic-element-png-image_11720064.png"
            alt="AI Logo"
            style={{ width: '30px', marginRight: '8px' }} // Adjust size and margin as needed
          />
          <b>
            <Link className="navbar-brand" to="/">AI-Mocker</Link>
          </b>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-1" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-5">
                <Link className="nav-link " aria-current="page" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/interview">
                  Mock-Interview
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/quiz">
                  Quizzy
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/essay">
                  Essay-Writing
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            
              <Link to="/login" className="btn btn-primary mx-2" role="button">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary mx-2" role="button">
                Register
              </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
