import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/job-details')
    };

    const backgroundStyle = {
        background: 'linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={backgroundStyle}>
            <h1>Welcome to Home page,</h1>
            <h1>Click below to go to form</h1>
            <button style={{ width: '10rem', height: '4rem' }} onClick={handleClick}>Form</button>
        </div>
    )
}

export default Home