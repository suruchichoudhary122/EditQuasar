import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"

function App() {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      
    </Routes>
   </div>
  );
}

export default App;
