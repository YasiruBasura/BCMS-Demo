import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
    <Navbar />

      
      <div className="flex gap-x-10">
        <div className="fixed z-10 top-20">
        <Sidebar />
        </div>       
        <Routes>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
