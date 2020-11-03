import React from "react";

import PaymentForm from "./PaymentForm";
import moment from "moment";
import { UserInfoTable, PaymentTablec } from "../../components";
import "../views.scss";

function Payment() {
  const [diff, setDiff] = React.useState(0);
  const [startDate, setStartDate] = React.useState(moment());
  const [totalSum, setTotalSum] = React.useState(0);

  return (
    <div className="blocks middle">
      <div className="blocks__left">
        <div className="block__header">
          <h2>Оформление платежа</h2>
        </div>
        <div className="block">
          <PaymentForm
            setDiff={setDiff}
            setStartDate={setStartDate}
            setTotalSum={setTotalSum}
          />
        </div>
        <div className="block bottom">
          <div className="block__inner blockMax">
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
          <div className="block__inner maxHeight">
            <PaymentTablec />
          </div>
          <div className="infoTotal">
            <span></span>
            <div className="infoTotalAmount">
              <div className="infoTitle">Оплачено</div>
              <div className="infoTotalSum green">11.500.000 UZS</div>
            </div>
            <div className="infoTotalAmount">
              <div className="infoTitle">Не оплачено</div>
              <div className="infoTotalSum">11.500.000 UZS</div>
            </div>
            <div className="infoTotalAmount">
              <div className="infoTitle">Просрочено</div>
              <div className="infoTotalSum red">11.500.000 UZS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
