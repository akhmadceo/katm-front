import React from "react";
import { TextField } from "@material-ui/core";
import InputMask from "react-input-mask";

function PhoneInput(props) {
  return (
    <InputMask {...props} mask="+\9\98 99 999 99 99" maskChar="">
      {(inputProps) => (
        <TextField
          {...inputProps}
          type="tel"
          autoComplete="off"
          label="Телефон"
          variant="outlined"
          size="small"
        />
      )}
    </InputMask>
  );
}

export default PhoneInput;
