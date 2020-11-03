import React from "react";

import ContractForm from "./ContractForm";
import moment from "moment";
import { UserInfoTable, RequestsViewTable } from "../../components";
import "../views.scss";
function RequestsView() {
 
  return (
    <div className="blocks middle">
      <div className="blocks__left">
        <div className="block__header">
          <h2>Заявка <span> С 10001 </span> от 01.01.2020</h2>
        </div>
        <div className="block">
          
        </div>
        <div className="block bottom">
          <div className="block__inner">
            <UserInfoTable
              name="Азизов Азиз Азизович"
              pinfl="123456789101234"
              inn="123456789"
              passport="CA 1234567"
              katmSir="P2004120200609106686"
            />
          </div>
        </div>
      </div>
      <div className="blocks__right">
        <div className="block__header">
          <h2>Отчёты</h2>
        </div>
        <div className="block">
          <div className="block__inner fullHeight">
            <RequestsViewTable  />
          </div>
          <div className="total">
            <div className="totalAmount">
              <div className="title">Итого</div>
              <div className="totalSum">{} UZS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestsView;
