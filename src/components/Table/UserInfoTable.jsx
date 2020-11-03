import React from "react";
import "./userInfoTable.scss";

function UserInfoTable(props) {
  return (
    <div className="clientInfoTable">
      <div className="clientInfoTable__header">Клиент</div>
      <div className="clientInfoTable__body">
        <div className="clientInfoTable__body-item">
          <div className="item__label">
            <strong>ФИО</strong>
          </div>
          <div className="item__value">{props.name}</div>
        </div>
        <div className="clientInfoTable__body-item">
          <div className="item__label">
            <strong>ПИНФЛ</strong>
          </div>
          <div className="item__value">{props.pinfl}</div>
        </div>
        <div className="clientInfoTable__body-item">
          <div className="item__label">
            <strong>ИНН</strong>
          </div>
          <div className="item__value">{props.inn}</div>
        </div>
        <div className="clientInfoTable__body-item">
          <div className="item__label">
            <strong>Паспорт</strong>
          </div>
          <div className="item__value">{props.passport}</div>
        </div>
        <div className="clientInfoTable__body-item">
          <div className="item__label">
            <strong>КАТМ-SIR</strong>
          </div>
          <div className="item__value">{props.katmSir}</div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoTable;
