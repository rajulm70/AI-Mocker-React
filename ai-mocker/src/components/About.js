import React from 'react';

export default function About() {
    return (
        <div style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1920&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=c0d43804e2c7c93143fe8ff65398c8e9)',
            backgroundSize: 'cover', // Ensure the background covers the entire area
            backgroundPosition: 'center', // Center the background image
            minHeight: '100vh',
        }}>
            <h1 style={{ textAlign: 'center', padding: '20px', color:'white' }}><b>Meet Our Team!</b></h1>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',  // Spread out the cards evenly
                flexWrap: 'wrap',               // Allows wrapping on smaller screens
                gap: '20px',                    // Adds some space between the cards
                padding: '20px',                 // Padding around the card row
                height: '70vh'
            }}>
                <div className="card" style={{
                    width: '18rem', height: '20rem',
                    border: '1px solid rgba(0, 0, 0, 0.1)', // Faded border
                    boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}>
                    <img
                        src={require('./Assets/MyPhoto-bg.png')} // Replace with your image URL
                        className="card-img-top"
                        alt="..."
                        style={{ height: '60%' }}
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Rajul Mishra</h5>
                        <p className="card-text">Full Stack Developer</p>
                        <a href="#" className="card-link"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="card-link"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                <div className="card" style={{
                    width: '18rem', height: '20rem',
                    border: '1px solid rgba(0, 0, 0, 0.1)', // Faded border
                    boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}>
                    <img
                        src={require('./Assets/Vansh-bg.png')} // Replace with your image URL
                        className="card-img-top"
                        alt="..."
                        style={{ height: '60%' }}
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Vansh Kumar</h5>
                        <p className="card-text">Full Stack Developer</p>
                        <a href="#" className="card-link"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="card-link"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                <div className="card" style={{
                    width: '18rem', height: '20rem',
                    border: '1px solid rgba(0, 0, 0, 0.1)', // Faded border
                    boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}>
                    <img
                        src={require('./Assets/Yogi-bg.png')} // Replace with your image URL
                        className="card-img-top"
                        alt="..."
                        style={{ height: '60%' }}
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Yogendra Sisodiya</h5>
                        <p className="card-text">Full Stack Developer</p>
                        <a href="#" className="card-link"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="card-link"><i className="fab fa-github"></i></a>
                    </div>
                </div>

                <div className="card" style={{
                    width: '18rem', height: '20rem',
                    border: '1px solid rgba(0, 0, 0, 0.1)', // Faded border
                    boxShadow: '7px 22px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}>
                    <img
                        src={require('./Assets/Rishabh-bg.png')} // Replace with your image URL
                        className="card-img-top"
                        alt="..."
                        style={{ height: '60%' }}
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Rishabh Pandey</h5>
                        <p className="card-text">Full Stack Developer</p>
                        <a href="#" className="card-link"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="card-link"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
}
