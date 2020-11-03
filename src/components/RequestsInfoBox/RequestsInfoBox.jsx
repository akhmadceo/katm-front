import React from "react";
import Fab from "@material-ui/core/Fab";
import {AccountCircle, DescriptionRounded, FormatListBulletedOutlined } from '@material-ui/icons';
import {
  ClearRounded,
  OpenInNewRounded,
  MonetizationOnSharp,
  Description,
} from "@material-ui/icons";

import styles from "./requestsInfoBox.module.scss";

function RequestsInfoBox() {
  return (
    <div className={styles.container}>
      <div className={styles.label}>Очёты</div>
      <div className={styles.table}>
        <div className={styles.rows}>
          <div>START</div><div>05.05.2020</div><div><Fab size="small" color="secondary"aria-label="add" className="primary fab"><OpenInNewRounded fontSize="small" /></Fab></div>
        </div>
        <div className={styles.rows}>
          <div>SCORING</div><div>05.05.2020</div><div><Fab size="small" color="secondary"aria-label="add" className="primary fab"><OpenInNewRounded fontSize="small" /></Fab></div>
        </div>
        <div className={styles.rows}>
          <div>HISTORY</div><div>05.05.2020</div><div><Fab size="small" color="secondary"aria-label="add" className="primary fab"><OpenInNewRounded fontSize="small" /></Fab></div>
        </div>
        <div className={styles.rows}>
          <div>INPS</div><div>05.05.2020</div><div><Fab size="small" color="secondary"aria-label="add" className="primary fab"><OpenInNewRounded fontSize="small" /></Fab></div>
        </div>
      </div>
    </div>
  );
}

export default RequestsInfoBox;
