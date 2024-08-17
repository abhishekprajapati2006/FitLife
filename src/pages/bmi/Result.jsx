import React from 'react';
import './Result.css';


const Result = ({ bmi, weight, height, age, gender,name}) => {
  const healthyWeightRange = (height / 100) ** 2;
  const minHealthyWeight = (18.5 * healthyWeightRange).toFixed(1);
  const maxHealthyWeight = (24.9 * healthyWeightRange).toFixed(1);

  return (
    <div className="bmi-result">
      <div className="bmi-label">Hey {name} Your BMI:</div>
      <div className="bmi-value">{bmi}</div>
      <div className="bmi-status">
        <span className="bmi-status-normal">Normal</span>
        <div className="bmi-scale">
          <div className="bmi-scale-bar bmi-scale-blue"></div>
          <div className="bmi-scale-bar bmi-scale-green"></div>
          <div className="bmi-scale-bar bmi-scale-yellow"></div>
          <div className="bmi-scale-bar bmi-scale-red"></div>
        </div>
      </div>
      <div className="bmi-info">
        <div className="bmi-info-item">
          <span className="bmi-info-value">{weight} kg</span>
          <span className="bmi-info-label">Weight</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-value">{height} cm</span>
          <span className="bmi-info-label">Height</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-value">{age}</span>
          <span className="bmi-info-label">Age</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-value">{gender}</span>
          <span className="bmi-info-label">Gender</span>
        </div>
      </div>
      <div className="bmi-healthy-weight">
        Healthy weight for the height: <br />
        <strong>{minHealthyWeight} kg - {maxHealthyWeight} kg</strong>
      </div>
      <button className="bmi-close-button">Close</button>
    </div>
  );
};

export default Result;
