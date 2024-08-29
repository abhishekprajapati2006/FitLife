import React from 'react';
import './Result.css';
// import BmiResult from '.';

const Result = ({ bmi, weight, height, age, gender, name }) => {
  const healthyWeightRange = (height / 100) ** 2;
  const minHealthyWeight = (18.5 * healthyWeightRange).toFixed(1);
  const maxHealthyWeight = (24.9 * healthyWeightRange).toFixed(1);

    
  return (
    <div className="bmi-result bg-gradient-to-l from-[#1a2944] to-[#1d3f66] mx-[1rem] my-[8rem] backdrop-blur-xl p-[1rem] rounded-lg">
      <div className="bmi-label font-bold text-2xl text-slate-200">Hey {name}</div>
      <div className="flex flex-row mx-[3rem] my-[1rem]">
        <div className="font-bold text-slate-900 text-2xl backdrop-blur-xl">Your BMI:</div>
        <div className="bmi-value mx-[0.5rem] text-xl font-bold">{bmi}</div>
      </div>
      <div className="flex flex-row">
    {bmi < 18.5 ? (
      <div>
        <div className="backdrop-blur-xl text-sm text-white border-2 border-blue-400 bg-blue-400 rounded-sm">
          Underweight
        </div>
        <div className="backdrop-blur-xl text-sm text-white border-l-2 border-blue-400 bg-blue-400 rounded-b-sm mx-[3rem] w-[0.1rem] h-[0.5rem]"></div>
      </div>
    ) : bmi > 18.5 && bmi < 24.9 ? (
      <div className="mx-[4rem]">
        <div className="backdrop-blur-xl text-sm text-white border-2 border-green-700 bg-green-700 rounded-sm mx-[rem]">
          Normalweight
        </div>
        <div className="backdrop-blur-xl text-sm text-white border-2 border-green-700 bg-green-700 rounded-b-sm mx-[3rem] w-[0.1rem] h-[0.5rem]"></div>
      </div>
    ) : bmi > 25 && bmi < 29.9 ? (
      <div>
        <div className="backdrop-blur-xl text-sm text-white border-2 border-yellow-400 bg-yellow-400 rounded-sm">
          Overweight
        </div>
        <div className="backdrop-blur-xl text-sm text-white border-2 border-yellow-400 bg-yellow-400 rounded-b-sm mx-[3rem] w-[0.1rem] h-[0.5rem]"></div>
      </div>
    ) : bmi > 30 ? (
      <div className="mx-[14rem]">
        <div className="backdrop-blur-xl text-sm text-white border-2 border-red-500 bg-red-500 rounded-sm">
          Obesity
        </div>
        <div className="backdrop-blur-xl text-sm text-white border-2 border-red-500 bg-red-500 rounded-b-sm mx-[3rem] w-[0.1rem] h-[0.5rem]"></div>
      </div>
    ) : null}
  </div>
      <div className="bmi-status">
        <div className="bmi-scale">
          <div className="bmi-scale-bar bmi-scale-blue"></div>
          <div className="bmi-scale-bar bmi-scale-green"></div>
          <div className="bmi-scale-bar bmi-scale-yellow"></div>
          <div className="bmi-scale-bar bmi-scale-red"></div>
        </div>
      </div>
      <div className="bmi-info">
        <div className="bmi-info-item">
          <span className="bmi-info-value text-lg font-bold text-sm">{weight} kg</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-value text-lg font-bold text-sm">{height} cm</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-value text-lg font-bold text-sm">{age}</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-value text-lg font-bold text-sm">{gender}</span>
        </div>
      </div>
      <div className="bmi-info">
        <div className="bmi-info-item">
          <span className="bmi-info-label text-lg font-bold text-sm">Weight</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-label text-lg font-bold text-sm">Height</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-label text-lg font-bold text-sm">Age</span>
        </div>
        <div className="bmi-info-item">
          <span className="bmi-info-label text-lg font-bold text-sm">Gender</span>
        </div>
      </div>
      <div className="font-bold text-lg text-gray-500 my-[1rem]">
        Healthy weight range for your height: <br />
        <strong>{minHealthyWeight} kg - {maxHealthyWeight} kg</strong>
      </div>
      <div>
        <button className="bg-gradient-to-l from-[#0a2556] to-[#144c8d] backdrop-blur-2xl border-1 px-[6rem] py-[1rem] bg-slate-400 font-bold text-gray-200 text-lg rounded-xl">Close</button>
      </div>
    </div>
  );
};

export default Result;
