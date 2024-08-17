import React from "react";
import Navbar from "./components/navbar.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/bmi/bmiHome.jsx";
import BmiCal from "./pages/bmi/Calculate.jsx";
import Result from "./pages/bmi/Result.jsx";
// import Contact from "./pages/contact";
 

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route  exact path="/calculate" element={<Home />} />
        <Route path="/" element={<BmiCal />} />
        <Route path="/contact"element={<Result />}/>
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* <Route path="/sign-up" element={<SignUp />}/> */}
    </Routes>
</Router>
 
  );
}

export default App;
