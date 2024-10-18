import React from 'react';
import { Link } from 'react-router-dom';

export default function MockEssay() {
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
            src="https://scot-comp.co.uk/wp-content/uploads/sites/8/2024/08/58b9da3f-a63b-4055-ad03-f2ca01a1f33a.webp"
            className="card-img-top"
            alt="Essay Writing"
            style={{
              borderTopLeftRadius: '15px', // Match border radius for the image
              borderTopRightRadius: '15px',
            }}
          />
          <div className="card-body">
            <h5 className="card-title">AI Essay Writing</h5>
            <p className="card-text">
              Enhance your essay writing skills with our AI-powered platform. Receive real-time feedback on structure,
              grammar, and clarity to craft impactful essays.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Real-time feedback on essays</li>
          </ul>
          <div className="card-body">
            <Link to="/essay" className="card-link" >
              Start Writing
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
