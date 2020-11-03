import React from "react";
import MaterialTable from "material-table";

import useDebounce from "../../utils/useDebounce";
import useScheduleCalc from "../../utils/useCalc";
import { useSelector, useDispatch } from 'react-redux';
import { setScheduleData } from '../../redux/actions/schedule' 

import {} from "@material-ui/icons";

function StickyHeadTable() {
  const dispatch = useDispatch()
  const { dateFrom, dateTo, total, data } = useSelector(({ scheduleCalc }) => scheduleCalc);
  const [state, setState] = React.useState({
    columns: [
      { title: "№", field: "index", render: rowData => rowData.tableData.id + 1},
      { title: "Дата", field: "date" },
      { title: "Сумма", field: "sum" },
    ],
  });

  let dataCalc = useScheduleCalc(dateFrom, dateTo, total, 300)

  React.useEffect(() => {
    
    setTimeout(() => {
      dispatch(setScheduleData(dataCalc))
    }, 1000)

  }, [dataCalc, dispatch])


  return (
    <>
      <MaterialTable
        title="График погашения"
        options={{
          headerStyle: {
            backgroundColor: "#212529",
            color: "#FFF",
          },
          minBodyHeight: window.innerHeight - 277,
          paging: false,
          actionsColumnIndex: -1,
          exportButton: true,
        }}
        columns={state.columns}
        data={data}
        localization={{
          header: {
            actions: "Действия",
          },
          toolbar: {
            searchPlaceholder: "Поиск",
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    </>
  );
}

export default StickyHeadTable;
