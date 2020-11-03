import React from "react";
import clsx from 'clsx';
import { Formik, Field, Form } from "formik";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from '@material-ui/core/FormControl';
import TextField from "@material-ui/core/TextField";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
  },
}));

function FormikField({name, label, placeholder, variant, style}) {

    const classes = useStyles();
  

  return (
    <FormControl fullWidth  className={clsx( classes.textField)}  variant="outlined" style={style}>
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <Field
            as={OutlinedInput}
            autoComplete="off"
            name={name}
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                disabled
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <AccountCircleIcon />
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
  );
}

export default FormikField;
