import React from 'react';
import { Link } from 'react-router-dom';

export default function MockQuizzy() {
  return (
    <div>
      <div>
        <div
          className="card text-center"
          style={{
            width: '24rem',
            display: 'flex',
            cursor: 'pointer',
            borderRadius: '15px', // Rounded corners
            border: '1px solid rgba(0, 0, 0, 0.1)', // Faded border
            boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', // Subtle shadow for depth
            transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover effect transition
            overflow: 'hidden', // Ensures image fits within border radius
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'; // Scale up slightly on hover
            e.currentTarget.style.boxShadow = '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'; // Stronger shadow on hover
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'; // Return to normal size
            e.currentTarget.style.boxShadow = '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'; // Original shadow on hover leave
          }}
        >
          <img
            src="https://i.ytimg.com/vi/Qm-HXhz2zbI/maxresdefault.jpg"
            className="card-img-top"
            alt="AI Quiz"
            style={{
              borderTopLeftRadius: '15px', // Match border radius for the image
              borderTopRightRadius: '15px',
            }}
          />
          <div className="card-body">
            <h5 className="card-title">AI-Powered Quiz</h5>
            <p className="card-text">
              Test your knowledge with AI-generated quizzes. Receive instant feedback and detailed explanations to improve your understanding of various topics.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Customized quizzes for every topic</li>
          </ul>
          <div className="card-body">
            <Link to="/quiz" className="card-link">
              Start Quiz
            </Link>
            <Link to="/" className="card-link">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
