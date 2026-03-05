import React, { useState } from 'react';
import './ToggleButton.css'; // Import the CSS file

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      // Dynamically set the className based on the isActive state
      className={isActive ? 'toggle-button active' : 'toggle-button'}
    >
        {isActive ? 'ON'  : 'OFF'} 
      
    </button>
  );
};

export default ToggleButton;
