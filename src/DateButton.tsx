import React from "react";
import styles from "./DateButton.module.css";

interface Props {
  monthIndex: number;
}

function DateButton({ monthIndex }: Props) {
  const firstDate = new Date();
  firstDate.setMonth(monthIndex);
  firstDate.setDate(1);

  let date: number;
  let disabled = true;
  let buttonIndex: number | string;

  const dateButton = (j: number) => {
    if (j !== firstDate.getDay() || monthIndex !== firstDate.getMonth()) {
      disabled = true;
      return "";
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
                  className={styles.date_button}
                  disabled={disabled}
                >
                  {buttonIndex}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default DateButton;
