import React from "react";


import styles from "./applications.module.scss";

function ApplicationsInfo({title, first, second, third}) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>

      <ul className={styles.list}>
        <li><span>{first.count}</span><div>{first.label}</div></li>
        <li><span>{second.count}</span><div>{second.label}</div></li>
        <li><span>{third.count}</span><div>{third.label}</div></li>
      </ul>
 
    </div>
  );
}

export default ApplicationsInfo;
