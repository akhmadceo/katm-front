import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useDispatch } from 'react-redux'
import { setScheduleDateTo } from '../../redux/actions/schedule' 

export default function MaterialUIPickers({ setFieldValue }) {
  // The first commit of Material-UI
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = React.useState(
    moment().add(1, 'years')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFieldValue("contractDateTo", date);
    dispatch(setScheduleDateTo(moment(date)))
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
          label="Дата по"
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
