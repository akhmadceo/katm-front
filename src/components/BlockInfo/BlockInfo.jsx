import React from "react";

import { PersonRounded } from "@material-ui/icons";

import styles from "./blockInfo.module.scss";

function BlockInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Заявка <span>10001</span> от 22.07.2020 </div>

      <ul className={styles.list}>
        <li><span>ОФЕРТА:</span><div>10001</div></li>
        <li><span>СТАТУС:</span><div>Закрытий</div></li>
      </ul>

      <div className={styles.iconProfile}>
        <PersonRounded />
      </div>
    </div>
  );
}

export default BlockInfo;
