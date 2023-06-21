import React, { useEffect, useState } from "react";
import Manbody from "../component/Manbody";
import "./Workoutexercise.css";
import Exercise from "../component/exercise";

function Workoutexercise() {
  const [bodypart, setBodypart] = useState();
  const [women, setWomen] = useState(false);
  const [string, setString] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ab91c96668msha147f021cb07807p13eceajsn256314909fbf",
          "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
        },
      };

      try {
        if (bodypart) {
          const response = await fetch(
            `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${bodypart}`,
            options
          );
          const result = await response.json();
          setString(result);
          console.log(result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [bodypart]);
  return (
    <div className="workoutbody">
      <div className="containerworkout">
        <div className="svgexercise">
          <Manbody setBodypart={setBodypart} />
        </div>
        {bodypart && (
          <div className="textworkout">
            <h1>{bodypart}:</h1>
            {string?.map((item) => (
              <Exercise item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Workoutexercise;
