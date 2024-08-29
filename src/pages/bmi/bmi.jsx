import React from 'react';
import './Result.css';
// import BmiResult from '.';

const bmi = ({ bmi, weight, height, age, gender, name }) => {
  const healthyWeightRange = (height / 100) ** 2;
  const minHealthyWeight = (18.5 * healthyWeightRange).toFixed(1);
  const maxHealthyWeight = (24.9 * healthyWeightRange).toFixed(1);

  let message1,message2,message3,message4;
    if(bmi<18.5){
      message1="UnderWeight";
    }
    else if(bmi>18.5 &&  bmi<24.9){
      message2="NormalWeight";
    }
    else if(bmi>25 &&  bmi<29.9){
      message3="OverWeight";
    }
    else if(bmi>30){
      message4="Obesity";
    }
    console.log(gender);
    
  return (
    <div className="bmi-result bg-gradient-to-l from-[#1a2944] to-[#1d3f66] mx-[1rem] my-[8rem] backdrop-blur-xl p-[1rem] rounded-lg">
      <div class="relative bg-gradient-to-r from-indigo-500 to-blue-600 p-6 rounded-xl w-80 h-80">
    <div class="text-white font-semibold text-lg">
        Let’s see today’s schedule
    </div>
    
    <div class="absolute right-4 bottom-4">
        {/* <img src="your-illustration.png" alt="3D Character" class="h-40"> */}
    </div>
    <div class="absolute bottom-0 left-0 w-full h-1/2 bg-black rounded-t-full"></div>
    
    <div class="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-full flex items-center justify-center">
        <span class="text-white text-sm">↻</span>
    </div>
</div>

    </div>
  );
};

export default bmi;
