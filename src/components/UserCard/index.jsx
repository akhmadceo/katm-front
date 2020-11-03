import React from 'react'
import { PersonRounded } from "@material-ui/icons";

function UserCard({ name, passport, pinfl }) {
  return (
    <div className="userCard">
      <ul>
        <li>ФИО</li>
        <li>Паспорт</li>
        <li>ПИНФЛ</li>
      </ul>
      <ul>
        <li>{name}</li>
        <li>{passport}</li>
        <li>{pinfl}</li>
      </ul>
      <div className="iconProfile">
        <PersonRounded />
      </div>
    </div>
  );
}

export default UserCard
