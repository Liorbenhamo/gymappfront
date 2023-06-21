import { useState, createContext } from "react";
import Navbar from "../component/Navbar";
import HomePage from "../pages/HomePage";
import Subscription from "../pages/Subscription";
import Workoutexercise from "../pages/Workoutexercise";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pilates from "../pages/pilates";
import Bodyfat from "../pages/Bodyfat";
export const InfoContext = createContext();
function App() {
  const [correntuser, setCorrentuser] = useState();
  const obj = {
    correntuser,
    setCorrentuser,
  };
  console.log(correntuser);
  return (
    <div>
      <InfoContext.Provider value={obj}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar correntuser={correntuser} />}>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/register" element={<Workoutexercise />}></Route>
              <Route path="/Subscription" element={<Subscription />}></Route>
              <Route path="/pilates" element={<Pilates />}></Route>
              <Route path="/bodyfat" element={<Bodyfat />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </InfoContext.Provider>
    </div>
  );
}

export default App;
