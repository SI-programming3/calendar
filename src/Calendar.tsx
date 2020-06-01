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

  const beforeClick = () => {
    setYandM(new Date(YandM.getFullYear(), YandM.getMonth() - 1));
  };
  const afterClick = () => {
    setYandM(new Date(YandM.getFullYear(), YandM.getMonth() + 1));
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
      />
    </div>
  );
}

export default Calendar;
