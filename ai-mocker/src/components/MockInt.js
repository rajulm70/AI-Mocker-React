import React from 'react';
import { Link } from 'react-router-dom';

export default function MockInt() {
    return (
        <div>
            <div 
                className="card" 
                style={{ 
                    width: '24rem', 
                    display: 'flex', 
                    borderRadius: '15px', // Rounded corners
                    cursor: 'pointer',
                    border: '1px solid rgba(0, 0, 0, 0.1)', // Faded border
                    boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', // Subtle shadow for depth
                    transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover effect transition
                    overflow: 'hidden' // Ensures image fits within border radius
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.05)'; // Scale up slightly on hover
                    e.currentTarget.style.boxShadow = '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'; // Stronger shadow on hover
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'; // Return to normal size
                    e.currentTarget.style.boxShadow = '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'; // Original shadow on hover leave
                }}
            >
                <img 
                    src="https://media.licdn.com/dms/image/D4D12AQF7Mqxy4FIVEA/article-cover_image-shrink_720_1280/0/1711745116465?e=2147483647&v=beta&t=3XktYOxULnZtf_GNFM7hLGpmmbLfHAsdyrz6ejMFP0Y" 
                    className="card-img-top" 
                    alt="Mock Interview" 
                    style={{
                        borderTopLeftRadius: '15px', // Match border radius for the image
                        borderTopRightRadius: '15px'
                    }}
                />
                <div className="card-body">
                    <h5 className="card-title">Mock Interview</h5>
                    <p className="card-text">
                        Prepare for your upcoming job interview with our AI-powered mock interview platform. Get instant feedback and improve your interview skills with AI-Mocker.
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Personalized interview experience</li>
                </ul>
                <div className="card-body">
                    <Link  className="card-link" to="/interview">Start Now</Link>
                    <Link className="card-link" href="/essay">Learn More</Link>
                </div>
            </div>
        </div>
    );
}
