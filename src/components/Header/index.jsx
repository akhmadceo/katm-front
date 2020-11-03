import React from "react";
import { Link } from "react-router-dom";

import { IconButton, Button, TextField } from "@material-ui/core";

import {
  AppsRounded,
  HomeRounded,
  InsertDriveFile,
  DescriptionRounded,
  MonetizationOnRounded,
  InfoRounded,
  NotificationsRounded,
  TranslateRounded,
  PersonRounded,
} from "@material-ui/icons";

function Header({ open, toggleSidebar }) {
  return (
    <div id="header">
      <div className="container">
        <div className="nav">
          <div className={`nav__left ${open ? "opened" : null}`}>
            <IconButton
              onClick={toggleSidebar}
              size="small"
              aria-label="Home"
              className="rectBtn"
            >
              <AppsRounded fontSize="small" />
            </IconButton>
            <Link to="/">
              <IconButton size="small" aria-label="Home" className="rectBtn">
                <HomeRounded fontSize="small" />
              </IconButton>
            </Link>
            <form className="mainSearch" noValidate autoComplete="off">
              <TextField placeholder="Поиск" variant="outlined" size="small" />
            </form>
            <Link to="/request">
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<InsertDriveFile />}
              >
                Заявка
              </Button>
            </Link>
            <Link to="/contract">
              <Button
                variant="contained"
                size="small"
                className="warning"
                startIcon={<DescriptionRounded />}
              >
                Договор
              </Button>
            </Link>
            <Link to="/payment">
              <Button
                variant="contained"
                size="small"
                className="success"
                startIcon={<MonetizationOnRounded />}
              >
                Оплата
              </Button>
            </Link>
          </div>
          <div className="nav__right">
            <IconButton size="small" aria-label="Home" className="rectBtn">
              <InfoRounded fontSize="small" />
            </IconButton>
            <IconButton size="small" aria-label="Home" className="rectBtn">
              <NotificationsRounded fontSize="small" />
            </IconButton>
            <IconButton size="small" aria-label="Home" className="rectBtn">
              <TranslateRounded fontSize="small" />
            </IconButton>
            <Link to="/auth">
            <IconButton size="small" aria-label="Home" className="rectBtn">
              <PersonRounded fontSize="small" />
            </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
