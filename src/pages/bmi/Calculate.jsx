import React, { useState } from 'react';
import './Calculate.css';
import BMIResult from './Result.jsx';
// import { Link } from 'react-router-dom';

export default function Calculate() {
  let [inputArr, setInputArr] = useState([]);
  let [inputData, setInputData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
  });

  let [showBMIResult, setShowBMIResult] = useState(false);
  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleAdd() {
    setInputArr([...inputArr, inputData]);
    console.log(inputData, 'input data that we entered...!');
    setInputData({ name: '', age: '', weight: '', height: '' });
  }

  let [height, setHeight] = useState(170);
  const handleHeightChange = (event) => {
    setHeight(event.target.value);  
  };
  console.log(height);
  
  function BMI() {
    let bmi = (inputData.weight / ((height / 100) * (height / 100))).toFixed(3);
    console.log('BMI is:', bmi);
    return bmi;
  }
  const bmi = BMI();

  function toggleBMIResult() {
    setShowBMIResult((prevShow) => !prevShow);
  }



  return (
    <div>
      <div className="">
        {showBMIResult ? (
          <BMIResult
            className="fixed"
            bmi={bmi}
            weight={inputData.weight}
            height={height}
            age={inputData.age}
            name={inputData.name}
          />
        ) : null}
        <div onClick={handleAdd} className="text-gray-400 font-bold font-sans-serif text-4xl text-center my-[1rem]">
          BMI Calculator
        </div>
        <div className="text-gray-400 font-bold font-sans-serif text-2xl text-center">
          Please Modify the values!
        </div>
        <div className=" my-[2rem] mx-[2.5rem]">
          {/* NAME */}
          <div className="my-[0.5rem]">
            <h1 className="text-lg font-sans-serif text-gray-600 md:text-3xl">
              Full Name*
            </h1>
            <input
              type="text"
              name="name"
              value={inputData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="px-[2.5rem] py-[1rem] rounded-lg "
            />
          </div>
          {/* AGE */}
          <div className="my-[0.5rem]">
            <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">
              Age*
            </h1>
            <input
              type="text"
              name="age"
              value={inputData.age}
              onChange={handleChange}
              placeholder="Enter Your Age"
              className="px-[2.5rem] py-[1rem] rounded-lg "
            />
          </div>
          {/* WEIGHT */}
          <div className="my-[0.5rem]">
            <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">
              WEIGHT*
            </h1>
            <input
              type="text"
              name="weight"
              value={inputData.weight}
              onChange={handleChange}
              placeholder="Enter Your Weight(kg)"
              className="px-[2.5rem] py-[1rem] rounded-lg"
            />
          </div>
          {/* HEIGHT */}
          <div className="my-[1rem]">
            <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">
              HEIGHT*
            </h1>
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
          </div>
          <div className="my-[2rem] ">
            <button
              onClick={toggleBMIResult}
              className="bg-gradient-to-l from-[#0a2556] to-[#144c8d] backdrop-blur-2xl font-bold text-lg px-[7rem] py-[1rem] rounded-lg text-center text-gray-200"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
