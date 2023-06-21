import React from "react";

function Days({ filterdays }) {
  console.log(filterdays);
  return (
    <div style={{ color: "white" }}>
      <h2>date:{filterdays.date}</h2>
      {filterdays?.users?.map((name) => (
        <h3>{name}</h3>
      ))}
    </div>
  );
}

export default Days;
