import React from "react";
import Fab from "@material-ui/core/Fab";
import {
  ClearRounded,
  OpenInNewRounded,
  MonetizationOnSharp,
  Description,
} from "@material-ui/icons";


import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import {AccountCircle, DescriptionRounded, FormatListBulletedOutlined } from '@material-ui/icons';

import classes from "./index.module.scss";

import MaterialTable from "material-table";

import { Link } from "react-router-dom";

function RequestsTable({setVisible}) {
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <MaterialTable
      title="График погашения"
      columns={[
        { title: "№", field: "index", cellStyle: { width: 20, minWidth: 'fit-content', maxWidth: 'fit-content' }, render: rowData => rowData.tableData.id + 1},
        { title: "Заявка", field: "requestID", align: "left" },
        { title: "Оферта", field: "offerID", type: "numeric", align: "left" },
        { title: "Дата", field: "date", align: "left" },
        { title: "ФИО", field: "fullName", type: "numeric", align: "left", render: rowData => <div className={classes.tdfullName}>{rowData.fullName}</div> },
        { title: "Статус", field: "status", align: "left" },
      ]}
      data={[
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
        { requestID: "10001", offerID: "10001", date: "22.07.2020", fullName: "Азизов Азиз Азизович", status: "Открытий"},
      ]}
      actions={[
        {
          icon: () => <Fab size="small" color="secondary"aria-label="add" className="dark fab"><OpenInNewRounded fontSize="small" /></Fab>,
          tooltip: 'Открыть',
          onClick: (event, rowData) => alert("You saved " + rowData.name)
        },
        rowData => ({
          icon: () => <Fab size="small" color="secondary"aria-label="add" className="secondary fab"><Description fontSize="small" /></Fab>,
          tooltip: 'Договор',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name),
          
        }),
        rowData => ({
          icon: () => <Fab size="small" color="secondary"aria-label="add" className="danger fab"><ClearRounded fontSize="small" /></Fab>,
          tooltip: 'Отказ',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name),
          
        }),
        rowData => ({
          icon: () => <Fab size="small" color="secondary"aria-label="add" className="success fab"><MonetizationOnSharp fontSize="small" /></Fab>,
          tooltip: 'Оплата',
          onClick: (event, rowData) => alert("You want to delete " + rowData.name),
          disabled: rowData.status === "Открытий",
          
        })
      ]}
      onRowClick={(evt, selectedRow) => {
        setSelectedRow(selectedRow.tableData.id);
        alert(selectedRow.fullName)
        setVisible(true);
      }}
      options={{
        minBodyHeight: window.innerHeight - 410,
        actionsColumnIndex: -1,
        exportButton: true,
        headerStyle: {
          backgroundColor: "#212529",
          color: "#FFF",
        },
        pageSize: window.innerHeight < 900 ? 8 : 10,
        paginationType: 'stepped',
        sorting: false,
        actionsCellStyle: {
    
          paddingLeft: 34,
          paddingRight: 34,
        },
        
        rowStyle: rowData => ({
          backgroundColor: (selectedRow === rowData.tableData.id) ? 'rgb(246, 246, 246)' : '#FFF'
        })
      }}
      components={
        {
          Toolbar: () => <div className={classes.filter}>
                            <div className={classes.title}>Фильтры</div>
                              <div><TextField label="Заявка" size="small" className={classes.input}
                               /></div>
                              <div><TextField label="Оферта" size="small" className={classes.input}
                               /></div>
                              <div><TextField label="Дата" size="small" className={classes.input}
                               /></div>
                              <div><TextField label="ФИО" size="small" className={classes.input}
                              /></div>
                              <div><TextField label="Статус" size="small" className={classes.input}
                              /></div>
                            </div>, 
        }
      }
      localization={{
        header: {
          actions: "Действия",
        },
        toolbar: {
          searchPlaceholder: "Поиск",
        },
      }}
      style={{ background: 'transparent'}}
    />
  );
}

export default RequestsTable;