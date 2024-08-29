// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Female from '../../assets/female.png';
// import Male from '../../assets/male.png';
// import BMIResult from './Result.jsx';

// export default function bmrHome() {

//     const [gender, setGender] = useState('');

//     function onClick1(){
//         setGender('male');
//     }
//     function onClick2(){
//         setGender('female');
//     }
   
//   return (
//     <div>
//       <div className="hidden">
//         <BMIResult gender={gender} />
//       </div>
//       <div className="text-gray-400 font-bold font-sans-serif text-4xl text-center my-[2rem]">BMI Calculator</div>
//       <div className="text-gray-400 font-bold font-sans-serif text-2xl text-center">Please Choose Your Gender!</div>
//       <div className="flex flex-col gap-[2rem] my-[4rem]">
//         <Link onClick={onClick1} to="/bmrCal" className="flex flex-row backdrop-blur-xl border-2 rounded-full mx-[1rem] w-[22rem] h-[10.3rem]">
//           <div className="my-[2rem] ml-[1.8rem]">
//             <div className="text-gray-300 font-bold font-sans-serif text-3xl ">Male</div>
//             <div className="text-gray-400 font-bold font-sans-serif text-sm w-[10rem] my-[0.5rem]  ">Click here to calculate your BMI now!</div>
//           </div>
//           <div className=""><img src={Male} alt="" className="w-[10rem] h-[10rem] border-4 border-slate-900 rounded-full "  /></div>
//         </Link>
//         <Link onClick={onClick2} to="/bmrCal"  className="flex flex-row border-2 rounded-full mx-[1rem] w-[22rem] h-[10.3rem] ">
//           <div className="my-[2rem] ml-[1.8rem]">
//             <div className="text-gray-300 font-bold font-sans-serif text-3xl ">Female</div>
//             <div className="text-gray-400 font-bold font-sans-serif text-sm w-[10rem] my-[0.5rem] ">Click here to calculate your BMI now!</div>
//           </div>
//           <div className=""><img src={Female} alt="" className="w-[10rem] h-[10rem] border-4 border-slate-900 rounded-full"  /></div>
//         </Link>
//       </div>
//     </div>
//   )
// }




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Female from '../../assets/female.png';
import Male from '../../assets/male.png';
import BMIResult from './Result.jsx';

export default function BmrHome() {
  const [gender, setGender=''] = useState('');

  function onClick1() {
    setGender('male');
  }

  function onClick2() {
    setGender('female');
  }

  return (
    <div>
      <div className="hidden">
        <BMIResult gender={"male"} />
      </div>
      <div className="text-gray-400 font-bold font-sans-serif text-4xl text-center my-[2rem]">BMR Calculator</div>
      <div className="text-gray-400 font-bold font-sans-serif text-2xl text-center">Please Choose Your Gender!</div>
      <div className="flex flex-col gap-[2rem] my-[4rem]">
        <Link onClick={() => onClick1()} to="/bmrCal" className="flex flex-row backdrop-blur-xl border-2 rounded-full mx-[1rem] w-[22rem] h-[10.3rem]">
          <div className="my-[2rem] ml-[1.8rem]">
            <div className="text-gray-300 font-bold font-sans-serif text-3xl">Male</div>
            <div className="text-gray-400 font-bold font-sans-serif text-sm w-[10rem] my-[0.5rem]">Click here to calculate your BMI now!</div>
          </div>
          <div><img src={Male} alt="Male" className="w-[10rem] h-[10rem] border-4 border-slate-900 rounded-full" /></div>
        </Link>
        <Link onClick={() => onClick2()} to="/bmrCal" className="flex flex-row border-2 rounded-full mx-[1rem] w-[22rem] h-[10.3rem]">
          <div className="my-[2rem] ml-[1.8rem]">
            <div className="text-gray-300 font-bold font-sans-serif text-3xl">Female</div>
            <div className="text-gray-400 font-bold font-sans-serif text-sm w-[10rem] my-[0.5rem]">Click here to calculate your BMI now!</div>
          </div>
          <div><img src={Female} alt="Female" className="w-[10rem] h-[10rem] border-4 border-slate-900 rounded-full" /></div>
        </Link>
      </div>
    </div>
  );
}
