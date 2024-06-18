import React from "react";
import '../../App.css';
import landingImage from '../../assets/landing_img.jpeg';

export const LandingPage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '0px',
      textAlign: 'left', // Adjust text alignment to left
      minHeight: '100vh',
    }}>
      <div style={{ alignSelf: 'flex-start' }}> {/* Container for text, aligned to the left */}
        <h1>Welcome to Our App</h1>
        <p style={{ marginBottom: '5px' }}>This is the best place to find what you are looking for.</p>
      </div>
      <img src={landingImage} alt="Landing Page" style={{ maxWidth: '100%', height: 'auto', maxHeight: '80vh', marginTop: '5px' }} />
    </div>
  );
};

export default LandingPage;