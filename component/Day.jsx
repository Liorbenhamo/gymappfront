import React from "react";
import "./calendar.css";
function Day({ item, correntday, setClicked }) {
  let color;
  if (correntday == item.num) {
    color = "red";
  }

  return (
    <div
      onClick={() => setClicked(item.num)}
      className={"calendarplace" + `${item.place}`}
    >
      {item.num}
    </div>
  );
}

export default Day;
