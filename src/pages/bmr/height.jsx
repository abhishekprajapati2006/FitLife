import React, { useState } from 'react';
import './height.css'; // Import your CSS file for styling

const HeightSelector = () => {
  const [height, setHeight] = useState(170);

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
//   console.log(height);

  return (
    <div className="height-selector">
      <div className="height-label">Height (cm)</div>
      <div className="height-display">{height}</div>
      <input
        name="int"
        type="range"
        min="100"
        max="200"
        value={height}
        onChange={handleHeightChange}
        className="height-slider"
      />
    </div>
  );
};

export default HeightSelector;
