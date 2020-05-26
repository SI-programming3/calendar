import React from "react";
import styles from "./Days.module.css";

interface Props {
  day: string[];
  date: Date;
}

function Days(props: Props) {
  const month = props.date.getMonth();
  let date: number;
  return (
    <div>
      <div className={styles.row}>
        {props.day.map((i) => {
          return <span className={styles.days_span}>{i}</span>;
        })}
      </div>

      {[...Array(6)].map(() => {
        return (
          <div className={styles.row}>
            {[...Array(7)].map((_, i) => {
              if (
                i !== props.date.getDay() ||
                month !== props.date.getMonth()
              ) {
                return <span className={styles.date_span}>{""}</span>;
              }
              date = props.date.getDate();
              props.date.setDate(props.date.getDate() + 1);
              return <span className={styles.date_span}>{date}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Days;
