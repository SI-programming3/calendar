import React from "react";
import styles from "./Days.module.css";

interface Props {
  day: string[];
}

function Days(props: Props) {
  return (
    <div className={styles.days_row}>
      {props.day.map((i) => {
        return <span className={styles.days_span}>{i}</span>;
      })}
    </div>
  );
}

export default Days;
