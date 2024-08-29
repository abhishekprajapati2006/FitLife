import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Home from './components/home.jsx';
import BmiHome from './pages/bmi/bmiHome.jsx';
import BmiCalculate from './pages/bmi/Calculate.jsx';
import BmiResult from './pages/bmi/Result.jsx';
import Navnar from "./components/navbar.jsx"
// import BmrHome from './pages/bmr/bmrHome.jsx';
// import BmrCalculate from './pages/bmr/Calculate.jsx';
// import BmrResult from './pages/bmr/Result.jsx';

// import Bmi from './pages/bmi/bmi.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply theme class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);
  return (
    <div className={`py-1 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmiHome" element={<BmiHome />} />
        <Route path="/bmiCal" element={<BmiCalculate />} />
        <Route path="/bmiResult" element={<BmiResult />} />

        {/* <Route path="/bmrHome" element={<BmrHome />} />
        <Route path="/bmrResult" element={<BmrResult />} />
        <Route path="/bmrCal" element={<BmrCalculate />} />
        <Route path="/bmi" element={<Bmi />} /> */}
      </Routes>
      <Navnar/>
        <div onClick={toggleTheme} className=" mt-[-0.8rem] mx-[19rem] h-9 cursor-pointer">
            {darkMode ? (
              <Sun className="text-yellow-500" size={30}/>
            ) : (
              <Moon className="text-gray-500" size={30}/>
            )}
        </div>
    </Router>
    </div>
  );
}

export default App;
