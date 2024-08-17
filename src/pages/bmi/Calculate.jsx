import React, { useState } from 'react';
import './Calculate.css';
import BMIResult from './Result.jsx';


export default function BmiResult() {

  let [inputArr, setInputArr] = useState([]);
  let [inputData, setInputData] = useState({
    name: "",
    age: "",
    weight:"",
    height:""
  });

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleAdd() {
    setInputArr([...inputArr, inputData]);
    console.log(inputData, "input data that we entered...!");
    setInputData({ name: "", age: "" ,weight: "", height: ""});
  }

  let [height, setHeight] = useState(170);

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  console.log(height);

  // BMI CALCULATE
  function BMI(){
     let bmi = (inputData.weight/((height/100)*(height/100)));
    console.log("BMI is:", bmi);
    return bmi;
  }
  BMI();


  return (
    <div>
      <div className="">
      <BmiResult bmi={BMI} weight={inputData.weight} height={height} age={inputData.age} gender={"Male"} name={inputData.name} />
        <div className="text-gray-400 font-bold font-sans-serif text-4xl text-center my-[1rem]">BMI Calculator</div>
        <div className="text-gray-400 font-bold font-sans-serif text-2xl text-center">Please Modify the values!</div>
        <div className=" my-[2rem] mx-[3rem]">
          {/* NANE */}
          <div className="my-[0.5rem]">
            <h1 className="text-lg font-sans-serif text-gray-600 md:text-3xl">Full Name*</h1>
            <input
              type="text"
              name="name"
              value={inputData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="px-[2rem] py-[1rem] rounded-lg "
            />
          </div>
          {/* AGE */}
          <div className="my-[0.5rem]">
            <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">Age*</h1>
            <input
              type="text"
              name="age"
              value={inputData.age}
              onChange={handleChange}
              placeholder="Enter Your Age"
              className="px-[2rem] py-[1rem] rounded-lg "
            />
          </div>
          {/* WEIGHT */}
          <div className="my-[0.5rem]">
            <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">WEIGHT*</h1>
            <input
              type="text"
              name="weight"
              value={inputData.weight}
              onChange={handleChange}
              placeholder="Enter Your Weight(kg)"
              className="px-[2rem] py-[1rem] rounded-lg"
            />
          </div>
          {/* HEIGHT */}
          <div className="my-[1rem]">
            <h1 className="text-xl font-sans-serif text-gray-600 md:text-3xl">HEIGHT*</h1>
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
          <div onChange={handleAdd} className="my-[2rem] ">
            <button onClick={BMI} className="bg-gradient-to-t from-red-600 to-pink-400 hover:bg-gradient-to-t hover:from-red-700 hover:to-pink-500 font-bold px-[6.5rem] py-[1rem] rounded-lg text-center text-gray-300">Calculate</button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-2xl font-bold">Hey {inputData.name} Your BMI</div>
        <div className="">{BMI.call}</div>
        <div className=""></div>
        <div className="">
          <tbody>
            <tr className="flex flex-row gap-[1rem]">
              <td>{inputData.weight}</td>
              <td>{height}</td>
              <td>{inputData.age}</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>Height</td>
              <td>Age</td>
              <td>Gender</td>
            </tr>
          </tbody>
        </div>
        <div className="">Healthy weight for the height</div>
        <div className=""><b className="">53.5 kg - 72.3 kg</b></div>
      </div>
      <BMIResult/>
    </div>
  );
}
