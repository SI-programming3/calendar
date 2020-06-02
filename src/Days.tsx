import React from "react";
import styles from "./Days.module.css";
import DateButtons from "./DateButtons";

interface Props {
  dayOfWeek: string[];
  yearIndex: number;
  monthIndex: number;
  onClick: (i: number, j: number) => void;
}

function Days({ dayOfWeek, yearIndex, monthIndex, onClick }: Props) {
  return (
    <div>
      <div>{`${yearIndex}年${monthIndex + 1}月`}</div>
      <div className={styles.row}>
        {dayOfWeek.map((d, i) => {
          return (
            <div
              key={d}
              className={`${styles.days_div} ${
                i === 0 ? styles.Sunday : i === 6 ? styles.Saturday : ""
              }`}
            >
              {d}
            </div>
          );
        })}
      </div>

      <DateButtons
        yearIndex={yearIndex}
        monthIndex={monthIndex}
        onClick={onClick}
      />
    </div>
  );
}

export default Days;
