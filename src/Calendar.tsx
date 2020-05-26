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
      <Days day={day} />
    </div>
  );
}

export default Calendar;
