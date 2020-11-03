import React from "react";

import {} from "@material-ui/icons";


import { BlockInfo, ApplicationsInfo, RequestsInfoBox } from "../../components";

function RequestsUserInfo({ toggleRef }) {
 

  

  return (
    <div className="blocks__right animate__animated animate__fadeInRight">
      <div className="block__header">
        
      </div>
      <div className="block">
        <BlockInfo />
        <ApplicationsInfo title="Заявки" first={{count: 1, label: "Открытие"}} second={{count: 1, label: "Открытие"}} third={{count: 1, label: "Открытие"}}/>
        <ApplicationsInfo title="Договора"  first={{count: 1, label: "Открытие"}} second={{count: 1, label: "Открытие"}} third={{count: 1, label: "Открытие"}}/>
        <RequestsInfoBox />
      </div>
    </div>
  );
}

export default RequestsUserInfo;
