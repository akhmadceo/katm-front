import React from "react";
import { NavLink } from 'react-router-dom'

import logo from "../../assets/img/Logo.png";
import {
  HomeRounded,
  PeopleRounded,
  DescriptionRounded,
  InsertDriveFile,
  AssignmentRounded,
  Tune,
  Settings,
  Assessment,
} from "@material-ui/icons";


function SidebarMenu({ open, toggleSidebar }) {
  return (
    <div id="sidebarMenu" className={open ? null : "closed"}>
      <div className="menuBlocks">
        <div className="brand">
          <img src={logo} alt="Logo Img" />
        </div>
        <ul className="menu noselect">
          <NavLink exact to="/" className="menu__item">
            <HomeRounded fontSize="large" />
            <span>Главная</span>
          </NavLink>
          <NavLink to="/clients" className="menu__item">
            <PeopleRounded fontSize="large" />
            <span>Клиенты</span>
          </NavLink>
          <NavLink to="/requests" className="menu__item">
            <InsertDriveFile fontSize="large" />
            <span>Заявки</span>
          </NavLink>
          <NavLink to="/contracts" className="menu__item">
            <DescriptionRounded fontSize="large" />
            <span>Договора</span>
          </NavLink>
          <NavLink to="/applications" className="menu__item">
            <AssignmentRounded fontSize="large" />
            <span>Отчеты</span>
          </NavLink>
          <NavLink to="/services" className="menu__item">
            <Tune fontSize="large" />
            <span>Сервисы</span>
          </NavLink>
          <NavLink to="/settings" className="menu__item">
            <Settings fontSize="large" />
            <span>Настройки</span>
          </NavLink>
          <NavLink to="/analytics" className="menu__item">
            <Assessment fontSize="large" />
            <span>Аналитика</span>
          </NavLink>
        </ul>

        <div
          className={`menuToggle ${open ? null : "open"}`}
          onClick={toggleSidebar}
        >
          <i className="material-icons">chevron_left</i>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenu;
