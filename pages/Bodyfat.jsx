import React, { useState } from "react";

import "./bodyfat.css";
import Calculator from "../component/Calculator";
import Workoutplan from "../component/Workoutplan";
function Bodyfat() {
  const [trainingplan, setTrainingplan] = useState();
  return (
    <div className="bodyfatpagebody">
      <div className="containerbodyfat">
        <Calculator
          trainingplan={trainingplan}
          setTrainingplan={setTrainingplan}
        />
        <br />
        <br />
        <Workoutplan trainingplan={trainingplan} />
      </div>
    </div>
  );
}

export default Bodyfat;
