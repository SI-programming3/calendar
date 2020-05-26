import React from "react";
import Days from "./Days";

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
  let date = new Date();
  date.setDate(1);
  return (
    <div>
      calendar
      <Days day={day} date={date} />
    </div>
  );
}

export default Calendar;
