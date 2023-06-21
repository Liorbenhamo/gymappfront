import React from "react";
import "./exercise.css";
function Exercise({ item }) {
  console.log(item);
  return (
    <div>
      <div className="cardexercise">
        <h2>name:</h2>
        <p>{item.name}</p>
        <h3>type:</h3>
        <p>{item.type}</p>
        <h3>difficulty:</h3>
        <p>{item.difficulty}</p>
        <h3>equipment:</h3>
        <p>{item.equipment}</p>
        <h3>instructions:</h3>
        <p>{item.instructions}</p>
      </div>
    </div>
  );
}

export default Exercise;
