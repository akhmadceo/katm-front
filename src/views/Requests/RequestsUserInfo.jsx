import React from "react";

import {} from "@material-ui/icons";


import { BlockInfo, UserInfoBox, RequestsInfoBox } from "../../components";

function RequestsUserInfo({ toggleRef }) {
  

  return (
    <div className="blocks__right animate__animated animate__fadeInRight">
      <div className="block__header">
        
      
      </div>
      <div className="block">
        <BlockInfo />
        <UserInfoBox />
        <RequestsInfoBox />
      </div>
    </div>
  );
}

export default RequestsUserInfo;
