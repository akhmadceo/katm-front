import React from "react";
import { FormatListNumberedRounded,  } from "@material-ui/icons";
import {  Switch, Button  } from "@material-ui/core";

import "../views.scss";

import { UserCard } from '../../components/index'
import RequestForm from "./RequestForm";

function Request() {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="blocks">
      <div className="blocks__left">
        <div className="block__header">
          <h2>Оформление заявки</h2>
        </div>
        <div className="block">
          <RequestForm />
        </div>
      </div>
      <div className="blocks__right">
        <div className="block__header">
          <h2>Физ. Лицо</h2>
          <Switch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <Button
            variant="contained"
            size="small"
            className="warning left"
            startIcon={<FormatListNumberedRounded />}
          >
            К списку
          </Button>
        </div>
        <div className="block">
          <UserCard name="Азизов Азиз Азизович" passport="AA 8791235" pinfl="30512199843212" />
          <UserCard name="Азизов Азиз Азизович" passport="AA 8791235" pinfl="30512199843212"/>
          <UserCard name="Азизов Азиз Азизович" passport="AA 8791235" pinfl="30512199843212"/>
          <UserCard name="Азизов Азиз Азизович" passport="AA 8791235" pinfl="30512199843212"/>
        </div>
      </div>
    </div>
  );
}

export default Request;
