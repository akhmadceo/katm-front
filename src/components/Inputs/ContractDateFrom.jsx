import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { useDispatch } from 'react-redux'
import { setScheduleDateFrom } from '../../redux/actions/schedule' 

import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers({ setFieldValue }) {
  // The first commit of Material-UI
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = React.useState(moment());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFieldValue("contractDateFrom", date);
    dispatch(setScheduleDateFrom(moment(date)))
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          fullWidth={true}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          label="Дата c"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
