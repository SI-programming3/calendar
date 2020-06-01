import React from "react";
import styles from "./Days.module.css";
import DateButton from "./DateButton";

interface Props {
  dayOfWeek: string[];
  yearIndex: number;
  monthIndex: number;
}

function Days({ dayOfWeek, yearIndex, monthIndex }: Props) {
  return (
    <div>
      <div>{`${yearIndex}年${monthIndex + 1}月`}</div>
      <div className={styles.row}>
        {dayOfWeek.map((d) => {
          return (
            <div key={d} className={styles.days_div}>
              {d}
            </div>
          );
        })}
      </div>

      <DateButton monthIndex={monthIndex} />
    </div>
  );
}

export default Days;
