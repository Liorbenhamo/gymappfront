import React, { useState } from "react";
import "./calendar.css";
import { useEffect } from "react";
import Day from "./Day";
import axios from "axios";
import { InfoContext } from "../src/App";
import Days from "./Days";
function Calendar() {
  const info = React.useContext(InfoContext);
  const [daysinmonth, setDaysinmonth] = useState([
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ]);
  const daysinweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const datedate = new Date().toString().slice(0, 3);
  let todayrow;
  const [startuseffect, setStartuseffect] = useState(false);
  const [startuseffect2, setStartuseffect2] = useState(false);
  const [days, setDays] = useState();
  const [daydata, setDaydata] = useState();
  todayrow = daysinweek.indexOf(datedate) + 1;
  const [clicked, setClicked] = useState();
  const [selectedday, setSelectedday] = useState();
  const [filterdays, setFilterdays] = useState();
  const [datepicked, setDatepicked] = useState();
  const [correntyear, setCorrentyear] = useState(new Date().getFullYear());
  const [correntmonth, setCorrentmonth] = useState(new Date().getMonth());
  const [correntday, setCorrentday] = useState(new Date().getDate());
  const [monthstart, setMonthstart] = useState(
    8 - ((correntday + 7 - todayrow) % 7)
  );
  function monthforword() {
    let check = monthstart + (daysinmonth[correntmonth] % 7);
    if (check == 7) {
      setMonthstart(7);
      setStartuseffect((perv) => !perv);
    } else {
      setMonthstart(check % 7);
      setStartuseffect((perv) => !perv);
    }
    if (correntmonth == 11) {
      setCorrentmonth(0);
      setCorrentyear((prev) => prev + 1);
    } else {
      setCorrentmonth((perv) => perv + 1);
    }
  }
  function monthback() {
    if (correntmonth == 0) {
      setCorrentmonth(11);
      setCorrentyear((prev) => prev - 1);
    } else {
      setCorrentmonth((perv) => perv - 1);
      console.log(correntmonth);
    }
    let temp;
    if (correntmonth == 0) {
      temp = daysinmonth[11];
    } else {
      temp = daysinmonth[correntmonth - 1];
    }
    if (monthstart > daysinmonth[correntmonth - 1] % 7) {
      setMonthstart(monthstart - (temp % 7));
      setStartuseffect((perv) => !perv);
      //   לא מפעיל את הפונקציה שמחכה לשינוי אם אין ערך חדש
    } else {
      setMonthstart(7 - ((temp % 7) - monthstart));
      setStartuseffect((perv) => !perv);
    }
  }
  async function handlesavedate() {
    let slected;
    if (datepicked.day) {
      console.log(datepicked);
      let date = `${datepicked.day}/${datepicked.month}/${datepicked.year}`;
      for (const day of daydata) {
        if (date == day.date) {
          slected = day;
          if (!day.users.includes(info.correntuser.username)) {
            try {
              await axios.put("http://localhost:3000/putdays", {
                date: date,
                day: datepicked.day,
                month: datepicked.month,
                year: datepicked.year,
                users: [...day.users, info.correntuser.username],
                _id: day._id,
              });
            } catch (err) {
              console.log(err);
            }
          } else {
            alert("you already sign in for this practice");
          }
        }
      }
      if (!slected) {
        try {
          await axios.post("http://localhost:3000/pilates", {
            date: date,
            day: datepicked.day,
            month: datepicked.month,
            year: datepicked.year,
            users: info.correntuser.username,
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
    setStartuseffect2((perv) => !perv);
  }
  useEffect(() => {
    if (correntyear % 4 == 0) {
      setDaysinmonth([31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    } else {
      setDaysinmonth([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
    }
  }, [correntyear]);
  useEffect(() => {
    const test = async () => {
      try {
        const res = await fetch("http://localhost:3000/days");
        const data = await res.json();
        setDaydata(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    test();
  }, [setStartuseffect2]);
  useEffect(() => {
    setFilterdays(
      daydata?.filter((day) => day.users.includes(info.correntuser.username))
    );
  }, [daydata]);
  useEffect(() => {
    setDays([]);
    for (let index = 0; index < daysinmonth[correntmonth]; index++) {
      setDays((prev) => [
        ...prev,
        { place: monthstart + index, num: index + 1 },
      ]);
    }
  }, [monthstart, startuseffect]);
  useEffect(() => {
    setDatepicked({ year: correntyear, month: correntmonth + 1, day: clicked });
  }, [clicked]);

  return (
    <div className="homepagebody">
      <div className="container">
        <div>
          <br />
          <br />
          <div className="gridcalendar">
            <div className="yearcalendar">{correntyear}</div>
            <div className="monthcalendar">
              <button className="btncalendarback" onClick={monthback}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
                  ></path>
                </svg>{" "}
                back
              </button>
              {correntmonth + 1}

              <button className="btncalendarforword" onClick={monthforword}>
                forword
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="sundaycalendar">sunday</div>
            <div className="mondaycalendar">monday</div>
            <div className="tuesdaycalendar">tuesday</div>
            <div className="wednesdaycalendar">wednesday</div>
            <div className="thursdaycalendar">thursday</div>
            <div className="fridaycalendar">friday</div>
            <div className="saturdaycalendar">saturday</div>
            {days?.map((item) => (
              <Day
                setClicked={setClicked}
                correntday={correntday}
                item={item}
              />
            ))}
            <div className="btnspotcalendar">
              <button onClick={handlesavedate} className="savedatebtn">
                save place in class
              </button>
            </div>
          </div>
          <h2 style={{ color: "white" }}>your registers classes:</h2>
          {filterdays?.map((item) => (
            <Days filterdays={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
