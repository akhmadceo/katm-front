import React from "react";
import MaterialTable from "material-table";
import Fab from "@material-ui/core/Fab";
import { AddCircle, Receipt } from "@material-ui/icons";

export default function PaymentTablec() {
  return (
    <MaterialTable
      title="График погашения"
      columns={[
        { title: "Дата", field: "date", cellStyle: { minWidth: "10px" } },
        { title: "Сумма", field: "sum", align: "left" },
        { title: "Статус", field: "status", type: "numeric", align: "left" },
      ]}
      data={[
        { date: "01.07.2020", sum: 1, status: "Оплачен" },
        { date: "01.07.2020", sum: 2, status: "Не оплачен" },
      ]}
      actions={[
        (rowData) => ({
          icon:
            rowData.status === "Не оплачен"
              ? () => (
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    className="primary fab"
                  >
                    <AddCircle fontSize="small" />
                  </Fab>
                )
              : () => (
                  <Fab
                    size="small"
                    color="secondary"
                    aria-label="add"
                    className="success fab"
                  >
                    <Receipt fontSize="small" />
                  </Fab>
                ),
          tooltip: rowData.status === "Не оплачен" ? "Оплата" : "Чек",
          onClick:
            rowData.status === "Не оплачен"
              ? (event, rowData) => alert("You want to Add " + rowData.sum)
              : (event, rowData) => alert("You want to Check " + rowData.sum),
        }),
      ]}
      options={{
        minBodyHeight: window.innerHeight - 410,
        actionsColumnIndex: -1,
        exportButton: true,
        headerStyle: {
          backgroundColor: "#212529",
          color: "#FFF",
        },
        paging: false,
        actionsCellStyle: {
          paddingLeft: 34,
          paddingRight: 34,
        },
      }}
      localization={{
        header: {
          actions: "Действия",
        },
        toolbar: {
          searchPlaceholder: "Поиск",
        },
      }}
    />
  );
}
