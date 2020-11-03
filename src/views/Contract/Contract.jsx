import React from "react";

import ContractForm from "./ContractForm";
import moment from "moment";
import { UserInfoTable, RepaymentScheduleTable } from "../../components";
import "../views.scss";
function Contract() {

  console.log('render')
 
  return (
    <div className="blocks middle">
      <div className="blocks__left">
        <div className="block__header">
          <h2>Оформление договора</h2>
        </div>
        <div className="block">
          <ContractForm  />
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
          <h2>График погашения</h2>
        </div>
        <div className="block">
          <div className="block__inner fullHeight">
            <RepaymentScheduleTable  />
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

export default Contract;
