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
  return (
    <div>
      calendar
      <Days dayOfWeek={day} monthIndex={4} />
    </div>
  );
}

export default Calendar;
