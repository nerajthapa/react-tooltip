import React, { useState } from 'react';
import './App.css';
import './Tooltip.css';

function App({ messagePosition }) {
  // State variable to store the tooltip message
  const [message, setMessage] = useState(''); 

  // Event handler for mouse hover
  const handleHover = () => {
    setMessage("Thanks for Hovering! I'm a tooltip");
  };
  

  const handleLeave = () => {
    setMessage('');
  };

  // Create a dynamic class name for the tooltip element based on messagePosition prop
  const tooltipClasses = `tooltip tooltip--${messagePosition}`;
  return (
    <div className="App">
      <button onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        Hover Me
      </button>
      <p className={tooltipClasses}>{message}</p>
    </div>
  );
}

function ParentComponent() {
  // State variable to store the position of the tooltip
  const [position, setPosition] = useState('top');

  // Function to set the position of the tooltip
  const setMessagePosition = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div>
      <App messagePosition={position} />
      <p>Position: {position}</p>
      <div>
        <button onClick={() => setMessagePosition('top')}>Top</button>
        <button onClick={() => setMessagePosition('bottom')}>Bottom</button>
        <button onClick={() => setMessagePosition('left')}>Left</button>
        <button onClick={() => setMessagePosition('right')}>Right</button>
      </div>
    </div>
  );
}

export default ParentComponent;