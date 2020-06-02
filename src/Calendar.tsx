import React, { useState } from "react";
import Days from "./Days";
import styles from "./Calendar.module.css";

function Calendar() {
  const day: string[] = [
    "Sun.",
    "Mon.",
    "Tue.",
    "Wed.",
    "Thu.",
    "Fri.",
    "Sat.",
  ];
  const [YandM, setYandM] = useState(new Date());
  const [focusDay, setFocusDay] = useState("");

  const beforeClick = () => {
    setYandM(new Date(YandM.getFullYear(), YandM.getMonth() - 1));
  };
  const afterClick = () => {
    setYandM(new Date(YandM.getFullYear(), YandM.getMonth() + 1));
  };

  const handleClick = (i: number, j: number) => {
    setFocusDay(
      `${YandM.getFullYear()}年${YandM.getMonth() + 1}月${i}日${day[j]}`
    );
  };

  return (
    <div>
      calendar
      <div className={styles.row}>
        <button onClick={() => beforeClick()}>{"<"}</button>
        <button onClick={() => afterClick()}>{">"}</button>
      </div>
      <Days
        dayOfWeek={day}
        yearIndex={YandM.getFullYear()}
        monthIndex={YandM.getMonth()}
        onClick={(i: number, j: number) => handleClick(i, j)}
      />
      {focusDay}
    </div>
  );
}

export default Calendar;
