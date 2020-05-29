import React from "react";
import styles from "./Days.module.css";

interface Props {
  dayOfWeek: string[];
  monthIndex: number;
}

function Days({ dayOfWeek, monthIndex }: Props) {
  const firstDate = new Date();
  firstDate.setMonth(monthIndex);
  firstDate.setDate(1);

  let date: number;
  return (
    <div>
      <div>{`${monthIndex + 1}月`}</div>
      <div className={styles.row}>
        {dayOfWeek.map((d) => {
          return (
            <span key={d} className={styles.days_span}>
              {d}
            </span>
          );
        })}
      </div>

      {[...Array(6)].map((_, i) => {
        return (
          <div className={styles.row} key={i}>
            {[...Array(7)].map((_, j) => {
              return (
                <span key={j} className={styles.date_span}>
                  {(() => {
                    if (
                      j !== firstDate.getDay() ||
                      monthIndex !== firstDate.getMonth()
                    ) {
                      return "";
                    } else {
                      date = firstDate.getDate();
                      firstDate.setDate(firstDate.getDate() + 1);
                      return date;
                    }
                  })()}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Days;
