//import "./App.css";

import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Prompt from "./Components/Prompt";
import OpenAi from "./Components/OpenAi";
import { Home } from "@mui/icons-material";
import Navbar from "./Components/Navbar"


function App() {

  return (
    <div className="bg-gray-800 h-screen">
      {/*<div className="flex items-center justify-between p-2 bg-gradient-to-r from-indigo-600 via-blue-800 to-purple-700">
        <p className="text-white text-xl "><a href="/">Open Ai</a></p>
    
  </div>*/}
      
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Homepage />} />
        <Route path="/Generate" element={<OpenAi />} />
        <Route path="/Prompt" element={<Prompt />} />

      </Routes>
      </BrowserRouter>
        
      
    </div>

  );
}

export default App;
