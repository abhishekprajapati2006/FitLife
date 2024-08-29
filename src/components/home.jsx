import React, { useState, useEffect } from 'react';
import BmrPage from "../assets/bmr.png"
import BmiPage from "../assets/bmi.png"
import TdeePage from "../assets/tdee.png"
import FatPage from "../assets/fat.png"
import { Link } from 'react-router-dom';
// import BmiHome from '../assets/bmiHome.png';
// import BmrHome from '../assets/bmrHome.png';
import DateObject from "react-date-object";
import { BatteryCharging, Dumbbell, Flame, HandCoins, HeartPulse, MapPin, Smile, SquareActivity, Zap } from 'lucide-react';
export default function Home({bmi}) {
  const duration = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time > 0) {
      const timerId = setTimeout(() => {
        setTime(time - 1000);
      }, 1000);

      return () => clearTimeout(timerId);
    }
  }, [time]);

  const getTime = (seconds) => {
    let total_seconds = parseInt(Math.floor(seconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let Day = parseInt(Math.floor(total_hours / 24));

    let Seconds = parseInt(total_seconds % 60);
    let Minutes = parseInt(total_minutes % 60);
    let Hours = parseInt(total_hours % 24);
    return `${Day}d ${Hours}h ${Minutes}m ${Seconds}s`;
  };

  var date = new DateObject();
  let currentDate = date.format("dddd, MMMM DD YYYY");

  return (
    <>
      <div className="w-full h-16 mx-5 py-2">
        <div className="text-xs">{currentDate}</div>
        <div className="text-4xl font-bold my-2 ">Fit Life</div>
      </div>
      <div className="ml-5">
        <div className="text-sm font-sans my-4">Cultivating a sense of purpose helps me find more peace and fulfillment in my life.</div>
        <Link to="/bmiHome">
        <div className="hover:shadow-gray-800 py-4 flex flex-row shadow-2xl shadow-gray-800 rounded-lg my-8 w-[20rem] h-[9rem] ml-6">
          <img src={BmiPage} alt="" className="w-14 h-[5rem] rounded-lg ml-[-2rem] shadow-md shadow-green-800 hover:shadow-green-900" />
          <div className="mx-4">
            <div className="flex flex-row gap-32 ">
              <div>
                <div className="font-sans text-md font-medium">Weight</div>
                <div className="text-xs text-gray-500 font-light">{getTime(time)}</div>
              </div>
              <div className="flex flex-row gap-2 text-emerald-400 font-light">
                <div className="border-b">BMI</div><HandCoins className="shadow-md shadow-emerald-600 hover:shadow-emerald-700 border-1 rounded-full p-1 w-6 h-6 bg-emerald-400 text-white"/>
              </div>
            </div>
            <hr className="my-2" />
            <div className="my-4 font-light text-xs text-gray-400">
              Quick health check—weight-to-height ratio!            
            <div className="flex flex-row gap-24 my-3"><Dumbbell className="shadow-md shadow-emerald-600 hover:shadow-emerald-700 border-1 rounded-full p-1 w-6 h-6 bg-emerald-400 text-white"/><Smile className="shadow-md shadow-emerald-600 hover:shadow-emerald-700 border-1 rounded-full p-1 w-6 h-6 bg-emerald-400 text-white"/><Flame className="shadow-md shadow-emerald-400 border-1 rounded-full p-1 w-6 h-6 bg-emerald-400 text-white"/></div>
            </div>
          </div>
        </div>
        </Link>
        <Link to="">
        <div className="hover:shadow-gray-800 py-4 flex flex-row shadow-2xl shadow-gray-800 rounded-lg my-8 h-[9rem] ml-6">
          <img src={BmrPage} alt="" className="w-14 h-[5rem] rounded-lg ml-[-2rem] shadow-md shadow-blue-800 hover:shadow-blue-900" />
          <div className="mx-4">
            <div className="flex flex-row gap-32 ">
              <div>
                <div className="font-sans text-md font-medium">Calories</div>
                <div className="text-xs text-gray-500 font-light">{getTime(time)}</div>
              </div>
              <div className="flex flex-row gap-2 text-[#5045e5] font-light">
                <div className="border-b">BMR</div><HeartPulse className="shadow-md shadow-[#5045e5] hover:shadow-blue-700 border-1 rounded-full p-1 w-6 h-6 bg-[#5045e5] text-white"/>
              </div>
            </div>
            <hr className="my-2" />
            <div className="my-4 font-light text-xs text-gray-400">
              Resting calorie needs—manage health! 
            <div className="flex flex-row gap-24 my-3"><HeartPulse className="shadow-md shadow-[#5045e5] hover:shadow-blue-700 border-1 rounded-full p-1 w-6 h-6 bg-[#5045e5] text-white"/><Flame className="shadow-md shadow-[#5045e5] hover:shadow-blue-700 border-1 rounded-full p-1 w-6 h-6 bg-[#5045e5] text-white"/><SquareActivity className="shadow-md shadow-[#5045e5] hover:shadow-blue-700 border-1 rounded-full p-1 w-6 h-6 bg-[#5045e5] text-white"/></div>
            </div>
          </div>
        </div>
        </Link>
        <Link to="">
        <div className="hover:shadow-gray-800 py-4 flex flex-row shadow-2xl shadow-gray-800 rounded-lg my-8 h-[9rem] ml-6">
          <img src={TdeePage} alt="" className="w-14 h-[5rem] rounded-lg ml-[-2rem] shadow-md shadow-slate-800 hover:shadow-slate-900" />
          <div className="mx-4">
            <div className="flex flex-row gap-32 ">
              <div>
                <div className="font-sans text-md font-medium">Energy</div>
                <div className="text-xs text-gray-500 font-light">{getTime(time)}</div>
              </div>
              <div className="flex flex-row gap-2 text-[#f39a2b] font-light">
                <div className="border-b">BMR</div><Zap className="shadow-md shadow-[#f39a2b] hover:shadow-yellow-600 border-1 rounded-full p-1 w-6 h-6 bg-[#f39a2b] text-white"/>
              </div>
            </div>
            <hr className="my-2" />
            <div className="my-4 font-light text-xs text-gray-400">
              Resting calorie needs—manage health! 
            <div className="flex flex-row gap-24 my-3"><Zap className="shadow-md shadow-[#f39a2b] hover:shadow-yellow-600 border-1 rounded-full p-1 w-6 h-6 bg-[#f39a2b] text-white"/><MapPin className="shadow-md shadow-[#f39a2b] hover:shadow-[#f39a2b] border-1 rounded-full p-1 w-6 h-6 bg-[#f39a2b] text-white"/><BatteryCharging className="shadow-md shadow-[#f39a2b] hover:shadow-yellow-600 border-1 rounded-full p-1 w-6 h-6 bg-[#f39a2b] text-white"/></div>
            </div>
          </div>
        </div>
        </Link>
        <Link to="">
        <div className="hover:shadow-gray-800 py-4 flex flex-row shadow-2xl shadow-gray-800 rounded-lg my-8 h-[9rem] ml-6">
          <img src={FatPage} alt="" className="w-14 h-[5rem] rounded-lg ml-[-2rem] shadow-md shadow-gray-800" />
          <div className="mx-4">
            <div className="flex flex-row gap-32 ">
              <div>
                <div className="font-sans text-md font-medium">Body Fat</div>
                <div className="text-xs text-gray-500 font-light">{getTime(time)}</div>
              </div>
              <div className="flex flex-row gap-2 text-gray-400 font-light">
                <div className="border-b">BMR</div><HeartPulse className="border-1 shadow-md shadow-gray-600 hover:shadow-gray-700 rounded-full p-1 w-6 h-6 bg-gray-400 text-white"/>
              </div>
            </div>
            <hr className="my-2" />
            <div className="my-4 font-light text-xs text-gray-400">
              Resting calorie needs—manage health! 
            <div className="flex flex-row gap-24 my-3"><HeartPulse className="shadow-md shadow-gray-600 hover:shadow-gray-700 border-1 rounded-full p-1 w-6 h-6 bg-gray-400 text-white"/><Flame className="shadow-md shadow-gray-600 hover:shadow-gray-700 border-1 rounded-full p-1 w-6 h-6 bg-gray-400 text-white"/><SquareActivity className="shadow-md shadow-gray-600 hover:shadow-gray-700 border-1 rounded-full p-1 w-6 h-6 bg-gray-400 text-white"/></div>
            </div>
          </div>
        </div>
        </Link>
        </div>
        </>
  );
}
