import React from "react";

import styles from "./userInfoBox.module.scss";

function UserInfoBox() {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Азизов Азиз Азизович</div>
      <div className={styles.table}>
          <div className={styles.rows}>
            <div>ПАСПОРТ</div><div>CA 1234567</div>
          </div>
          <div className={styles.rows}>
            <div>ПИНФЛ</div><div>1234567810123459</div>
          </div>
          <div className={styles.rows}>
            <div>ИНН</div><div>123456789</div>
          </div>
          <div className={styles.rows}>
            <div>KATM-SIR</div><div>P2004120200609106686</div>
          </div>
      </div>
    </div>
  );
}

export default UserInfoBox;
