import React from 'react';
import { useTheme } from '../context/ThemeContext'; 
const ThemeSwitch = () => {
  const { toggleTheme } = useTheme();

  return (

   
    <button onClick={toggleTheme}> <i className="fas fa-moon"></i></button>
  );
};

export default ThemeSwitch;