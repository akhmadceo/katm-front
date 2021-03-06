import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers({ setFieldValue }) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFieldValue("requestDate", date);
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
          label="Дата"
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
