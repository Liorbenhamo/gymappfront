import React from "react";
import "./workoutplan.css";
function Workoutplan({ trainingplan }) {
  console.log(trainingplan);
  return (
    <div className="workoutplanbody">
      <div className="workoutplantext">
        {trainingplan && (
          <div>
            <div className=".workoutplanbody">
              <h1>workoutplan:</h1>
              <h3>notice</h3>
              <p>
                your workout is for your first month in the gym and used to help
                you start a workout routine with main goal to learn excrsice
                form and are not replace to uniqe program for your goal time and
                body type
              </p>

              <br />
              <br />
              <br />
            </div>
            <div className="workoutplancard">
              <h2>{trainingplan?.name}:</h2>
              {trainingplan?.days?.map((item) => {
                return (
                  <div>
                    <h3>{item?.name}</h3>
                    {item.exercises ? (
                      <ul>
                        {item.exercises?.map((exersice) => {
                          return <li>{exersice} 3 sets </li>;
                        })}
                      </ul>
                    ) : (
                      <div>rest</div>
                    )}
                  </div>
                );
              })}
              <p>
                you call your rest time betwin sets and the weights by your
                strength try to finish your last rep with fail
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Workoutplan;
