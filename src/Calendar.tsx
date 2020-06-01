import React from "react";
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
  let today = new Date();

  const beforeClick = () => {
    today.setMonth(today.getMonth() - 1);
  };
  const afterClick = () => {
    today.setMonth(today.getMonth() + 1);
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
        yearIndex={today.getFullYear()}
        monthIndex={today.getMonth()}
      />
    </div>
  );
}

export default Calendar;
