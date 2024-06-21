import React from "react";
import '../../App.css';
import landingImage from '../../assets/landing_img.png';

export const LandingPage = () => {
  return (
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '-20px',
      textAlign: 'left', 
      minHeight: '100vh',
    }}>
      <div style={{ alignSelf: 'flex-start' }}> 
        <h1 style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
    }}>The man, the master, a King of Horror.</h1>
        <p style={{ marginBottom: '5px' }}>

    Stephen King needs no introduction. King sold his first short story in 1967 ("The Glass Floor" to Startling Mystery Stories) and he continued to sell short stories as a way to supplement his income as he worked as a laborer at an industrial laundry. His wife, Tabitha, helped a lot to support him as he started his writing career. Thank you, Tabitha. Seriously. 

In 1971, King began teaching English at a high school in Maine, while continuing to work on novels and short stories. Horror fans will know that his first novel was Carrie, published in 1974. 

Besides being an accomplished author, King has also taught creative writing at the University of Maine and has a bit of an acting career - having often appeared in movies based on his novels (my favourite was him as a pizza delivery worker in Rose Red). Though, his role as Jordy Verrill in Creepshow's "The Lonesome Death of Jordy Verrill" will forever haunt me. He made his directorial debut in 1985, as well as his directorial debut, with the movie "Maximum Overdrive". 

King is the 2003 recipient of The National Book Foundation Medal for Distinguished Contribution to American Letters and the 2014 National Medal of Arts.

A short bio for a man with a long history in the horror industry but, if you're a horror fanatic like me, he really didn't need an intro to begin with. </p>
      </div>
      <img src={landingImage} alt="Landing Page" style={{ maxWidth: '100%', height: 'auto', maxHeight: '80vh', marginTop: '5px' }} />
    </div>
  );
};

export default LandingPage;