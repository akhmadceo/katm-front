import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import {
  OpenInNewRounded,
  PostAdd,
  MonetizationOnSharp,
  Description,
} from "@material-ui/icons";

import classes from "./index.module.scss";

import { Link } from "react-router-dom";

const columns = [
  { id: "no", label: "№", minWidth: 20, align: "center" },
  { id: "name", label: "ФИО", minWidth: 156 },
  {
    id: "passport",
    label: "Паспорт",
    minWidth: 80,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "pinfl",
    label: "ПИНФЛ",
    minWidth: 125,
    align: "left",
  },
  {
    id: "status",
    label: "Действие",
    minWidth: 144,
    align: "left",
    format: (value) => value.toFixed(2),
  },
];

function createData(no, name, passport, pinfl, status) {
  return { no, name, passport, pinfl, status };
}

const rows = [
  createData(
    "1",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "2",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "3",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "4",
    "Азизов Азиз Азизович",
    "CA 1234567",
    123123123123123,
    "open"
  ),
  createData(
    "5",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "6",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "7",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "8",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "9",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "10",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "1",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
  createData(
    "1",
    "Азизов Азиз Азизович",
    "CA 1234567",
    234567891012345,
    "open"
  ),
];

function StickyHeadTable({ setUserInfo, activeIndex }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className={classes.filter}>
        <div>Фильтры</div>
      </div>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                 
                  return (
                    <TableRow
                      onClick={() => setUserInfo(index)}
                      className={`${
                        index === activeIndex ? classes.active : null
                      }`}
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.no}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {(column.format && typeof value === "number") ||
                            value === "open" ? (
                              <div className={classes.buttons}>
                                <Link to={row.no}>
                                  <Fab
                                    size="small"
                                    color="secondary"
                                    aria-label="add"
                                    className="dark fab"
                                  >
                                    <OpenInNewRounded fontSize="small" />
                                  </Fab>
                                </Link>
                                <Fab
                                  size="small"
                                  color="secondary"
                                  aria-label="add"
                                  className="primary fab"
                                >
                                  <PostAdd fontSize="small" />
                                </Fab>
                                <Fab
                                  size="small"
                                  color="secondary"
                                  aria-label="add"
                                  className="warning fab"
                                >
                                  <Description fontSize="small" />
                                </Fab>
                                <Fab
                                  size="small"
                                  color="secondary"
                                  aria-label="add"
                                  className="success fab"
                                >
                                  <MonetizationOnSharp fontSize="small" />
                                </Fab>
                              </div>
                            ) : column.format && typeof value === "number" ? (
                              column.format(value)
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 13, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default StickyHeadTable;
