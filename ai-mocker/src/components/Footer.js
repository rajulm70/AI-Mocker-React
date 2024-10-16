// import React from 'react';

// export default function Footer() {
//   return (
//     <footer
//       style={{
//         width: '100%',
//         background: 'linear-gradient(45deg, #2a1e28, #7ab5a5)', // Darker gradient background
//         color: '#fff',
//         padding: '0px 0',  // Reduced padding for a smaller height
//       }}
//     >
//       <div
//         style={{
//           maxWidth: '1200px',
//           margin: '0 auto',
//           padding: '30px 0px',
//           display: 'flex',
//           justifyContent: 'space-between',
//           flexWrap: 'wrap',
//         }}
//       >
//         {/* Column 1: Company Name and Logo */}
//         <div style={{ flex: '1 1 250px', marginBottom: '0px' }}>
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             {/* Logo */}
//             <img
//               src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-artificial-intelligence-brain-graphic-element-png-image_11720064.png" // Update this path with your logo path
//               alt="AI-Mocker Logo"
//               style={{ width: '40px', height: '40px', marginRight: '10px' }}
//             />
//             <h5 style={{ marginBottom: '15px' }}>AI-Mocker</h5>
//           </div>
//           <p>
//             AI-Mocker is your go-to platform to practice mock interviews, essay writing, and quizzes, powered by AI. Get detailed feedback and enhance your skills.
//           </p>
//         </div>

//         {/* Column 2: Products */}
//         <div style={{ flex: '1 1 150px', marginLeft: '12%' }}>
//           <h5 style={{ marginBottom: '15px' }}>Products</h5>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             <li>Mock Interviews</li>
//             <li>AI Essay Writing</li>
//             <li>AI-based Quiz</li>
//           </ul>
//         </div>

//         {/* Column 3: Contact Information */}
//         <div style={{ flex: '1 1 250px', marginBottom: '0px' }}>
//           <h5 style={{ marginBottom: '15px' }}>Contact Us</h5>
//           <ul style={{ listStyleType: 'none', padding: 0 }}>
//             <li>Mathura, MA 10012, UP</li>
//             <li>Email: info@aimocker.com</li>
//             <li>Phone: +01 234 567 88</li>
//             <li>Phone: +01 234 567 89</li>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Links */}
//       <div
//         style={{
//           textAlign: 'center',
//           marginTop: '20px',
//         }}
//       >
//         <a
//           href="https://www.facebook.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: '0 10px', color: '#fff' }}
//         >
//           <i className="fab fa-facebook-f"></i>
//         </a>
//         <a
//           href="https://www.twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: '0 10px', color: '#fff' }}
//         >
//           <i className="fab fa-github"></i>
//         </a>
//         <a
//           href="https://www.linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: '0 10px', color: '#fff' }}
//         >
//           <i className="fab fa-linkedin-in"></i>
//         </a>
//         <a
//           href="https://www.instagram.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ margin: '0 10px', color: '#fff' }}
//         >
//           <i className="fab fa-instagram"></i>
//         </a>
//       </div>

//       {/* Footer Bottom Line */}
//       <div
//         style={{
//           textAlign: 'center',
//           marginTop: '10px',
//           borderTop: '1px solid #555',
//           paddingTop: '10px',
//         }}
//       >
//         &copy; 2024 AI-Mocker. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }


import React from 'react';
import './compo.css'; // Assuming this is the CSS file you're using

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Company Name and Logo */}
        <div className="footer-column company-info">
          <div className="logo-container">
            <img
              src="https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-artificial-intelligence-brain-graphic-element-png-image_11720064.png" // Update this path with your logo path
              alt="AI-Mocker Logo"
              className="logo"
            />
            <h5 className="company-name">AI-Mocker</h5>
          </div>
          <p className="company-description">
            AI-Mocker is your go-to platform to practice mock interviews, essay writing, and quizzes, powered by AI. Get detailed feedback and enhance your skills.
          </p>
        </div>

        {/* Column 2: Products */}
        <div className="footer-column products">
          <h5 className="footer-heading">Products</h5>
          <ul className="footer-list">
            <li>Mock Interviews</li>
            <li>AI Essay Writing</li>
            <li>AI-based Quiz</li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-column contact-info">
          <h5 className="footer-heading">Contact Us</h5>
          <ul className="footer-list">
            <li>Mathura, MA 10012, UP</li>
            <li>Email: info@aimocker.com</li>
            <li>Phone: +01 234 567 88</li>
            <li>Phone: +01 234 567 89</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Footer Bottom Line */}
      <div className="footer-bottom">
        &copy; 2024 AI-Mocker. All Rights Reserved.
      </div>
    </footer>
  );
}

