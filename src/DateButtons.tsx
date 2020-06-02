import React from "react";
import styles from "./DateButtons.module.css";

interface Props {
  yearIndex: number;
  monthIndex: number;
  onClick: (i: number, j: number) => void;
}

function DateButtons({ yearIndex, monthIndex, onClick }: Props) {
  const firstDate = new Date();
  firstDate.setFullYear(yearIndex);
  firstDate.setMonth(monthIndex);
  firstDate.setDate(1);
  const firstDay = firstDate.getDay();

  let date: number;
  let disabled = true;
  let buttonIndex: number;

  const dateButton = (j: number) => {
    if (j !== firstDate.getDay() || monthIndex !== firstDate.getMonth()) {
      disabled = true;
      return 0;
    } else {
      date = firstDate.getDate();
      firstDate.setDate(firstDate.getDate() + 1);
      disabled = false;
      return date;
    }
  };

  return (
    <div>
      {[...Array(6)].map((_, i) => {
        return (
          <div className={styles.row} key={i}>
            {[...Array(7)].map((_, j) => {
              buttonIndex = dateButton(j);
              return (
                <button
                  key={j}
                  className={`${styles.date_button} ${
                    j === 0 ? styles.Sunday : j === 6 ? styles.Saturday : ""
                  }`}
                  disabled={disabled}
                  onClick={() => {
                    const date = new Date();
                    date.setFullYear(yearIndex);
                    date.setMonth(monthIndex);
                    const nth = i * 7 + j;
                    const d = nth - firstDay + 1;
                    date.setDate(d);
                    onClick(d, j);
                  }}
                >
                  {buttonIndex === 0 ? "" : buttonIndex}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DateButtons;
