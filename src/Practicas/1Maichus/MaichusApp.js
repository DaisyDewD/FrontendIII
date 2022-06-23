
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from "./Pages/home/home";
import About from "./Pages/about/About";
import Career from "./Pages/career/Career";
import Education from "./Pages/education/Education";


const CardApp = ()=>{
    return (
      <BrowserRouter>
    <Routes>
      <Route path="/" exact element = {<Home />} />
      <Route path="/about" element = {<About />} />
      <Route path="/career" element = {<Career />} />
      <Route path="/education" element = {<Education />} />
    </Routes>
    
        
          
         
        </BrowserRouter>
      );
}

export default CardApp;